<template>
  <div>
    <div class="list-header">
        <p>#</p>
        <p>date</p>
        <p>category</p>
        <p>value</p>
    </div>
    <div v-for="(item, index) in items" :key="index">
      <div :class="$style.item">
        <p class="list-index">{{ index + 1 }}</p>
        <p class="list-date">{{ item.date }}</p>
        <p class="list-category">{{ item.category }}</p>
        <p class="list-value">{{ item.value }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PaymentDisplay',
  // props: ['show'],
  props: {
    items: {
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
 .list-header{
    display: grid;
    grid-template-columns: 3rem 9rem 9rem 9rem;
    font-weight: bold;
 }
</style>
