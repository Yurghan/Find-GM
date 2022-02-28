import { createRouter, createWebHistory } from 'vue-router';

import MasterDetail from './pages/masters/MasterDetail.vue';
import MastersList from './pages/masters/MastersList.vue';
import MasterRegistation from './pages/masters/MasterRegistration.vue';
import ContactMaster from './pages/requests/ContactMaster.vue';
import RequestsReceived from './pages/requests/RequestsReceived.vue';
import NotFound from './pages/NotFound.vue';
import UserAuth from './pages/auth/UserAuth.vue';
import store from './store/index.js';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/masters' },
    { path: '/masters', component: MastersList },
    {
      path: '/masters/:id',
      component: MasterDetail,
      props: true,
      children: [{ path: 'contact', component: ContactMaster }],
    },
    {
      path: '/register',
      component: MasterRegistation,
      meta: { requiresAuth: true },
    },
    {
      path: '/requests',
      component: RequestsReceived,
      meta: { requiresAuth: true },
    },
    { path: '/auth', component: UserAuth, meta: { requiresUnauth: true } },
    { path: '/:notFound(.*)', component: NotFound },
  ],
});

router.beforeEach(function (to, _, next) {
  if (to.meta.requiresAuth && !store.getters.isAuthenticated) {
    next('/auth');
  } else if (to.meta.requiresUnauth && store.getters.isAuthenticated) {
    next('/masters');
  } else {
    next();
  }
});

export default router;
