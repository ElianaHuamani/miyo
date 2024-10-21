import { createRouter, createWebHistory } from 'vue-router';
import DiscoveryPage from '../components/DiscoveryPage.vue';
import Pagina1 from '../pages/Pagina1.vue';
import Pagina2 from '../pages/Pagina2.vue';
import Pagina3 from '../pages/Pagina3.vue';
import Pagina4 from '../pages/Pagina4.vue';

const routes = [
  { path: '/', component: DiscoveryPage },
  { path: '/pagina1', component: Pagina1 },
  { path: '/pagina2', component: Pagina2 },
  { path: '/pagina3', component: Pagina3 },
  { path: '/pagina4', component: Pagina4 },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
