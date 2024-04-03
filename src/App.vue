<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Welcome to Your Vue.js App" />
  <HeaderApp />
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import HeaderApp from "./components/Header.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    HeaderApp,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
