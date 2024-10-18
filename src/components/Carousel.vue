<template>
    <div class="carousel-wrapper">
      <!-- Flecha Izquierda (apuntando hacia la izquierda) -->
      <button 
        v-if="canScrollLeft" 
        @click="prevSlide" 
        class="carousel-button absolute left-4 top-1/2 transform -translate-y-1/2">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
  
      <!-- Carrusel -->
      <div ref="carousel" class="carousel flex gap-4" @scroll="updateScrollState">
        <slot></slot>
      </div>
  
      <!-- Flecha Derecha (apuntando hacia la derecha) -->
      <button 
        v-if="canScrollRight" 
        @click="nextSlide" 
        class="carousel-button absolute right-4 top-1/2 transform -translate-y-1/2">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
</template>
  
<script lang="ts">
  import { defineComponent, ref, onMounted } from 'vue';
  
  export default defineComponent({
    name: 'Carousel',
    setup() {
      const carousel = ref<HTMLElement | null>(null);
      const canScrollLeft = ref(false);
      const canScrollRight = ref(true);
  
      const updateScrollState = () => {
        if (carousel.value) {
          const el = carousel.value;
          canScrollLeft.value = el.scrollLeft > 0;
          canScrollRight.value = el.scrollLeft + el.clientWidth < el.scrollWidth;
        }
      };
  
      const nextSlide = () => {
        if (carousel.value) {
          carousel.value.scrollBy({ left: 300, behavior: 'smooth' });
          updateScrollState();
        }
      };
  
      const prevSlide = () => {
        if (carousel.value) {
          carousel.value.scrollBy({ left: -300, behavior: 'smooth' });
          updateScrollState();
        }
      };
  
      onMounted(() => {
        updateScrollState();
      });
  
      return { carousel, canScrollLeft, canScrollRight, nextSlide, prevSlide, updateScrollState };
    }
  });
</script>
  
<style scoped>
  .carousel-wrapper {
    position: relative;
    width: 100%;
  }
  
  .carousel {
    display: flex;
    gap: 1rem;
    padding: 1rem;
    overflow-x: auto;
    scroll-behavior: smooth;
  }
  
  .carousel::-webkit-scrollbar {
    display: none;
  }
  
  .carousel > * {
    flex: none;
    width: 300px;
    height: auto;
  }
  
  .carousel-button {
    z-index: 10;
    background-color: #E5E7EB; /* bg-gray-200 */
    color: #4B5563; /* text-gray-600 */
    padding: 0.75rem; /* p-3 */
    border-radius: 9999px; /* rounded-full */
    transition: background-color 0.2s;
  }
  
  .carousel-button:hover {
    background-color: #D1D5DB; /* hover:bg-gray-300 */
  }
  
  .carousel-button svg {
    height: 1.5rem; /* h-6 */
    width: 1.5rem; /* w-6 */
  }
</style>
  