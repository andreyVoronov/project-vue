<template>
  <div id="app">
    <button v-on:click="isHidden = !isHidden">ADD YOUR NEW PAYMENT</button>
    <addPaymentForm v-if="isHidden" @add-payment="addNewPayment" :categoryList="categoryList"/>
    <paymentDisplay :spendings="paymentsList"/>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex';
import paymentDisplay from './components/paymentDisplay.vue';
import addPaymentForm from './components/addPaymentForm.vue';

export default {
  name: 'App',
  components: {
    paymentDisplay,
    addPaymentForm,
  },
  data() {
    return {
      isHidden: false,
      // paymentsList: [],
    };
  },
  methods: {
    ...mapActions([
      'fetchData',
      'fetchCategoryListData',
    ]),
    ...mapMutations([
      'ADD_PAYMENT_DATA',
      'UPDATE_PAYMENT_DATA',
    ]),
    addNewPayment(payment) {
      this.ADD_PAYMENT_DATA(payment);
    },
    editPayment() {
      this.UPDATE_PAYMENT_DATA({
        date: '28.03.2020',
        category: 'Food',
        value: 10000,
      });
    },
  },
  computed: {
    ...mapGetters([
      'paymentsList',
      'categoryList',
    ]),

  },
  addNewPayment(payment) {
    console.log('addNewPayment', payment);
    this.paymentsList.push(payment);
  },
  created() {
    // this.paymentsList = this.fetchData();
    // this.$store.commit('SET_PAYMENTS_LIST', this.fetchData());
    // console.log(this.paymentsList);
    // this.$store.dispatch('fetchData');
    this.fetchData();
    this.fetchCategoryListData();
  },
};
</script>
