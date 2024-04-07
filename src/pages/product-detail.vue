<template>
  <h1>Product Detail</h1>
  <div v-if="product">
    <p>ID: {{ product.id }}</p>
    <p>Name: {{ product.name }}</p>
    <p>Price: {{ product.price }}</p>
  </div>
  <div v-else>
    <p>Loading...</p>
  </div>
</template>

<script>
import { computed } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";

export default {
  setup() {
    const route = useRoute();
    const store = useStore();
    store.dispatch("fetchProduct", { id: route.params.id });
    const product = computed(() => {
      return store.state.product;
    });
    return {
      product,
    };
  },
};
</script>
