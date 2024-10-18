<template>
  <div class="landing-page container mx-auto p-4">
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
import { defineComponent } from 'vue';
import Carousel from '../components/Carousel.vue';
import Card from '../components/Card.vue';

export default defineComponent({
  name: 'LandingPage',
  components: { Carousel, Card },
  data() {
    return {
      section1Cards: [
        { 
          title: 'Submenú 1', 
          description: 'Esta es una descripción que no supera los 50 caracteres.', 
          image: '', // Si está vacío, se usará la imagen local por defecto
          link: '/pagina1'
        },
        { 
          title: 'Submenú 2', 
          description: 'Descripción un poco más larga que debería truncarse a los 50 caracteres para no mostrar demasiado contenido.', 
          image: '', // Si está vacío, se usará la imagen local por defecto
          link: '/pagina2'
        },
        { 
          title: 'Submenú 3', 
          description: 'Descripción corta.', 
          image: '', // Si está vacío, se usará la imagen local por defecto
          link: '/pagina3'
        }
      ]
    };
  }
});
</script>
