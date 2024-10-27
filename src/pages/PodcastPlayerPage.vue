<template>
  <div class="podcast-player-wrapper">
    <br><br>
    <img :src="imageLink" alt="Podcast cover" class="podcast-image" />
    <p class="description">{{ description }}</p><br>
    <audio controls ref="audioElement" class="audio-player">
      <source :src="audioLink" type="audio/mpeg" />
      Tu navegador no soporta la reproducción de audio.
    </audio>
    <div class="footer">
      <button class="btn btn-secondary" @click="handleBack">Volver</button>
      <button class="btn btn-primary" :disabled="!isNextEnabled" @click="handleNextPodcast">Continuar</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, watch } from 'vue';
import { useRouter, useRoute } from 'vue-router';

export default defineComponent({
  name: 'PodcastPlayerPage',
  setup() {
    const route = useRoute();
    const router = useRouter();

    const moduleIndex = ref(parseInt(route.query.moduleIndex as string));
    const podcastIndex = ref(parseInt(route.query.podcastIndex as string));

    const title = ref('');
    const description = ref('');
    const audioLink = ref('');
    const imageLink = ref('');

    const audioElement = ref<HTMLAudioElement | null>(null);
    const progress = ref(0);
    const isNextEnabled = ref(false);

    const loadPodcastData = () => {
      const savedProgress = JSON.parse(localStorage.getItem('podcastProgress') || '{}');
      const podcast = savedProgress.modules[moduleIndex.value]?.podcasts[podcastIndex.value];
      if (podcast) {
        title.value = podcast.title;
        description.value = podcast.description;
        audioLink.value = podcast.audioLink;
        imageLink.value = podcast.imageLink;
        resetAudio(); // Reiniciar y reproducir el audio al cargar un nuevo podcast
      }
    };

    const resetAudio = () => {
      if (audioElement.value) {
        audioElement.value.load(); // Recargar el elemento audio para actualizar la fuente
        audioElement.value.currentTime = 0; // Reiniciar el tiempo de reproducción
        isNextEnabled.value = false; // Deshabilitar el botón de "Continuar" para el nuevo podcast
        progress.value = 0; // Reiniciar el progreso

        // Intentar reproducir automáticamente el audio
        audioElement.value.play().catch((error) => {
          console.log('Autoplay failed:', error);
          // En caso de que el navegador bloquee el autoplay, se muestra un mensaje en la consola.
        });
      }
    };

    const trackProgress = () => {
      if (audioElement.value) {
        progress.value = (audioElement.value.currentTime / audioElement.value.duration) * 100;
        if (progress.value >= 80 && !isNextEnabled.value) {
          isNextEnabled.value = true;
          markPodcastCompleted();
        }
      }
    };

    const markPodcastCompleted = () => {
      const savedProgress = JSON.parse(localStorage.getItem('podcastProgress') || '{}');
      savedProgress.modules[moduleIndex.value].podcasts[podcastIndex.value].completed = true;
      savedProgress.modules[moduleIndex.value].podcasts[podcastIndex.value].podcastStage = 'completed';
      localStorage.setItem('podcastProgress', JSON.stringify(savedProgress));
    };

    const handleBack = () => {
      router.push('/journey');
    };

    const handleNextPodcast = () => {
      const savedProgress = JSON.parse(localStorage.getItem('podcastProgress') || '{}');
      const nextPodcastIndex = podcastIndex.value + 1;

      if (savedProgress.modules[moduleIndex.value]?.podcasts[nextPodcastIndex]) {
        savedProgress.modules[moduleIndex.value].podcasts[nextPodcastIndex].podcastStage = 'enabled';
        podcastIndex.value = nextPodcastIndex;
      } else if (savedProgress.modules[moduleIndex.value + 1]?.podcasts[0]) {
        savedProgress.modules[moduleIndex.value + 1].podcasts[0].podcastStage = 'enabled';
        moduleIndex.value += 1;
        podcastIndex.value = 0;
      }

      localStorage.setItem('podcastProgress', JSON.stringify(savedProgress));
      loadPodcastData(); // Cargar el siguiente podcast
    };

    onMounted(() => {
      loadPodcastData();
      if (audioElement.value) {
        audioElement.value.addEventListener('timeupdate', trackProgress);
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
      audioElement,
      isNextEnabled,
      handleBack,
      handleNextPodcast,
      progress,
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
  padding: 12px 24px;
  font-size: 1rem;
  font-weight: 500;
  border-radius: 24px;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  outline: none;
  border: none;
}

.btn-primary {
  background-color: #8212F3;
  color: white;
  box-shadow: 0px 4px 12px rgba(130, 18, 243, 0.3);
}

.btn-primary:disabled {
  background-color: #d3c4f6;
  cursor: not-allowed;
  box-shadow: none;
}

.btn-secondary {
  background-color: white;
  color: #8212F3;
  border: 2px solid #8212F3;
}

.btn-secondary:hover {
  background-color: #f3e7ff;
  transform: translateY(-2px);
  box-shadow: 0px 6px 12px rgba(130, 18, 243, 0.2);
}

.btn-secondary:active {
  transform: translateY(0);
  box-shadow: none;
}
</style>
