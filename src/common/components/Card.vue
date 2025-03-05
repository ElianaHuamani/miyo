<template>
  <div 
    class="card p-4 border rounded-lg shadow-lg cursor-pointer hover:shadow-xl transition"
    @click="goToPage"
  >
    <!-- Imagen -->
    <img :src="imageSrc" loading="lazy" alt="Card Image" class="w-full h-48 object-cover mb-4 rounded-lg" />    
    
    <!-- Badge de creador - movido fuera del div de iconos -->
    <div class="flex items-center mb-3">
      <span class="text-sm text-gray-600 mr-2">Creado por:</span>
      <div class="flex items-center" 
          :class="isOurCreation ? 'bg-blue-100 rounded-full px-3 py-1' : 'bg-purple-100 rounded-full px-3 py-1'">
        <span class="text-xs font-medium" 
              :class="isOurCreation ? 'text-blue-700' : 'text-purple-700'">
          {{ creatorName }}
        </span>
      </div>
    </div>

    <!-- Div de iconos separado del badge -->
    <div class="flex justify-between items-center px-4 text-gray-600">
      <!-- Icono de reloj y número (izquierda) -->
      <div class="flex items-center gap-2">
        <img src="@/assets/icons/icono-clock.svg" alt="Clock Icon" class="w-5 h-5 max-w-[20px] max-h-[20px]" />
        <span class="text-sm leading-none whitespace-nowrap flex-none">{{ timeValue }}</span>
      </div>

      <!-- Icono de audífonos y número (derecha) -->
      <div class="flex items-center gap-2">
        <span class="text-sm leading-none whitespace-nowrap flex-none">{{ audioCount }}</span>
        <img src="@/assets/icons/icono-headset.svg" alt="Headset Icon" 
        class="w-5 h-5 max-w-[20px] max-h-[20px]" />
      </div>
    </div>
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
    },
    timeValue: {
      type: String,
      required: true,
    },
    audioCount: {
      type: Number,
      required: true,
    },
    isOurCreation: {
      type: Boolean,
      required: true,
    },
    creatorName: {
      type: String,
      required: true,
    }
  },
  setup(props) {
    const router = useRouter(); // Usamos Vue Router

    const imageSrc = computed(() => props.image);
    
    const truncatedDescription = computed(() => {
      return props.description.length > 100
        ? props.description.slice(0, 100) + '...'
        : props.description;
    });

    const goToPage = () => {
      if (props.isActive) {
        router.push(props.link); // Navega a la ruta especificada
      }
    };

    return {
      truncatedDescription,
      imageSrc,
      goToPage,
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