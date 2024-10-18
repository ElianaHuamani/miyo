<template>
  <div class="landing-page container mx-auto p-4">
    <!-- Sección 1 con el componente Carousel -->
    <section class="section my-8">
      <h2 class="text-2xl font-bold mb-4">Finanzas Personales</h2>
      <hr class="mb-6" />
      
      <!-- Reutilizando el componente Carousel -->
      <Carousel>
        <Card
          v-for="(card, index) in section1Cards"
          :key="index"
          :title="card.title"
          :description="card.description"
          :image="card.image"
        />
      </Carousel>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Carousel from '../components/Carousel.vue';
import Card from '../components/Card.vue';
// Importa la imagen local si lo necesitas
import miyoImage from '@/assets/images/miyo.svg';

export default defineComponent({
  name: 'LandingPage',
  components: { Carousel, Card },
  data() {
    return {
      section1Cards: [
        { 
          title: 'Finanzas', 
          description: '¡Este curso es para ti! En Finanzas en Claro, aprenderás a gestionar tu dinero de forma sencilla, práctica y entretenida, a través de episodios cortos y dinámicos. Cada lección es como una conversación entre amigos, donde desglosamos conceptos financieros complicados de manera clara y sin tecnicismos.', 
          image: miyoImage, // Imagen local
          link: '/pagina1'
        },
        { 
          title: 'Submenú 2', 
          description: 'Descripción un poco más larga que debería truncarse a los 50 caracteres para no mostrar demasiado contenido.', 
          image: miyoImage, // Imagen local
          link: '/pagina2'
        },
        { 
          title: 'Submenú 3', 
          description: 'Descripción corta.', 
          image: miyoImage, // Imagen local
          link: '/pagina3'
        }
      ]
    };
  }
});
</script>
