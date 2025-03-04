<template>
  <div class="podcast-player-wrapper">
    <br>
    <Breadcrumb :routes="breadcrumbRoutes" />
    
    <img loading="lazy" :src="imageLink" alt="Podcast cover" class="podcast-image" />

    <!-- Indicador de carga del audio -->
    <div v-if="isLoading" class="loading-indicator">
      <div class="spinner"></div>
      <div class="loading-text">Cargando audio...</div>
    </div>
    
    <!-- Mensaje de error -->
    <div v-if="errorMessage" class="error-message">
      {{ errorMessage }}
      <button @click="loadPodcastData" class="retry-button">Reintentar</button>
    </div>
    
    <audio controls ref="audioElement" class="audio-player" :src="audioSrc">
      Tu navegador no soporta la reproducción de audio.
    </audio>
    
    <div class="footer">
      <button class="btn" :disabled="!hasPreviousPodcast" @click="handlePreviousPodcast">
        <img src="@/assets/icons/btn-back.svg" alt="Atrás" />
      </button>
      <button class="btn" :disabled="!isNextEnabled" @click="handleNextPodcast">
        <img src="@/assets/icons/btn-forward.svg" alt="Siguiente" />
      </button>
    </div>
  </div>
</template>


<script lang="ts">
import { defineComponent, ref, onMounted, onUnmounted, watch } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import Breadcrumb from '@/common/components/Breadcrumb.vue';
import AudioCacheService from '@/services/cache/AudioCacheService';


export default defineComponent({
  name: 'PodcastPlayerPage',
  components: {
    Breadcrumb,
  },
  setup() {
    const route = useRoute();
    const router = useRouter();

    const moduleIndex = ref(parseInt(route.query.moduleIndex as string));
    const podcastIndex = ref(parseInt(route.query.podcastIndex as string));

    const title = ref('');
    const description = ref('');
    const audioLink = ref('');
    const imageLink = ref('');

    const audioSrc = ref(''); // Nueva referencia para el blob URL
    const isLoading = ref(false); // Indicador de carga
    const loadingProgress = ref(0); // Progreso de carga
    const errorMessage = ref(''); // Mensaje de error

    const audioElement = ref<HTMLAudioElement | null>(null);
    const progress = ref(0);
    const isNextEnabled = ref(false);
    const hasPreviousPodcast = ref(false);

    const courseId = localStorage.getItem('currentCourseId');
    const breadcrumbRoutes = ref([
      { label: 'Inicio', path: '/' },
      { label: 'Ruta', path: courseId ? `/journey?course=${courseId}` : '/journey' },
      { label: `Módulo ${moduleIndex.value + 1} - Podcast ${podcastIndex.value + 1}`, path: '' }
    ]);

    const updateBreadcrumb = () => {
      breadcrumbRoutes.value = [
        { label: 'Inicio', path: '/' },
        { label: 'Ruta', path: courseId ? `/journey?course=${courseId}` : '/journey' },
        { label: `Módulo ${moduleIndex.value + 1} - Podcast ${podcastIndex.value + 1}`, path: '' }
      ];
    };

    // Función para cargar el audio usando el servicio de caché
    const loadAudioWithCache = async (url: string) => {
      if (!url) return;
      
      try {
        isLoading.value = true;
        errorMessage.value = '';
        
        // Revocar cualquier URL de objeto anterior para liberar memoria
        if (audioSrc.value && audioSrc.value.startsWith('blob:')) {
          URL.revokeObjectURL(audioSrc.value);
        }
        
        // Iniciar la carga con el servicio de caché
        console.log(`Cargando audio: ${url}`);
        const blob = await AudioCacheService.loadAudio(url);
        
        // Crear un URL de objeto a partir del blob
        const blobUrl = URL.createObjectURL(blob);
        audioSrc.value = blobUrl;
        
        console.log(`Audio cargado y listo para reproducir: ${blobUrl}`);
        
        // Si el elemento de audio ya existe, actualizar su src
        if (audioElement.value) {
          audioElement.value.src = blobUrl;
          resetAudio();
        }
        
        isLoading.value = false;
      } catch (error) {
        console.error('Error al cargar audio con caché:', error);
        errorMessage.value = 'Error al cargar el audio. Inténtalo de nuevo.';
        isLoading.value = false;
        
        // En caso de error, intentar reproducir directamente desde la URL original
        if (audioElement.value) {
          audioElement.value.src = url;
          resetAudio();
        }
      }
    };

    const loadPodcastData = () => {
      const savedProgress = JSON.parse(localStorage.getItem('podcastProgress') || '{}');
      const podcast = savedProgress.modules[moduleIndex.value]?.podcasts[podcastIndex.value];
      if (podcast) {
        title.value = podcast.title;
        description.value = podcast.description;
        audioLink.value = podcast.audioLink;
        imageLink.value = podcast.imageLink;

        // Cargar el audio con caché
        loadAudioWithCache(podcast.audioLink);

        resetAudio();
        checkHasPreviousPodcast();
        updateBreadcrumb();

        // Configura la sesión de medios si es compatible con el navegador
        if ('mediaSession' in navigator) {
          navigator.mediaSession.metadata = new MediaMetadata({
            title: title.value,
            artist: 'Nombre del autor o artista',
            album: `Módulo ${moduleIndex.value + 1}`,
            artwork: [
              { src: imageLink.value, sizes: '96x96', type: 'image/png' },
              { src: imageLink.value, sizes: '128x128', type: 'image/png' },
              { src: imageLink.value, sizes: '192x192', type: 'image/png' },
              { src: imageLink.value, sizes: '256x256', type: 'image/png' },
              { src: imageLink.value, sizes: '384x384', type: 'image/png' },
              { src: imageLink.value, sizes: '512x512', type: 'image/png' }
            ]
          });
        }
      }
    };

    // Modificación de la función resetAudio para manejar la reproducción adecuadamente
    const resetAudio = () => {
      if (audioElement.value) {
        // Detener cualquier reproducción en curso
        audioElement.value.pause();
        
        // Cargar el nuevo audio
        audioElement.value.load();
        audioElement.value.currentTime = 0;
        isNextEnabled.value = false;
        progress.value = 0;

        // En lugar de reproducir inmediatamente, esperar a que el audio esté listo
        audioElement.value.addEventListener('canplaythrough', function onCanPlay() {
          // Reproducir sólo si el podcast actual sigue siendo el mismo
          audioElement.value?.play().catch((error) => {
            console.log('Fallo en la reproducción automática:', error);
          });
          // Eliminar el listener para evitar múltiples reproducciones
          audioElement.value?.removeEventListener('canplaythrough', onCanPlay);
        }, { once: true }); // once: true asegura que el evento se dispare una sola vez
      }
    };

    // Función para precachear el siguiente podcast
    const precacheNextPodcast = () => {
      const savedProgress = JSON.parse(localStorage.getItem('podcastProgress') || '{}');
      let nextPodcastUrl = null;
      
      // Verificar si hay un siguiente podcast en el mismo módulo
      if (savedProgress.modules[moduleIndex.value]?.podcasts[podcastIndex.value + 1]) {
        nextPodcastUrl = savedProgress.modules[moduleIndex.value].podcasts[podcastIndex.value + 1].audioLink;
      } 
      // Si no, verificar si hay un siguiente módulo con podcasts
      else if (savedProgress.modules[moduleIndex.value + 1]?.podcasts[0]) {
        nextPodcastUrl = savedProgress.modules[moduleIndex.value + 1].podcasts[0].audioLink;
      }
      
      // Si encontramos una URL del siguiente podcast, precachearla
      if (nextPodcastUrl) {
        console.log(`Precacheando siguiente podcast: ${nextPodcastUrl}`);
        AudioCacheService.addToCache(nextPodcastUrl).catch(error => 
          console.error('Error al precachear siguiente podcast:', error)
        );
      }
    };


    const handleAudioEnded = () => {
      if (isLastPodcast()) {
        if (audioElement.value) {
          audioElement.value.removeEventListener('ended', handleAudioEnded);
        }
      } else {
        handleNextPodcast();
      }
    };


    const checkHasPreviousPodcast = () => {
      hasPreviousPodcast.value = podcastIndex.value > 0 || moduleIndex.value > 0;
    };

    const trackProgress = () => {
      const savedProgress = JSON.parse(localStorage.getItem('podcastProgress') || '{}');
      const currentPodcast = savedProgress.modules[moduleIndex.value]?.podcasts[podcastIndex.value];

      // Verifica si el podcast ya está marcado como "completed"
      if (currentPodcast?.podcastStage === 'completed') {
        isNextEnabled.value = true;
      } else if (audioElement.value) {
        // Si no está "completed", aplica la validación de progreso
        progress.value = (audioElement.value.currentTime / audioElement.value.duration) * 100;
        if (progress.value >= 80 && !isNextEnabled.value) {
          if (!isLastPodcast()) {
            isNextEnabled.value = true;
          }
          markPodcastCompleted();
        }
      }
    };

    const markPodcastCompleted = () => {
      const savedProgress = JSON.parse(localStorage.getItem('podcastProgress') || '{}');
      savedProgress.modules[moduleIndex.value].podcasts[podcastIndex.value].completed = true;
      savedProgress.modules[moduleIndex.value].podcasts[podcastIndex.value].podcastStage = 'completed';

      const nextPodcast = savedProgress.modules[moduleIndex.value].podcasts[podcastIndex.value + 1];
      if (nextPodcast && nextPodcast.podcastStage === 'disabled') {
        nextPodcast.podcastStage = 'enabled';
      } else {
        const nextModule = savedProgress.modules[moduleIndex.value + 1];
        if (nextModule && nextModule.podcasts[0].podcastStage === 'disabled') {
          nextModule.podcasts[0].podcastStage = 'enabled';
        }
      }

      localStorage.setItem('podcastProgress', JSON.stringify(savedProgress));
    };

    const handleBack = () => {
      const courseId = localStorage.getItem('currentCourseId');
      if (courseId) {
        router.push(`/journey?course=${courseId}`);
      } else {
        router.push('/journey');
      }
    };

    const handleNextPodcast = () => {
      // Pausar el audio actual para evitar conflictos
      if (audioElement.value) {
        audioElement.value.pause();
      }

      const savedProgress = JSON.parse(localStorage.getItem('podcastProgress') || '{}');
      const nextPodcastIndex = podcastIndex.value + 1;

      if (savedProgress.modules[moduleIndex.value]?.podcasts[nextPodcastIndex]) {
        const nextPodcast = savedProgress.modules[moduleIndex.value].podcasts[nextPodcastIndex];
        if (nextPodcast.podcastStage === 'disabled') {
          nextPodcast.podcastStage = 'enabled';
        }
        podcastIndex.value = nextPodcastIndex;
      } else if (savedProgress.modules[moduleIndex.value + 1]?.podcasts[0]) {
        const nextModulePodcast = savedProgress.modules[moduleIndex.value + 1].podcasts[0];
        if (nextModulePodcast.podcastStage === 'disabled') {
          nextModulePodcast.podcastStage = 'enabled';
        }
        moduleIndex.value += 1;
        podcastIndex.value = 0;
      }

      localStorage.setItem('podcastProgress', JSON.stringify(savedProgress));
      loadPodcastData();
    };


    const handlePreviousPodcast = () => {
      // Pausar el audio actual para evitar conflictos
      if (audioElement.value) {
        audioElement.value.pause();
      }

      const savedProgress = JSON.parse(localStorage.getItem('podcastProgress') || '{}'); // Añade esta línea para definir savedProgress
      if (podcastIndex.value > 0) {
        podcastIndex.value -= 1;
      } else if (moduleIndex.value > 0) {
        moduleIndex.value -= 1;
        podcastIndex.value = savedProgress.modules[moduleIndex.value].podcasts.length - 1;
      }
      loadPodcastData();
    };

    const isLastPodcast = () => {
      const savedProgress = JSON.parse(localStorage.getItem('podcastProgress') || '{}');
      const currentModule = savedProgress.modules[moduleIndex.value];
      const isLastPodcastInModule = podcastIndex.value === currentModule.podcasts.length - 1;
      const isLastModule = moduleIndex.value === savedProgress.modules.length - 1;
      return isLastPodcastInModule && isLastModule;
    };

    onMounted(() => {
      loadPodcastData();

      if (audioElement.value) {
        audioElement.value.addEventListener('timeupdate', trackProgress);
        audioElement.value.addEventListener('ended', handleAudioEnded);
      }

      // Precachear el siguiente podcast después de cargar el actual
      setTimeout(() => {
        precacheNextPodcast();
      }, 5000); // Esperar 5 segundos para no interferir con la carga del podcast actual
    });

    onUnmounted(() => {
      if (audioElement.value) {
        audioElement.value.removeEventListener('timeupdate', trackProgress);
        audioElement.value.removeEventListener('ended', handleAudioEnded);
        // Eliminar cualquier otro event listener que pueda estar causando problemas
        audioElement.value.pause();
      }

      // Limpiar cualquier URL de objeto al desmontar
      if (audioSrc.value && audioSrc.value.startsWith('blob:')) {
        URL.revokeObjectURL(audioSrc.value);
      }
    });

    watch([moduleIndex, podcastIndex], () => {
      loadPodcastData();
    });

    return {
      title,
      description,
      audioLink,
      imageLink,
      audioSrc,
      audioElement,
      isNextEnabled,
      hasPreviousPodcast,
      handleBack,
      handleNextPodcast,
      handlePreviousPodcast,
      progress,
      moduleIndex,
      podcastIndex,
      breadcrumbRoutes,
      isLoading, // Para indicador de carga
      loadingProgress, // Para barra de progreso de carga
      errorMessage, // Para mostrar errores
      loadPodcastData,
    };
  },
});
</script>

<style scoped>
.podcast-player-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
}

.podcast-title {
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: #333;
}

.podcast-image {
  width: 100%;
  max-width: 300px;
  height: auto;
  border-radius: 8px;
  margin-bottom: 1rem;
}

.description {
  font-size: 1rem;
  color: #666;
  margin-bottom: 2rem;
}

.audio-player {
  width: 100%;
  max-width: 100%;
}

/* Estilos para los botones */
.footer {
  display: flex;
  justify-content: space-between;
  margin-top: 1.5rem;
  width: 100%;
}

.btn {
  background: none; /* Sin fondo */
  border: none; /* Sin borde */
  padding: 0;
  cursor: pointer;
}

.btn:disabled {
  cursor: not-allowed;
  opacity: 0.5; /* Opacidad para el estado deshabilitado */
}

.btn img {
  width: 50px; /* Tamaño del SVG */
  height: 50px;
  opacity: 1; /* SVG completamente visible cuando está habilitado */
}

.btn:disabled img {
  opacity: 0.5; /* SVG opaco en estado deshabilitado */
}

.current-position {
  font-size: 1.2rem;
  color: #666; /* Color gris como el de la descripción */
  margin-bottom: 1rem;
  text-align: center;
}

.breadcrumb {
  display: flex;
  align-items: center;
  gap: 5px;
  margin-bottom: 1rem;
  justify-content: flex-start;
  width: 100%; /* Asegura que se mantenga a la izquierda en el contenedor */
}

.breadcrumb button,
.breadcrumb span:not(.breadcrumb-separator) {
  background-color: #F3F3F3; /* Fondo gris claro para las cápsulas de cada nivel */
  color: #555555; /* Texto gris oscuro */
  font-weight: bold;
  padding: 2px 11px;
  border-radius: 15px;
  display: inline-flex;
  align-items: center;
}

.breadcrumb button {
  border: none;
  cursor: pointer;
}

.breadcrumb button:hover {
  color: #000000; /* Cambia a un tono más oscuro para resaltar */
  background-color: #e0e0e0; /* Fondo ligeramente más oscuro en hover */
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2); /* Sombra suave para dar presencia */
}

.breadcrumb-separator {
  color: #E1E1E1; /* Gris oscuro para el símbolo */
  font-weight: bold;
  font-size: 1.5rem; /* Tamaño más grande para destacarlo */
}
</style>