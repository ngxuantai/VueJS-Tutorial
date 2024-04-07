<template>
  <h1>List product</h1>
  <input
    type="number"
    v-model="searchPrice"
    placeholder="Type price to search"
  />
  <div v-if="products.length">
    <div class="item" v-for="product in searchProducts" :key="product.id">
      <ProductItemVue :item="product" />
    </div>
  </div>
  <div v-else-if="error">
    <p>{{ error }}</p>
  </div>
  <div v-else>
    <p>Loading...</p>
  </div>
</template>

<script>
import { ref, computed } from "vue";
import ProductItemVue from "../components/ProductItem.vue";

export default {
  components: {
    ProductItemVue,
  },
  setup() {
    const searchPrice = ref("");
    const products = ref([]);
    const error = ref(null);
    const fetchProducts = async () => {
      try {
        const res = await fetch("http://localhost:3000/products");
        if (!res.ok) {
          throw new Error("Cannot fetch data");
        }
        products.value = await res.json();
      } catch (err) {
        error.value = err.message;
      }
    };

    fetchProducts();
    const searchProducts = computed(() => {
      return products.value.filter((product) => {
        return product.price > searchPrice.value;
      });
    });
    return {
      products,
      error,
      searchPrice,
      searchProducts,
    };
  },
};
</script>

<style>
.item {
  margin: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  display: inline-block;
}
</style>
