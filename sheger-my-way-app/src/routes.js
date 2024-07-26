import { createRouter, createWebHashHistory } from 'vue-router';
import stop from './views/Stop.vue';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/:index?', component: stop, props: true }
  ]
})

export default router;