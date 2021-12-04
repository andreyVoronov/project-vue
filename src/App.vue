<template>
  <div id="app">
    <button v-on:click="isHidden = !isHidden">ADD YOUR NEW PAYMENT</button>
    <addPaymentForm v-if="isHidden" @add-payment="addNewPayment"/>
    <paymentDisplay :items="paymentsList"/>
  </div>
</template>

<script>
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
      paymentsList: [],
    };
  },
  methods: {
    fetchData() {
      return [
        {
          date: '28.03.2020',
          category: 'Food',
          value: 169,
        },
        {
          date: '24.03.2020',
          category: 'Transport',
          value: 360,
        },
        {
          date: '24.03.2020',
          category: 'Food',
          value: 532,
        },
      ];
    },
    addNewPayment(payment) {
      console.log('addNewPayment', payment);
      this.paymentsList.push(payment);
    },
  },
  created() {
    this.paymentsList = this.fetchData();
  },
};
</script>
