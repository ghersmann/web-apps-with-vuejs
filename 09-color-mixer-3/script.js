// Color Mixer 3.0

Vue.createApp({
  data() {
    return {
      bred: 30,
      bgreen: 144,
      bblue: 255,
      tred: 0,
      tgreen: 0,
      tblue: 0,
      textVisible: false,
      testText: "Random Text...",
      showText: "Show Text",
      hideText: "Hide Text",
    };
  },
  computed: {
    computedColor() {
      return `rgb(${this.bred}, ${this.bgreen}, ${this.bblue})`;
    },
    compTextColor() {
      return `rgb(${this.tred}, ${this.tgreen}, ${this.tblue})`;
    },
  },
  methods: {
    randomBGColor() {
      this.bred = Math.floor(Math.random() * 255);
      this.bgreen = Math.floor(Math.random() * 255);
      this.bblue = Math.floor(Math.random() * 255);
    },
    randomTextColor() {
      this.tred = Math.floor(Math.random() * 255);
      this.tgreen = Math.floor(Math.random() * 255);
      this.tblue = Math.floor(Math.random() * 255);
    },
    toggleText() {
      this.textVisible = !this.textVisible;
    },
  },
}).mount("#app");
