import { createRouter, createWebHistory} from 'vue-router';
import Home from './pages/Home.vue';
import Completed from './pages/Completed.vue';
import Active from './pages/Active.vue';

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/completed',
      name: 'Completed',
      component: Completed,
    },
    {
      path: '/active',
      name: 'Active',
      component: Active,
    },
  ],
});