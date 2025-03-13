<template>
  <div class="discovery-page container mx-auto p-4">
    <!-- Sección 1 con el componente Carousel -->
    <section class="section my-8">
      <h2 class="text-2xl font-bold mb-4">Finanzas</h2>
      <hr class="mb-6" />
      <Carousel>
        <Card
          v-for="(card, index) in section1Cards"
          :key="index"
          :title="card.title"
          :description="card.description"
          :image="card.image" 
          :link="card.link"
          :isActive="card.isActive"
          :audioCount="card.audioCount"
          :timeValue="card.timeValue"
          :creator="card.creator"
        />
      </Carousel>
    </section>

    <!-- Sección 2 con el componente Carousel -->
    <section class="section my-8">
      <h2 class="text-2xl font-bold mb-4">Crecimiento Personal</h2>
      <hr class="mb-6" />
      <Carousel>
        <Card
          v-for="(card, index) in section2Cards"
          :key="index"
          :title="card.title"
          :description="card.description"
          :image="card.image" 
          :link="card.link"
          :isActive="card.isActive"
          :audioCount="card.audioCount"
          :timeValue="card.timeValue"
          :creator="card.creator"
        />
      </Carousel>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import Carousel from '@/common/components/Carousel.vue';
import Card from '@/common/components/Card.vue';
import { finanzasSectionMock, crecimientoSectionMock  } from '@/mocks/DiscoveryCardsMock.ts';
import { type ICard } from '@/services/backend/ICard.ts';
import { useMixpanelTracking } from '@/composables/useMixpanelTracking.ts';

export default defineComponent({
  name: 'DiscoveryPage',
  components: {
    Carousel,
    Card
  },
  setup() {
    const { trackEvent } = useMixpanelTracking('DiscoveryPage');
    const section1Cards = ref<ICard[]>([]);
    const section2Cards = ref<ICard[]>([]);

    const fetchSection1Cards = async (): Promise<ICard[]> => {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve(finanzasSectionMock);
        }, 500);
      });
    };

    const fetchSection2Cards = async (): Promise<ICard[]> => {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve(crecimientoSectionMock);
        }, 500);
      });
    };

    onMounted(async () => {
      section1Cards.value = await fetchSection1Cards();
      section2Cards.value = await fetchSection2Cards();
      localStorage.removeItem('podcastProgress');
      localStorage.removeItem('currentCourseId');
      trackEvent('DiscoveryPageVisited');
    });


    return {
      section1Cards,
      section2Cards
    };
  }
});
</script>