import { createRouter, createWebHistory } from 'vue-router';
import DiscoveryPage from '@/pages/DiscoveryPage.vue';
import JourneyPage from '@/pages/JourneyPage.vue';
import PodcastPlayerPage from '@/pages/PodcastPlayerPage.vue';

const routes = [
  { path: '/', component: DiscoveryPage },
  { path: '/journey', component: JourneyPage },
  { path: '/podcast', component: PodcastPlayerPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
