<template>
  <div id="app">
    <h1>MY PAYMENTS</h1>
    <addPaymentForm @add-payment="addNewPayment" :categoryList="categoryList"/>
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
<style scoped>
.top-links{
      display: flex;
    flex-direction: column;
    margin-bottom: 10px;
}
.add-btn{

}
</style>
