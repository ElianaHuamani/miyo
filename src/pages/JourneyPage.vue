<template>
    <div class="journey-wrapper">
      <h1 class="text-center text-2xl mb-6">Ruta de Aprendizaje</h1>
  
      <div class="steps-container">
        <!-- Nodos del camino -->
        <div v-for="(step, index) in steps" :key="index" class="step-item">
          <!-- Nodo -->
          <div class="step-wrapper">
            <div :class="['step', step.completed ? 'completed' : '']" @click="goToStep(step.link)">
              <span v-if="step.completed" class="icon">✓</span>
              <span v-else class="icon">{{ index + 1 }}</span>
            </div>
            <p class="step-title">{{ step.title }}</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { Step } from '../services/backend/step';
  
  export default defineComponent({
    name: 'JourneyPage',
    setup() {
      // Datos para los pasos
      const steps = ref<Step[]>([
        { title: 'Lección 1', completed: true, link: '/leccion1' },
        { title: 'Lección 2', completed: false, link: '/leccion2' },
        { title: 'Lección 3', completed: false, link: '/leccion3' },
        { title: 'Lección 4', completed: false, link: '/leccion4' }
      ]);
  
      const goToStep = (link: string) => {
        window.location.href = link;
      };
  
      return {
        steps,
        goToStep
      };
    }
  });
  </script>
  
  <style scoped>
  .journey-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 50px;
    padding-bottom: 50px;
    width: 100%;
  }
  
  .steps-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4rem;
    position: relative;
  }
  
  .step-item {
    display: flex;
    position: relative;
    justify-content: center;
  }
  
  .step-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }
  
  .step {
    width: 80px;
    height: 80px;
    background-color: #fff;
    border: 3px solid #ccc;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: background-color 0.3s ease;
    z-index: 2;
  }
  
  .step.completed {
    background-color: #4CAF50;
    border-color: #4CAF50;
  }
  
  .icon {
    font-size: 2rem;
    color: #333;
  }
  
  .step-title {
    margin-left: 20px;
    font-size: 1.2rem;
    color: #333;
  }
  
  .step-item:nth-child(even) .step-wrapper {
    flex-direction: row-reverse;  /* Alineamos el texto a la derecha del nodo */
  }
  
  .step-item:nth-child(even) .step-title {
    margin-left: 0;
    margin-right: 20px;  /* Ajustamos el margen para la alternancia */
  }
  </style>
  