<template>
  <nav aria-label="breadcrumb" class="breadcrumb">
    <template v-for="(route, index) in routes" :key="index">
      <button 
        v-if="index < routes.length - 1" 
        class="btn" 
        @click="navigateTo(route.path)">
        {{ route.label }}
      </button>
      <span v-else class="breadcrumb-text" >
        {{ route.label }}
      </span>
      <span v-if="index < routes.length - 1" class="breadcrumb-separator">&gt;</span>
    </template>
  </nav>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'Breadcrumb',
  props: {
    routes: {
      type: Array as PropType<{ label: string; path: string }[]>,
      required: true,
    },
  },
  setup(props) {
    const router = useRouter();
    const navigateTo = (path: string) => {
      router.push(path);
    };
    return { navigateTo, props };
  },
});
</script>

<style scoped>

.breadcrumb {
  display: flex;
  align-items: center;
  gap: 5px;
  margin-bottom: 1rem;
  width: 100%; /* Asegura que ocupe todo el ancho disponible */
  max-width: 700px; /* Limita el ancho en pantallas grandes */
  margin-left: auto;
  margin-right: auto;
  padding: 0 10px; /* Agrega espacio para evitar cortes en los bordes */
}

.breadcrumb button,
.breadcrumb .breadcrumb-text {
  background-color: #F3F3F3;
  color: #555555;
  font-weight: bold;
  padding: 4px 10px; /* Espaciado equilibrado para pantallas de todos los tamaños */
  border-radius: 15px;
  display: inline-flex;
  align-items: center;
  flex-shrink: 0; /* Evita que los botones se reduzcan demasiado en pantallas pequeñas */
}

.breadcrumb button:hover {
  color: #333333; /* Gris más oscuro en hover */
  background-color: #e0e0e0;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2); /* Sombra para dar presencia */
}

.breadcrumb-separator {
  color: #E1E1E1;
  font-weight: bold;
  font-size: 1.5rem;
  flex-shrink: 0; /* Mantiene el tamaño del separador */
}
</style>