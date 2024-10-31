<template>
  <div class="podcast-player-wrapper">
    <br><br>
    <p class="current-position">
      Módulo {{ moduleIndex + 1 }} - Podcast {{ podcastIndex + 1 }}
    </p>

    <img :src="imageLink" alt="Podcast cover" class="podcast-image" />
    <p class="description">{{ description }}</p><br>
    <audio controls ref="audioElement" class="audio-player">
      <source :src="audioLink" type="audio/mpeg" />
      Tu navegador no soporta la reproducción de audio.
    </audio>
    <div class="footer">
      <button class="btn btn-primary" :disabled="!hasPreviousPodcast" @click="handlePreviousPodcast">Atrás</button>
      <button class="btn btn-secondary" @click="handleBack">Ruta</button>
      <button class="btn btn-primary" :disabled="!isNextEnabled" @click="handleNextPodcast">Siguiente</button>
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
    const hasPreviousPodcast = ref(false);

    const loadPodcastData = () => {
      const savedProgress = JSON.parse(localStorage.getItem('podcastProgress') || '{}');
      const podcast = savedProgress.modules[moduleIndex.value]?.podcasts[podcastIndex.value];
      if (podcast) {
        title.value = podcast.title;
        description.value = podcast.description;
        audioLink.value = podcast.audioLink;
        imageLink.value = podcast.imageLink;
        resetAudio();
        checkHasPreviousPodcast();
      }
    };

    const resetAudio = () => {
      if (audioElement.value) {
        audioElement.value.load();
        audioElement.value.currentTime = 0;
        isNextEnabled.value = false;
        progress.value = 0;

        // Reproducir automáticamente el audio
        audioElement.value.play().catch((error) => {
          console.log('Fallo en la reproducción automática:', error);
        });
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
      // Verificar si hay un podcast anterior
      hasPreviousPodcast.value = podcastIndex.value > 0 || moduleIndex.value > 0;
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
      loadPodcastData();
    };

    const handlePreviousPodcast = () => {
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
      hasPreviousPodcast,
      handleBack,
      handleNextPodcast,
      handlePreviousPodcast,
      progress,
      moduleIndex,
      podcastIndex
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
  width: 60px; /* Ajusta el tamaño según necesites */
  height: 60px;
  border-radius: 50%; /* Hace el botón circular */
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem; /* Agranda el texto ligeramente */
  transition: transform 0.2s ease, box-shadow 0.2s ease;
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


.current-position {
  font-size: 1.2rem;
  color: #666; /* Color gris como el de la descripción */
  margin-bottom: 1rem;
  text-align: center;
}




</style>
