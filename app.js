const app = Vue.createApp({
    data() {
      return {
        showPrices: false,
      };
    },
    methods: {
      togglePrices() {
        this.showPrices = !this.showPrices;
      },
    },
  });
  
  app.mount('#app');
  

