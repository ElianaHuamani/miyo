<template>
  <div 
    class="card p-4 border rounded-lg shadow-lg cursor-pointer hover:shadow-xl transition"
    @click="goToPage"
  >
    <!-- Imagen -->
    <img :src="imageSrc" alt="Card Image" class="w-full h-48 object-cover mb-4 rounded-lg" />

    <!-- Título con ícono de audífono alineado a la derecha -->
    <div class="flex justify-between items-center mb-2">
      <h3 class="text-xl font-semibold">{{ title }}</h3>
      <!-- Icono de audífono con tamaño fijo -->
      <div class="flex-shrink-0 ml-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          class="w-6 h-6 text-gray-500"
          viewBox="0 0 24 24"
        >
          <path
            d="M12 1C6.486 1 2 5.486 2 11v7c0 2.206 1.794 4 4 4h2c1.103 0 2-.897 2-2v-5c0-1.103-.897-2-2-2H5v-3c0-4.411 3.589-8 8-8s8 3.589 8 8v3h-3c-1.103 0-2 .897-2 2v5c0 1.103.897 2 2 2h2c2.206 0 4-1.794 4-4v-7c0-5.514-4.486-10-10-10z"
          />
        </svg>
      </div>
    </div>

    <!-- Descripción (truncada si supera los 100 caracteres) -->
    <p class="text-gray-600">{{ truncatedDescription }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useRouter } from 'vue-router'; // Importamos Vue Router
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
      default: miyoImage,
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
    const imageSrc = computed(() => props.image || miyoImage);

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
