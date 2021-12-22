import axios from 'axios';
import Vue from 'vue';
import Vuex from 'vuex';
import category from './category';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    paymentsList: [],
    // categoryList: [],
  },
  mutations: {
    SET_PAYMENTS_LIST(state, paymentsList) {
      // console.log('SET_PAYMENTS_LIST:', paymentsList);
      state.paymentsList = paymentsList;
    },
    ADD_PAYMENT_DATA(state, payment) {
      state.paymentsList.push(payment);
    },
    UPDATE_PAYMENT_DATA(state, editedPayment) {
      // console.log('UPDATE_PAYMENT_DATA', editedPayment);
      // state.paymentsList[0] = editedPayment;
      // state.paymentsList = [...state.paymentsList];
      Vue.set(state.paymentsList, 0, editedPayment);
    },
    // SET_CATEGORY_LIST(state, categoryList) {
    //   state.categoryList = categoryList;
    // },
  },
  getters: {
    // paymentsList(state) {
    //   return state.paymentsList;
    // },
    paymentsList: ({ paymentsList }) => paymentsList,
    // categoryList: ({ categoryList }) => categoryList,
  },
  actions: {
    fetchData({ commit }) {
      return axios('http://localhost:3000/payments', { method: 'GET' })
        .then((Response) => {
          commit('SET_PAYMENTS_LIST', Response.data);
        });
    },
  },
  modules: {
    category,
  },
});
