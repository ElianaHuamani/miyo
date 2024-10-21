<template>
  <div class="discovery-page container mx-auto p-4">
    <!-- Sección 1 con el componente Carousel -->
    <section class="section my-8">
      <h2 class="text-2xl font-bold mb-4">Sección 1 - Carrusel</h2>
      <hr class="mb-6" />
      
      <!-- Reutilizando el componente Carousel -->
      <Carousel>
        <Card
          v-for="(card, index) in section1Cards"
          :key="index"
          :title="card.title"
          :description="card.description"
          :image="card.image" 
          :link="card.link"
        />
      </Carousel>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import Carousel from '../common/components/Carousel.vue';
import Card from './journey/JourneyCard.vue';
import { section1CardsMock } from '../mocks/DiscoveryCardsMock'; // Importamos los datos del mock
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

    // Función simulando una llamada a una API con Promise
    const fetchSection1Cards = async (): Promise<JourneyCard[]> => {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve(section1CardsMock);
        }, 500);
      });
    };

    // Llamada simulada a la "API" cuando el componente se monta
    onMounted(async () => {
      section1Cards.value = await fetchSection1Cards(); // Asignamos los datos obtenidos
    });

    return {
      section1Cards
    };
  }
});
</script>
