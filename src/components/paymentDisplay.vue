<template>
  <div class="list">
    <div class="list-header">
        <p>#</p>
        <p>date</p>
        <p>category</p>
        <p>value</p>
    </div>
    <div v-for="(spending, index) in paginatedSpendings" :key="index">
      <div :class="$style.item">
        <p class="list-index">{{ index + 1 }}</p>
        <p class="list-date">{{ spending.date }}</p>
        <p class="list-category">{{ spending.category }}</p>
        <p class="list-value">{{ spending.value }}</p>
      </div>
    </div>
    <div class="pagination">
      <button class="page" v-for="page in pages" :key="page"
      @click="paginationClick(page)">{{ page }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PaymentDisplay',
  // props: ['show'],
  props: {
    spendings: {
      type: Array,
      required: true,
      // default: () => [],
    },
    show: {
      type: Boolean,
      default: true,
      // required: true,
    },
  },
  data() {
    return {
      spendingsInPage: 3,
      pageNumber: 1,
    };
  },
  computed: {
    pages() {
      return Math.ceil(this.spendings.length / 3);
    },
    paginatedSpendings() {
      const from = (this.pageNumber - 1) * this.spendingsInPage;
      const to = from + this.spendingsInPage;
      return this.spendings.slice(from, to);
    },
  },
  methods: {
    paginationClick(page) {
      this.pageNumber = page;
    },
  },
};
</script>

<style module>
.item {
    display: grid;
    grid-template-columns: 3rem 9rem 9rem 9rem;
    border-top: 0.175rem solid;
}
</style>

<style scoped>
.list{
    width: 24rem;
}
 .list-header{
    display: grid;
    grid-template-columns: 3rem 9rem 9rem 9rem;
    font-weight: bold;
 }
 .pagination{
   display: flex;
   justify-content: space-between;
 }
</style>
