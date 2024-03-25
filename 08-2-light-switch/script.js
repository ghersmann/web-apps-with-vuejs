//Light Switch with vue.js

Vue.createApp({
  data() {
    return {
      docTitle: "Good Morning World!",
      buttonLabel: "Turn on the Light",
      isLightOn: true,
    };
  },
  methods: {
    buttonClick() {
      document.body.classList.toggle("bgcolor-change");
      document.title = this.docTitle;
      this.isLightOn = !this.isLightOn;
      this.docTitle = this.isLightOn
        ? "Good Morning World!"
        : "Good Night World!";
      this.buttonLabel = this.isLightOn
        ? "Turn on the Light"
        : "Turn off the Light";
    },
  },
}).mount("#app");
