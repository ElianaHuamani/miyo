<template>
  <div v-if="isLoading" class="loading-spinner">Cargando...</div>
  <div v-else class="journey-wrapper px-4 py-6 md:px-10">
    <!-- Breadcrumb con cápsulas -->
    <Breadcrumb :routes="breadcrumbRoutes" />
    
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
            <img :src="getPodcastIcon[podcast.podcastStage]" :alt="podcast.podcastStage + ' Icon'" />
          </div>
          
          <span class="podcast-title">{{ podcast.title }}</span>
        </div>
      </div>

    </div>
    
    <!-- Botón flotante -->
          <!-- Botón en Móviles (Centrado) -->
          <button 
            class="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-purple-600 text-white p-4 rounded-full shadow-lg hover:bg-purple-700 transition block md:hidden"
            @click="handleFeedback"
            v-show="completedPodcastsCount >= 3">
            Déjanos tu opinión
          </button>

          <!-- Botón en Desktop (A la derecha) -->
          <button 
            class="fixed bottom-6 right-6 bg-purple-600 text-white p-4 rounded-full shadow-lg hover:bg-purple-700 transition hidden md:block"
            @click="handleFeedback"
            v-show="completedPodcastsCount >= 3">
            Déjanos tu opinión
          </button>
  </div>
  

</template>

<script lang="ts">
import { defineComponent, ref, onMounted, computed } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { IJourney } from '@/services/backend/IJourney';
import { ComoFuncionaElSistemaFinanieroJourneyMock } from '@/mocks/journeys/ComoFuncionaElSistemaFinanieroJourneyMock.ts';
import { ConstruyeTuLibertadFinancieraJourneyMock } from '@/mocks/journeys/ConstruyeTuLibertadFinancieraJourneyMock.ts';
import { DesentranandoCreenciasFinancierasJourneyMock } from '@/mocks/journeys/DesentranandoCreenciasFinancierasJourneyMock.ts';
import { CreenciasLimitantesMock } from '@/mocks/journeys/CreenciasLimitantesMock.ts';
import iconBlock from '@/assets/icons/icono-block.svg';
import iconStar from '@/assets/icons/icono-start.svg';
import iconPlay from '@/assets/icons/icono-play.svg';
import Breadcrumb from '@/common/components/Breadcrumb.vue';
import { useMixpanelTracking } from '@/composables/useMixpanelTracking.ts';

export default defineComponent({
  name: 'JourneyPage',
  components: {
    Breadcrumb,
  },
  setup() {
    const { trackEvent } = useMixpanelTracking('JourneyPage');
    const isLoading = ref(false); 
    const router = useRouter();
    const route = useRoute();
    const useMockData = true;
    const journeyData = ref<IJourney>({} as IJourney);
    const journeyMocks: Record<string, IJourney> = {
      'finanzas-desentranando-creencias-financieras': DesentranandoCreenciasFinancierasJourneyMock,
      'finanzas-como-funciona-el-sistema-financiero': ComoFuncionaElSistemaFinanieroJourneyMock,
      'finanzas-construye-tu-libertad-financiera': ConstruyeTuLibertadFinancieraJourneyMock,
      'crecimientopersonal-creencias-limitantes': CreenciasLimitantesMock,
    };
    
    const handleFeedback = () => {
      window.open('https://miyoapp.fillout.com/t/6wmMWrGxTbus', '_blank');
    };

    const completedPodcastsCount = computed(() => {
      if (!journeyData.value || !journeyData.value.modules) return 0;
      
      return journeyData.value.modules.reduce((total, module) => {
        return total + module.podcasts.filter(podcast => podcast.podcastStage === 'completed').length;
      }, 0);
    });

    const totalPodcastsCount = computed(() => {
      if (!journeyData.value || !journeyData.value.modules) return 0;
      
      return journeyData.value.modules.reduce((total, module) => {
        return total + module.podcasts.length;
      }, 0);
    });

    const breadcrumbRoutes = ref([
      { label: 'Inicio', path: '/' },
      { label: 'Ruta', path: '' }
    ]);
    
    const getPodcastIcon = computed(() => ({
      disabled: iconBlock,
      enabled: iconPlay,
      completed: iconStar
    }));

    const initializeProgress = () => {
      const courseId = route.query.course as string;
      
      // Verificar si existe el courseId en la URL y usarlo
      if (typeof courseId === 'string' && journeyMocks[courseId]) {
        journeyData.value = journeyMocks[courseId];
      } else {
        // Si no hay courseId en la URL, intentar recuperarlo del localStorage
        const savedProgress = JSON.parse(localStorage.getItem('podcastProgress') || '{}');
        const savedJourneyId = savedProgress.id;
        
        // Encontrar el mock correspondiente por ID
        const mockEntry = Object.entries(journeyMocks).find(
          ([_, mock]) => mock.id === savedJourneyId
        );
        
        if (mockEntry) {
          journeyData.value = mockEntry[1];
          // Opcionalmente, actualizar la URL para mantener coherencia
          router.replace({ query: { ...route.query, course: mockEntry[0] } });
        } else {
          // Si todo falla, usar un mock por defecto
          journeyData.value = ComoFuncionaElSistemaFinanieroJourneyMock;
        }
      }

      // El resto de la lógica para inicializar el progreso...
      if (!localStorage.getItem('podcastProgress')) {
        const initialProgress = {
          id: journeyData.value.id,
          journey: journeyData.value.journey,
          modules: journeyData.value.modules.map((module) => ({
            title: module.title,
            podcasts: module.podcasts.map((podcast) => ({
              title: podcast.title,
              description: podcast.description,
              audioLink: podcast.audioLink,
              imageLink: podcast.imageLink,
              completed: false,
              podcastStage: 'enabled',
            })),
          })),
        };

        localStorage.setItem('podcastProgress', JSON.stringify(initialProgress));
      }
    };


    // Carga el progreso guardado en `localStorage` y lo aplica directamente a `journeyData`
    const applyProgress = () => {
      if (!journeyData.value || !journeyData.value.modules) return;
      
      const savedProgress = JSON.parse(localStorage.getItem('podcastProgress') || '{}');
      
      if (!savedProgress.modules) return;
      
      savedProgress.modules.forEach((savedModule: any, moduleIndex: number) => {
        if (!journeyData.value.modules[moduleIndex]) return;
        
        savedModule.podcasts?.forEach((savedPodcast: any, podcastIndex: number) => {
          if (!journeyData.value.modules[moduleIndex].podcasts[podcastIndex]) return;
          
          journeyData.value.modules[moduleIndex].podcasts[podcastIndex].podcastStage = savedPodcast.podcastStage;
        });
      });
    };

    const fetchJourneyData = async () => {
      isLoading.value = true;
      const courseId = route.query.course as string;
      
      if (useMockData) {
        if (typeof courseId === 'string' && journeyMocks[courseId]) {
          journeyData.value = journeyMocks[courseId];
        } else {
          journeyData.value = ComoFuncionaElSistemaFinanieroJourneyMock;
        }
      } else {
        try {
          const response = await fetch('https://api.example.com/journey'); 
          if (!response.ok) throw new Error('Error al obtener los datos');
          journeyData.value = await response.json();
        } catch (error) {
          console.error('Error en la llamada a la API:', error);
          journeyData.value = ComoFuncionaElSistemaFinanieroJourneyMock;
        }
      }
      
      isLoading.value = false;
      applyProgress();
    };

    const navigateToHome = () => {
      router.push('/');
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
      const courseId = route.query.course as string;
      if (courseId) {
        localStorage.setItem('currentCourseId', courseId);
      }
      
      router.push({
          path: '/podcast',
          query: {
            title: podcast.title,
            description: podcast.description,
            audioLink: podcast.audioLink,
            imageLink: podcast.imageLink,
            moduleIndex: moduleIndex.toString(),
            podcastIndex: podcastIndex.toString(),
          },
        });
    };

     onMounted(async () => {
      isLoading.value = true;
      try {
        await fetchJourneyData();
        
        if (journeyData.value && journeyData.value.modules) {
          initializeProgress();
          applyProgress();
        }

        trackEvent('JourneyPageVisited', {
            'JourneyTitle': journeyData.value.journey,
            'CompletedPodcasts': completedPodcastsCount.value,
            'TotalPodcasts': totalPodcastsCount.value
          });

      } catch (error) {
        console.error("Error al cargar la página:", error);
      } finally {
        isLoading.value = false;
      }
    });

    return {
      journeyData,
      isLoading,
      getPodcastClass,
      handlePodcastClick,
      iconBlock,
      iconStar,
      iconPlay,
      navigateToHome,
      breadcrumbRoutes,
      getPodcastIcon,
      handleFeedback,
      completedPodcastsCount,
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

.podcast-title {
  font-size: 0.68rem; /* Tamaño de letra más pequeño */
  color: #666; /* Mismo tono que los demás textos */
  text-align: center;
  margin-top: 0.25rem;
  margin-left: 4px; /* Añade espacio al lado izquierdo */
  white-space: normal; /* Permite que el texto se ajuste a múltiples líneas si es necesario */
  display: block; /* Coloca el título debajo del círculo */
  max-width: 160px; /* Limita el ancho para mantenerlo alineado con el círculo */
}

</style>
