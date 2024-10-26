<template>
  <div 
    class="card p-4 border rounded-lg shadow-lg cursor-pointer hover:shadow-xl transition"
    @click="goToPage"
  >
    <!-- Imagen -->
    <img :src="imageSrc" alt="Card Image" class="w-full h-48 object-cover mb-4 rounded-lg" />

    <!-- Título -->
    <div class="flex justify-between items-center mb-2">
      <h3 class="text-xl font-semibold">{{ title }}</h3>
    </div>

    <!-- Descripción (Logica de truncar si supera los 100 caracteres) -->
    <p class="text-gray-600">{{ truncatedDescription }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useRouter } from 'vue-router';

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
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
    isActive: {
      type: Boolean,
      required: true,
    }
  },
  setup(props) {
    const router = useRouter(); // Usamos Vue Router

    // Lógica para cargar la imagen desde las props o usar la imagen por defecto
    const imageSrc = computed(() => props.image);

    // Lógica para truncar la descripción si supera los 100 caracteres
    const truncatedDescription = computed(() => {
      return props.description.length > 100
        ? props.description.slice(0, 100) + '...'
        : props.description;
    });

    // Función para navegar a la página especificada
    const goToPage = () => {
      if (props.isActive) {
        router.push(props.link); // Navega a la ruta especificada
      }
    };

    return {
      truncatedDescription,
      imageSrc,
      goToPage
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
