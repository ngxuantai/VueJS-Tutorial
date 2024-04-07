import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      product: null,
      allProducts: [],
      error: null,
    };
  },
  mutations: {
    setProduct(state, productPayload) {
      state.product = productPayload;
    },
    setAllProducts(state, productsPayload) {
      state.allProducts = productsPayload;
    },
    setError(state, errorPayload) {
      state.error = errorPayload;
    },
  },
  actions: {
    async fetchProduct({ commit }, { id }) {
      try {
        const res = await fetch(`http://localhost:3000/products/${id}`);
        if (!res.ok) {
          throw new Error("Cannot fetch data");
        }
        const product = await res.json();
        commit("setProduct", product);
      } catch (err) {
        console.error(err);
        commit("setError", err.message);
      }
    },

    async fetchAllProducts({ commit }) {
      try {
        const res = await fetch("http://localhost:3000/products");
        if (!res.ok) {
          throw new Error("Cannot fetch data");
        }
        const products = await res.json();
        commit("setAllProducts", products);
      } catch (err) {
        console.error(err);
      }
    },
  },
});

export default store;
