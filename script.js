const app = Vue.createApp({
  template: `<h3>Number: {{number}}</h3>
      <button @click="onChangeNumber">Change number</button>
      <button @click="onShowName">Show name</button>
      <div v-if="showName"><h3>Name: {{name}}</h3></div>`,
  data() {
    return {
      number: 5,
      name: 'Nguyen Tai',
      showName: false,
    };
  },
  methods: {
    onChangeNumber() {
      this.number++;
      console.log(this);
    },
    onShowName() {
      this.showName = !this.showName;
    },
  },
});

app.mount('#contact');
