<template>
  <div class="journey-wrapper px-4 py-6 md:px-10">
    <div class="header relative w-full">
      <!-- Título central del journey -->
      <h1 class="title text-2xl md:text-3xl text-center">{{ journeyData.journey }}</h1>
    </div>

    <div class="modules-container max-w-lg mx-auto mt-6">
      <!-- Módulos -->
      <div v-for="(module, moduleIndex) in journeyData.modules" :key="moduleIndex" class="module">
        <!-- Línea divisoria con el título del módulo -->
        <div class="module-divider flex items-center justify-center my-4 relative">
          <span class="module-title text-sm md:text-lg px-2 bg-white z-10">{{ module.title }}</span>
          <div class="absolute left-0 right-0 h-px bg-gray-300"></div> <!-- Líneas que cruzan el título -->
        </div>

        <!-- Podcasts en zigzag de cada módulo -->
        <div v-for="(podcast, podcastIndex) in module.podcasts" 
        :key="podcastIndex" class="podcast-item flex justify-center mb-4"
        :class="{'zigzag-left': podcastIndex % 2 === 0, 'zigzag-right': podcastIndex % 2 !== 0}">
          <div 
            :class="['podcast-circle', getPodcastClass(podcast.podcastStage)]" 
            @click="handlePodcastClick(podcast, podcastIndex, moduleIndex)">
            <img v-if="podcast.podcastStage === 'disabled'" :src="iconBlock" alt="Blocked Icon" />
            <img v-if="podcast.podcastStage === 'enabled'" :src="iconPlay" alt="Play Icon" />
            <img v-if="podcast.podcastStage === 'completed'" :src="iconStar" alt="Star Icon" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { Journey } from '../services/backend/Journey';
import { FinanzasJourneyMock } from '../mocks/FinanzasJourneyMock';
import iconBlock from '@/assets/icons/icono-block.svg';
import iconStar from '@/assets/icons/icono-start.svg';
import iconPlay from '@/assets/icons/icono-play.svg';

export default defineComponent({
  name: 'JourneyPage',
  setup() {
    const journeyData = ref<Journey>(FinanzasJourneyMock);

    const getPodcastClass = (stage: string) => {
      switch (stage) {
        case 'enabled':
          return 'enabled';
        case 'completed':
          return 'completed';
        case 'disabled':
        default:
          return 'disabled';
      }
    };

    const handlePodcastClick = (podcast: any, podcastIndex: number, moduleIndex: number) => {
      // Verificamos si el podcast está habilitado (enabled)
      if (podcast.podcastStage === 'enabled') {
        // Marcamos el podcast como completado
        podcast.podcastStage = 'completed';

        // Intentamos habilitar el siguiente podcast en el mismo módulo
        const currentModule = journeyData.value.modules[moduleIndex];
        const nextPodcast = currentModule.podcasts[podcastIndex + 1];

        if (nextPodcast && nextPodcast.podcastStage === 'disabled') {
          // Si existe un siguiente podcast en el mismo módulo, lo habilitamos
          nextPodcast.podcastStage = 'enabled';
        } else {
          // Si no hay más podcasts en el módulo actual, habilitamos el primer podcast del siguiente módulo
          const nextModule = journeyData.value.modules[moduleIndex + 1];
          if (nextModule && nextModule.podcasts[0].podcastStage === 'disabled') {
            nextModule.podcasts[0].podcastStage = 'enabled';
          }
        }
      }
    };

    return {
      journeyData,
      getPodcastClass,
      handlePodcastClick,
      iconBlock,
      iconStar,
      iconPlay
    };
  },
});
</script>

<style scoped>
.journey-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 20px;
  width: 100%;
  background-color: #ffffff;
  min-height: 100vh;
}

.header {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  margin-bottom: 40px;
}

.title {
  font-size: 2.2rem;
  color: #333;
  text-align: center;
  margin: 0 auto;
  font-weight: 500;
}

.modules-container {
  width: 100%;
  max-width: 700px;
}

.module-divider {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.module-divider::before,
.module-divider::after {
  content: '';
  height: 1px;
  background-color: #e0e0e0;
}

.module-title {
  background-color: white;
  padding: 0 1rem;
  position: relative;
  z-index: 10;
  font-size: 1rem;
  color: #666;
}

/* Diseño en zigzag */
.podcast-item {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  position: relative;
  justify-content: center;
}

.zigzag-left {
  transform: translateX(-40px);
}

.zigzag-right {
  transform: translateX(40px);
}

.podcast-circle {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  background-color: transparent;
  border: none;
}

.podcast-circle:hover {
  transform: scale(1.1);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}
</style>
