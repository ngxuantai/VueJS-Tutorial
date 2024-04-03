const app = Vue.createApp({
  //   template: ``,
  data() {
    return {
      x: 0,
      y: 0,

      products: [
        {
          url: 'gg.com',
          name: 'Product A',
          price: 100,
          isSelected: true,
        },
        {
          name: 'Product B',
          price: 150,
          isSelected: true,
        },
        {
          name: 'Product C',
          price: 200,
          isSelected: false,
        },
        {
          name: 'Product D',
          price: 250,
          isSelected: false,
        },
      ],
    };
  },
  methods: {
    // Mouse event
    onLogEvent(event, newX, newY) {
      console.log('running event', event);
      this.x = newX;
      this.y = newY;
      if (event.type == 'mousemove') {
        this.x = event.offsetX;
        this.y = event.offsetY;
      }
    },

    onSelectProduct(product) {
      product.isSelected = !product.isSelected;
    },
  },

  computed: {
    porductComputed() {
      return this.products.filter((product) => product.price > 150);
    },
  },
});

app.mount('#contact');
