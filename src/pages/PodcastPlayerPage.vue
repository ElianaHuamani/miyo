<template>
  <div class="podcast-player-wrapper">
    <!-- Título del podcast -->
    <h1 class="podcast-title">{{ podcastTitle }}</h1>

    <!-- Imagen del podcast -->
    <img :src="podcastImage" alt="Podcast cover" class="podcast-image" />

    <!-- Descripción del podcast -->
    <p class="podcast-description">{{ podcastDescription }}</p>

    <!-- Reproductor de audio -->
    <audio controls class="audio-player">
      <source :src="podcastSource" type="audio/mpeg" />
      Tu navegador no soporta la reproducción de audio.
    </audio>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import podcastImage from '@/assets/images/miyo.svg';
import podcastAudio from '@/assets/audio/sample.mp3'; // Importa el archivo MP3

export default defineComponent({
  name: 'PodcastPlayerPage',
  setup() {
    // Datos del podcast
    const podcastTitle = ref('Finanzas');
    const podcastDescription = ref('Breve descripción del episodio del podcast.');
    const podcastSource = ref(podcastAudio); // Asigna el archivo MP3 importado como fuente

    return {
      podcastTitle,
      podcastDescription,
      podcastSource,
      podcastImage // Usamos la imagen importada
    };
  }
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

.podcast-description {
  font-size: 1rem;
  color: #666;
  margin-bottom: 2rem;
}

.audio-player {
  width: 100%;
  max-width: 100%;
}
</style>
