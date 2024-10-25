<template>
  <div class="discovery-page container mx-auto p-4">
    <!-- Sección 1 con el componente Carousel -->
    <section class="section my-8">
      <h2 class="text-2xl font-bold mb-4">Finanzas Personales</h2>
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
        />
      </Carousel>
    </section>

  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import Carousel from '../common/components/Carousel.vue';
import Card from './journey/JourneyCard.vue';
import { finanzasSectionMock, crecimientoSectionMock  } from '../mocks/DiscoveryCardsMock'; // Importamos los datos del mock
import { type JourneyCard } from '../services/backend/journeycard.ts';

export default defineComponent({
  name: 'DiscoveryPage',
  components: {
    Carousel,
    Card
  },
  setup() {
    // Creamos una referencia para los datos que serán cargados
    const section1Cards = ref<JourneyCard[]>([]);
    const section2Cards = ref<JourneyCard[]>([]);

    // Función simulando una llamada a una API con Promise
    const fetchSection1Cards = async (): Promise<JourneyCard[]> => {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve(finanzasSectionMock);
        }, 500);
      });
    };

    const fetchSection2Cards = async (): Promise<JourneyCard[]> => {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve(crecimientoSectionMock);
        }, 500);
      });
    };

    // Llamada simulada a la "API" cuando el componente se monta
    onMounted(async () => {
      section1Cards.value = await fetchSection1Cards(); // Asignamos los datos obtenidos
      section2Cards.value = await fetchSection2Cards();
    });

    return {
      section1Cards,
      section2Cards
    };
  }
});
</script>
