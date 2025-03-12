<template>
  <div class="card p-4 border rounded-lg shadow-lg transition">
  <img 
    :src="imageSrc" 
    loading="lazy" 
    alt="Card Image" 
    class="w-full h-48 object-cover mb-4 rounded-lg cursor-pointer hover:opacity-90 transition" 
    @click="goToPage"
  />   
    <!-- Sección de creador y redes sociales -->
    <div class="flex items-center mb-3">
      <!-- Etiqueta "Creado por:" -->
      <span class="text-sm text-gray-600 mr-2">Creado por:</span>
      
      <!-- Badge SOLO para el nombre del creador (con fondo coloreado) -->
      <div 
        :class="creator.isOur ? 'bg-blue-100 rounded-full px-3 py-1' : 'bg-purple-100 rounded-full px-3 py-1'"
      >
        <span class="text-xs font-medium" 
              :class="creator.isOur ? 'text-blue-700' : 'text-purple-700'">
          {{ creator.name }}
        </span>
      </div>
      
      <!-- Iconos de redes sociales (completamente separados, sin fondo) -->
      <a v-if="creator.instagram && creator.instagram.trim() !== ''" 
         :href="creator.instagram" 
         target="_blank" 
         rel="noopener noreferrer"
         class="ml-2">
        <img src="@/assets/icons/icon-instagram.svg" alt="Instagram" class="social-icon" />
      </a>
      <a v-if="creator.linkedin && creator.linkedin.trim() !== ''" 
         :href="creator.linkedin" 
         target="_blank" 
         rel="noopener noreferrer"
         class="ml-2">
        <img src="@/assets/icons/icon-linkedin.svg" alt="LinkedIn" class="social-icon" />
      </a>
    </div>

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
import { ICreator } from '@/services/backend/ICard';

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
    creator: {
      type: Object as () => ICreator,
      required: true,
    }
  },
  setup(props) {
    const router = useRouter();

    const imageSrc = computed(() => props.image);

    const goToPage = () => {
      if (props.isActive) {
        router.push(props.link);
      }
    };

    return {
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

.social-icon {
  max-width: 25px;
  max-height: 25px;
}

</style>