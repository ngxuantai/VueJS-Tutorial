<template>
  <nav-component />
  <router-view />
</template>

<script>
import NavComponent from "./components/Nav.vue";

export default {
  components: {
    NavComponent,
  },
};
</script>
