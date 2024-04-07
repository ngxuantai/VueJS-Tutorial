<template>
  <router-link :to="{ name: 'product-detail', params: { id: product.id } }">
    {{ product.name }}
  </router-link>
  <h4>{{ product.price }}</h4>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    return {
      product: props.item,
    };
  },
};
</script>
