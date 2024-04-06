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
export default {
  data() {
    return {
      product: null,
    };
  },

  created() {
    fetch(`http://localhost:3000/products/${this.$route.params.id}`)
      .then((res) => res.json())
      .then((data) => {
        this.product = data;
      });
  },
};
</script>
