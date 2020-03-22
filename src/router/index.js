import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Mp3Player',
    component: () => import('../views/Mp3Player.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
