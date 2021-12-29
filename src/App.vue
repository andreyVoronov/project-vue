<template>
  <div id="app">
    <h1>MY PAYMENTS</h1>
    <div class="top-links">
      <p>quick links for adding payments</p>
      <router-link to="/add/payment/Food?value=1000">Food - 1000</router-link>
      <router-link to="/add/payment/Transport?value=50">Transport - 50</router-link>
      <router-link to="/add/payment/Entertaiment?value=2000">Entertaiment - 2000</router-link>
    </div>
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
    editPayment() {
      this.UPDATE_PAYMENT_DATA({
        date: '28.03.2020',
        category: 'Food',
        value: 10000,
      });
    },
    // goToPage(pageName) {
    // this.$router.push(pageName);
    // },
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
