import { RouteRecordRaw } from 'vue-router';

export const main: Array<RouteRecordRaw> = [
  {
    path: '/example',
    name: 'example',
    component: () => import('@/views/example/index.vue'),
    meta: {
      title: 'example',
      topBar: false,
    },
  },
  {
    path: '/example02',
    name: 'example02',
    component: () => import('@/views/example/index.vue'),
    meta: {
      title: 'example02',
      topBar: false,
    },
  },
];
