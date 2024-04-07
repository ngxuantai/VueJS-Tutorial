<template>
  <h1>List product</h1>
  <input
    type="number"
    v-model="searchPrice"
    placeholder="Type price to search"
  />
  <div v-if="allProducts.length">
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
import { useStore } from "vuex";
import ProductItemVue from "../components/ProductItem.vue";

export default {
  components: {
    ProductItemVue,
  },
  setup() {
    const store = useStore();
    const searchPrice = ref("");
    store.dispatch("fetchAllProducts");
    const allProducts = computed(() => {
      return store.state.allProducts;
    });
    const error = computed(() => {
      return store.state.error;
    });
    const searchProducts = computed(() => {
      return allProducts.value.filter((product) => {
        return product.price > searchPrice.value;
      });
    });
    return {
      allProducts,
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
