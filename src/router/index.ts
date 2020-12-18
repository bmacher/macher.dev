import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import { Home, Disclaimer } from '@/views';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/disclaimer',
    name: 'Disclamer',
    component: Disclaimer,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
