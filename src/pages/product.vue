<template>
  <h1>List product</h1>
  <div v-if="products.length">
    <div class="item" v-for="product in products" :key="product.id">
      <router-link :to="{ name: 'product-detail', params: { id: product.id } }">
        {{ product.name }}
      </router-link>
      <h4>{{ product.name }}</h4>
    </div>
  </div>
  <div v-else>
    <p>Loading...</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [],
    };
  },

  created() {
    fetch("http://localhost:3000/products")
      .then((res) => res.json())
      .then((data) => {
        this.products = data;
      });
    console.log("fetch data");
  },

  mounted() {
    console.log("mounted");
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
