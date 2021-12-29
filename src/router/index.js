import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/add/payment/',
      name: 'addpayment',
      component: () => import('../components/addPaymentForm.vue'),
    },
    {
      path: '/add/payment/:categorySelected',
      name: 'addpaymentWithCategory',
      component: () => import('../components/addPaymentForm.vue'),
    },
  ],
});

export default router;
