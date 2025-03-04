// Servicio de caché para archivos de audio
const CACHE_NAME = 'podcast-audio-cache-v1';
const MAX_CACHE_SIZE = 500 * 1024 * 1024; // 500MB máximo de caché

export const AudioCacheService = {
  /**
   * Comprueba si el recurso está en caché
   * @param {string} url - URL del archivo de audio
   * @returns {Promise<Response|null>} - Respuesta en caché o null si no existe
   */
  async getFromCache(url: string): Promise<Response | null> {
    try {
      const cache = await caches.open(CACHE_NAME);
      const cachedResponse = await cache.match(url);
      
      if (cachedResponse) {
        console.log(`[AudioCache] Recurso encontrado en caché: ${url}`);
        return cachedResponse;
      }
      
      return null;
    } catch (error) {
      console.error('[AudioCache] Error al obtener de caché:', error);
      return null;
    }
  },

  /**
   * Añade un recurso a la caché
   * @param {string} url - URL del archivo de audio
   * @returns {Promise<void>}
   */
  async addToCache(url: string): Promise<void> {
    try {
      // Comprobar si tenemos espacio en la caché
      await this.manageCacheSize();
      
      const cache = await caches.open(CACHE_NAME);
      console.log(`[AudioCache] Añadiendo a caché: ${url}`);
      
      // Realizar una nueva petición para cachear
      const response = await fetch(url, { method: 'GET' });
      
      if (response.ok) {
        // Clonar la respuesta antes de cachear y antes de leer el body
        const responseToCache = response.clone();
        await cache.put(url, responseToCache);
        console.log(`[AudioCache] Recurso cacheado correctamente: ${url}`);
      }
    } catch (error) {
      console.error('[AudioCache] Error al añadir a caché:', error);
    }
  },

  /**
   * Gestiona el tamaño de la caché, eliminando elementos antiguos si es necesario
   */
  async manageCacheSize(): Promise<void> {
    try {
      const cache = await caches.open(CACHE_NAME);
      const keys = await cache.keys();
      const cacheSize = await this.getCacheSize();
      
      console.log(`[AudioCache] Tamaño actual de caché: ${(cacheSize / (1024 * 1024)).toFixed(2)}MB`);
      
      if (cacheSize > MAX_CACHE_SIZE && keys.length > 0) {
        console.log(`[AudioCache] La caché excede el tamaño máximo. Eliminando elementos antiguos...`);
        
        // Eliminar el 20% más antiguo de los elementos
        const deleteCount = Math.ceil(keys.length * 0.2);
        const keysToDelete = keys.slice(0, deleteCount);
        
        for (const request of keysToDelete) {
          await cache.delete(request);
          console.log(`[AudioCache] Eliminado: ${request.url}`);
        }
      }
    } catch (error) {
      console.error('[AudioCache] Error al gestionar tamaño de caché:', error);
    }
  },

  /**
   * Obtiene el tamaño aproximado de la caché
   * @returns {Promise<number>} - Tamaño en bytes
   */
  async getCacheSize(): Promise<number> {
    try {
      const cache = await caches.open(CACHE_NAME);
      const keys = await cache.keys();
      let totalSize = 0;
      
      for (const request of keys) {
        const response = await cache.match(request);
        if (response && response.clone().body) {
          // Convertir la respuesta a un blob para obtener su tamaño
          const blob = await response.clone().blob();
          totalSize += blob.size;
        }
      }
      
      return totalSize;
    } catch (error) {
      console.error('[AudioCache] Error al calcular tamaño de caché:', error);
      return 0;
    }
  },

  /**
   * Carga un archivo de audio usando la caché si está disponible
   * @param {string} url - URL del archivo de audio 
   * @returns {Promise<Blob>} - Blob del audio
   */
  async loadAudio(url: string): Promise<Blob> {
    // Intentar obtener de la caché primero
    const cachedResponse = await this.getFromCache(url);
    
    if (cachedResponse) {
      return await cachedResponse.blob();
    }
    
    // Si no está en caché, realizar la solicitud y cachear
    console.log(`[AudioCache] Recurso no encontrado en caché, descargando: ${url}`);
    const response = await fetch(url);
    const blob = await response.blob();
    
    // Almacenar en caché para usos futuros (en segundo plano)
    this.addToCache(url).catch(error => 
      console.error('[AudioCache] Error al cachear después de descarga:', error)
    );
    
    return blob;
  },

  /**
   * Limpia toda la caché
   */
  async clearCache(): Promise<void> {
    try {
      await caches.delete(CACHE_NAME);
      console.log('[AudioCache] Caché eliminada completamente');
    } catch (error) {
      console.error('[AudioCache] Error al limpiar caché:', error);
    }
  }
};

export default AudioCacheService;