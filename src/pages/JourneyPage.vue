<template>
  <div v-if="isLoading" class="loading-spinner">Cargando...</div>
  <div v-else class="journey-wrapper px-4 py-6 md:px-10">
    <div class="header relative w-full">
      <h1 class="title text-2xl md:text-3xl text-center">{{ journeyData?.journey }}</h1>
    </div>

    <div class="modules-container max-w-lg mx-auto mt-6">
      
      <div v-for="(module, moduleIndex) in journeyData?.modules" :key="moduleIndex" class="module">
        <div class="module-divider flex items-center justify-center my-4 relative">
          <span class="module-title text-sm md:text-lg px-2 bg-white z-10">{{ module.title }}</span>
          <div class="absolute left-0 right-0 h-px bg-gray-300"></div>
        </div>

        <div v-for="(podcast, podcastIndex) in module.podcasts" 
          :key="podcastIndex" class="podcast-item flex justify-center mb-4"
          :class="{'zigzag-left': podcastIndex % 2 === 0, 'zigzag-right': podcastIndex % 2 !== 0}">
          
          <div 
            :class="['podcast-circle', getPodcastClass(podcast.podcastStage)]" 
            @click="handlePodcastClick(podcast, moduleIndex, podcastIndex)">
            <img v-if="podcast.podcastStage === 'disabled'" :src="iconBlock" alt="Blocked Icon" />
            <img v-if="podcast.podcastStage === 'enabled'" :src="iconPlay" alt="Play Icon" />
            <img v-if="podcast.podcastStage === 'completed'" :src="iconStar" alt="Star Icon" />
          </div>
          
          <span v-if="podcast.podcastStage === 'completed'" class="completed-title">{{ podcast.title }}</span>
        </div>
      </div>


      
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { IJourney } from '../services/backend/IJourney';
import { FinanzasJourneyMock } from '../mocks/FinanzasJourneyMock';
import iconBlock from '@/assets/icons/icono-block.svg';
import iconStar from '@/assets/icons/icono-start.svg';
import iconPlay from '@/assets/icons/icono-play.svg';

export default defineComponent({
  name: 'JourneyPage',
  setup() {
    const journeyData = ref<IJourney>(JSON.parse(JSON.stringify(FinanzasJourneyMock)));
    const isLoading = ref(false);
    const router = useRouter();
    const useMockData = true; // Cambiar a `false` para simular una llamada a la API

    // Inicializa solo una vez si no existe en `localStorage`
    const initializeProgress = () => {
      if (!localStorage.getItem('podcastProgress')) {
        const initialProgress = {
          modules: journeyData.value.modules.map((module, moduleIndex) => ({
            title: module.title,
            podcasts: module.podcasts.map((podcast, podcastIndex) => ({
              title: podcast.title,
              description: podcast.description,
              audioLink: podcast.audioLink,
              imageLink: podcast.imageLink,
              completed: false,
              // Solo habilitar el primer podcast del primer módulo
              podcastStage: moduleIndex === 0 && podcastIndex === 0 ? 'enabled' : 'disabled',
            })),
          })),
        };
        localStorage.setItem('podcastProgress', JSON.stringify(initialProgress));
      }
    };

    // Carga el progreso guardado en `localStorage` y lo aplica directamente a `journeyData`
    const applyProgress = () => {
      const savedProgress = JSON.parse(localStorage.getItem('podcastProgress') || '{}');
      savedProgress.modules?.forEach((savedModule: any, moduleIndex: number) => {
        savedModule.podcasts.forEach((savedPodcast: any, podcastIndex: number) => {
          journeyData.value.modules[moduleIndex].podcasts[podcastIndex].podcastStage = savedPodcast.podcastStage;
        });
      });
    };

    // Configuración de carga condicional con simulación de API
    const fetchJourneyData = async () => {
      isLoading.value = true;
      if (useMockData) {
        journeyData.value = JSON.parse(JSON.stringify(FinanzasJourneyMock));
      } else {
        // Simulación de una llamada a la API
        try {
          const response = await fetch('https://api.example.com/journey'); // Cambiar URL a la de tu API
          if (!response.ok) throw new Error('Error al obtener los datos');
          journeyData.value = await response.json();
        } catch (error) {
          console.error('Error en la llamada a la API:', error);
          journeyData.value = FinanzasJourneyMock; // Fallback en caso de error
        }
      }
      isLoading.value = false;
      applyProgress();
    };

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

    const handlePodcastClick = (podcast: any, moduleIndex: number, podcastIndex: number) => {
      if (podcast.podcastStage === 'enabled' || podcast.podcastStage === 'completed') {
        router.push({
          path: '/podcast',
          query: {
            title: podcast.title,
            description: podcast.description,
            audioLink: podcast.audioLink,
            imageLink: podcast.imageLink,
            moduleIndex: moduleIndex.toString(), // Asegúrate de pasar moduleIndex correctamente
            podcastIndex: podcastIndex.toString(),
          },
        });
      }
    };





    onMounted(() => {
      initializeProgress();
      fetchJourneyData(); // Ejecuta fetch solo una vez después de inicializar
    });

    return {
      journeyData,
      isLoading,
      getPodcastClass,
      handlePodcastClick,
      iconBlock,
      iconStar,
      iconPlay,
    };
  },
});
</script>

<style scoped>
.loading-spinner {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: #333;
}

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
  margin-bottom: 10px;
}

.title {
  font-size: 1.8rem;
  color: #afafaf;
  text-align: center;
  margin: 0 auto;
  font-weight: 800;
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
  color: #afafaf;
  font-weight: 500;
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

.completed-title {
  font-size: 0.68rem; /* Tamaño de letra más pequeño */
  color: #666; /* Mismo tono que los demás textos */
  text-align: center;
  margin-top: 0.25rem;
  white-space: normal; /* Permite que el texto se ajuste a múltiples líneas si es necesario */
  display: block; /* Coloca el título debajo del círculo */
  max-width: 140px; /* Limita el ancho para mantenerlo alineado con el círculo */
}


</style>
