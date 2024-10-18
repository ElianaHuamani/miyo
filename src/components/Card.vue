<template>
  <div class="card p-4 border rounded-lg shadow-lg">
    <!-- Imagen -->
    <img :src="imageSrc" alt="Card Image" class="w-full h-48 object-cover mb-4 rounded-lg" />

    <!-- Título -->
    <h3 class="text-xl font-semibold mb-2">{{ title }}</h3>

    <!-- Descripción (truncada si supera los 50 caracteres) -->
    <p class="text-gray-600">{{ truncatedDescription }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
// Importar la imagen directamente
import miyoImage from '@/assets/images/miyo.svg';

export default defineComponent({
  name: 'Card',
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      default: miyoImage, // Usamos la imagen local como valor por defecto
    }
  },
  setup(props) {
    // Lógica para cargar la imagen, ya sea la prop o el valor por defecto
    const imageSrc = computed(() => props.image || miyoImage);

    // Lógica para truncar la descripción si supera los 50 caracteres
    const truncatedDescription = computed(() => {
      return props.description.length > 160
        ? props.description.slice(0, 160) + '...'
        : props.description;
    });

    return {
      truncatedDescription,
      imageSrc
    };
  }
});
</script>

<style scoped>
.card {
  width: 100%;
  max-width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.card img {
  width: 100%;
  height: auto;
  border-radius: 8px;
}
</style>
