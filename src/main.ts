import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './styles/tailwind.css'; // Importa los estilos de Tailwind
import './styles/global.css';

createApp(App).use(router).mount('#app');
