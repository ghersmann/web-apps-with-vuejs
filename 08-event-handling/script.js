Vue.createApp({
  data() {
    return {
      x: 12,
      y: 4,
      fruitBasket: [
        "🍏 Apple",
        "🍌 Banana",
        "🍉 Melon",
        "🫐 Blueberry",
        "🍓 Strawberry",
        "🍍 Ananas",
        "🥭 Mango",
      ],
    };
  },
  methods: {
    removeFruit(i) {
      this.fruitBasket.splice(i, 1);
    },

    recordMouseMove(event) {
      this.x = event.offsetX;
      this.y = event.offsetY;
    },
  },
}).mount("#app");
