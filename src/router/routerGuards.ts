import { Router } from 'vue-router';

export function createRouterGuards(router: Router) {
  router.beforeEach((to, _from, next) => {
    console.log('router guard', to);
    //todo check if user is logged in 权限校验
    next();
  });

  router.afterEach((to) => {
    // window.scrollTo(0, 0);
    document.title = (to?.meta?.title as string) || document.title;
  });
}
