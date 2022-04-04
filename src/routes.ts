import { RouteRecordRaw } from 'vue-router';
import PageA from './PageA.vue';
import PageB from './PageB.vue';

export const routes: RouteRecordRaw[] = [
  // { path: '/', component: PageA },
  // { path: '/a/A', component: PageA, sensitive: true },
  { path: '/a/:userId', component: PageA },
  { path: '/a/:age(\\d+)', component: PageA },
  { path: '/b/:userId', component: PageB, name: 'userpage' },
  { path: '/:notfound(.*)', component: PageB },
];
