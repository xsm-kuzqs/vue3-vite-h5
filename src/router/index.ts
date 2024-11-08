import { App } from 'vue';
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import { createRouterGuards } from './routerGuards';
import { main } from './modules/main';
import { tabbar } from './modules/tabbar';

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Layout',
    redirect: '/home',
    component: () => import('@/layout/index.vue'),
    meta: {
      title: '首页',
    },
    children: [
      ...tabbar,
      ...main,
      {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        meta: {
          title: 'NotFound',
        },
        redirect: '/',
      },
    ],
  },
];

const router = createRouter({
  // process.env.BASE_URL
  history: createWebHashHistory(''),
  routes,
});

export function setupRouter(app: App) {
  app.use(router);
  // 创建路由守卫
  createRouterGuards(router);
}
export default router;
