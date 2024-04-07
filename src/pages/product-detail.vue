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
import { ref } from "vue";
import { useRoute } from "vue-router";

export default {
  setup() {
    const product = ref(null);
    const error = ref(null);
    const route = useRoute();
    const fetchProduct = async () => {
      try {
        const res = await fetch(
          `http://localhost:3000/products/${route.params.id}`
        );
        if (!res.ok) {
          throw new Error("Cannot fetch data");
        }
        product.value = await res.json();
      } catch (err) {
        error.value = err.message;
      }
    };
    fetchProduct();
    return {
      product,
    };
  },
};
</script>
