import Vue from 'vue';
import App from './App.vue';
// eslint-disable-next-line no-unused-vars
import store from './store';
import router from './router';

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  store,
  router,
}).$mount('#app');
