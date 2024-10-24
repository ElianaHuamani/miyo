import { createRouter, createWebHistory } from 'vue-router';
import DiscoveryPage from '../components/DiscoveryPage.vue';
//import Pagina1 from '../pages/Pagina1.vue';
import Pagina2 from '../pages/Pagina2.vue';
import Pagina3 from '../pages/Pagina3.vue';
import JourneyPage from '../pages/JourneyPage.vue';
import PodcastPlayerPage from '../pages/PodcastPlayerPage.vue';

const routes = [
  { path: '/', component: DiscoveryPage },
  { path: '/pagina1', component: JourneyPage },
  { path: '/pagina2', component: Pagina2 },
  { path: '/pagina3', component: Pagina3 },
  { path: '/leccion1', component: PodcastPlayerPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
