<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HeaderApp />
  <teleport to="body">
    <ModalComponent v-if="isShow" @closeModal="onToggleModal">
      <template v-slot:header>
        <h2>This is header</h2>
      </template>
      <label for="">Name</label>
      <input type="text" />
      <template v-slot:footer>
        <button @click="onToggleModal">Close</button>
      </template>
    </ModalComponent>
  </teleport>
  <button @click="onToggleModal">Show modal</button>
</template>

<script>
import HeaderApp from "./components/Header.vue";
import ModalComponent from "./components/Modal.vue";

export default {
  name: "App",
  components: {
    HeaderApp,
    ModalComponent,
  },
  data() {
    return {
      isShow: false,
    };
  },
  methods: {
    onToggleModal() {
      this.isShow = !this.isShow;
    },
  },
};
</script>
