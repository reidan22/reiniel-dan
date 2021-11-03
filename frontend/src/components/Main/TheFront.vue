<template>
  <transition name="slide-fade">
    <b-container
      id="front-page"
      fluid
      class="front-page"
      @click="onClickOfFrontElement()"
      v-if="showFrontElement"
    >
      <b-row class="main-front-row-2 centrify"> {{ currentHello }} </b-row>
      <b-row class="main-front-row-1 dan-logo centrify" v-if="showFront">
        <i class="fas fa-terminal" id="front-logo" />dan
      </b-row>
      <!-- <img class="front-bg-image centrify" :src="bgImage" alt="" /> -->
      <canvas id="canv"> </canvas>
    </b-container>
  </transition>
</template>

<script>
let hellos = [
  "Hello",
  "Kumusta",
  "你好",
  "今日は",
  "안녕하세요",
  "Bonjour",
  "Hola",
];
export default {
  name: "TheFront",
  components: {},
  data() {
    return {
      showFrontElement: true,
      helloArray: hellos,
      currentHello: hellos[Math.floor(Math.random() * 7)],
      bgImage: require("@/assets/background/front_element_bg.jpg"),
      showFront: true,
    };
  },
  methods: {
    onClickOfFrontElement() {
      this.showFrontElement = false;
      this.$router.push("/home", () => {});
      this.selectHelloRandomly();
    },
    selectHelloRandomly() {
      const randomNumber = Math.floor(Math.random() * 7);
      return this.helloArray[randomNumber];
    },
  },
  created() {
    setInterval(() => {
      this.currentHello = this.selectHelloRandomly();
    }, 3000);

    setInterval(() => {
      this.showFront = !this.showFront;
    }, 750);

    this.$router.push("/home");
  },
  mounted() {
    const canvas = document.getElementById("canv");
    const ctx = canvas.getContext("2d");

    const w = (canvas.width = document.body.offsetWidth);
    const h = (canvas.height = document.body.offsetHeight);

    const cols = Math.floor(w / 20) + 1;
    const ypos = Array(cols).fill(0);

    ctx.fillStyle = "#000";
    ctx.fillRect(0, 0, w, h);
    let letters = ["d", "a", "n", "_", ">"];
    function matrix() {
      ctx.fillStyle = "#0001";
      ctx.fillRect(0, 0, w, h);

      ctx.fillStyle = "#66fcf1c0";
      ctx.font = "10pt monospace";

      ypos.forEach((y, ind) => {
        // const text = String.fromCharCode(Math.random() * 128);
        const text = letters[Math.floor(Math.random() * 5)];
        // const text = ">_dan";
        const x = ind * 20;
        ctx.fillText(text, x, y);
        if (y > 100 + Math.random() * 10000) {
          ypos[ind] = 0;
        } else {
          ypos[ind] = y + 20;
        }
      });
    }

    setInterval(matrix, 50);
  },
};
</script>
<style scoped>
* {
  z-index: 10;
}

@font-face {
  font-family: "Arial Hollow";
  src: url("../../assets/font/Arialic Hollow.ttf");
}
.front-page {
  position: absolute;
  top: 0px;
  left: 0px;
  height: 100vh;
  font-family: "Roboto", sans-serif;
  /* font-family: "Arial Hollow", sans-serif; */
  font-size: 15vw;
  background-color: #0b0c1000;
  /* mask-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 1) 89%,
    transparent 100%
  ); */
  z-index: 501;
  color: #66fcf2;
  /* text-shadow: 0px 0px 2px red; */
  overflow: hidden;
}
.front-bg-image {
  position: absolute;
  width: 100vw;
  height: 100vh;
  opacity: 0.1;
  overflow: hidden;
  background-size: contain;
}

.slide-fade-leave-active {
  transition: all 0.75s;
}
.slide-fade-enter,
.slide-fade-leave-to {
  /* transform: translateY(-100vh); */
  /* transform: scale(0.8); */
  opacity: 0;
}

.main-front-row-1 {
  position: absolute;
  width: 100vw;
  height: 45vh;
  margin: 0px;
  padding: 0px;
  z-index: 500;
  font-size: 5vw;
  top: 20vw;
}
.main-front-row-2 {
  position: absolute;
  width: 100vw;
  height: 45vh;
  margin: 0px;
  margin-top: 10vh;
  z-index: 500;
  padding: 0px;
}

#front-logo {
  margin: 0px;
  padding: 0px;
  width: auto;
}

.hide {
  display: none;
}
#canv {
  background: rgba(168, 79, 79, 0);
  position: absolute;
  left: 0px;
  top: 0px;
  height: 100vh;
  width: 100vw;
  z-index: 499;
}
@media only screen and (max-width: 500px) {
  .main-front-row-2 {
    margin-top: 30vh;
    font-size: 19.5vw;
    margin-left: -2vw;
  }

  .main-front-row-1 {
    height: 0vh;
    margin-top: 48vh;
    margin-left: -2vw;
    font-size: 8vw;
  }
}
</style>
