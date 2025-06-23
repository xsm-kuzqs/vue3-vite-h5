import { RouteRecordRaw } from 'vue-router';

// 底部导航栏 tabbar
export const tabbar: Array<RouteRecordRaw> = [
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/home/index.vue'),
    meta: {
      title: '首页--000',
      icon: 'home-o',
      tabbar: true,
    },
  },
  {
    path: '/category',
    name: 'category',
    component: () => import('@/views/category/index.vue'),
    meta: {
      title: '分类',
      icon: 'apps-o',
      tabbar: true,
      keepAlive: true,
    },
  },
];
