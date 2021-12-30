<template>
  <div>
    <div class="top-links">
      <p>quick links for adding payments</p>
      <router-link to="/add/payment/Food?value=1000">Food - 1000</router-link>
      <router-link to="/add/payment/Transport?value=50">Transport - 50</router-link>
      <router-link to="/add/payment/Entertaiment?value=2000">Entertaiment - 2000</router-link>
    </div>
    <router-link to="/add/payment">
    <button @click="isHidden">Add New spending</button></router-link>
    <div class="" v-show="flag">
      <input type="number" placeholder="Amount" v-model="value">
      <select name="" id="" v-model="category">
      <option
          v-for="category of categoryList"
          :value="category"
          :key="category"
      >{{ category }}</option>
      </select>
      <input type="text" placeholder="Date" v-model="date">
      <button @click="addPayment">Add</button>
      {{ addPaymentFromUrl }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'AddPaymentForm',
  props: {
    categoryList: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      value: '',
      category: '',
      date: '',
      flag: false,
    };
  },
  computed: {
    paymentDate() {
      const currentDate = new Date();
      const day = currentDate.getDate();
      const month = currentDate.getMonth() + 1;
      const year = currentDate.getFullYear();

      return `${day}.${month}.${year}`;
    },
    addPaymentFromUrl() {
      this.PaymentFromUrl();
      return '';
    },
  },
  methods: {
    addPayment() {
      const { value, category, date } = this;
      const data = {
        value: +value,
        category,
        date: date || this.paymentDate,
      };

      this.$emit('add-payment', data);
    },
    isHidden() {
      this.flag = !this.flag;
    },
    PaymentFromUrl() {
      this.category = this.$route.params.categorySelected;
      this.value = this.$route.query.value;
      this.date = this.paymentDate;
      if (this.category && this.value && this.date) {
        this.addPayment();
      }
    },
  },
  mounted() {
  },
};
</script>

<style scoped>

</style>
