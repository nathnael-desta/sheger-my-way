import { createRouter, createWebHashHistory } from 'vue-router';
import home from './views/Home.vue';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/:index?', component: home, props: true }
  ]
})

export default router;