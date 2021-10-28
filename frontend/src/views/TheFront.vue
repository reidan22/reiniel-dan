<template>
  <transition name="slide-fade">
    <b-container
      id="front-page"
      fluid
      class="front-page centrify"
      @click="onClickOfFrontElement()"
      v-if="showFrontElement"
    >
      {{ currentHello }}!
      <!-- <img class="front-bg-image centrify" :src="bgImage" alt="" /> -->
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
    }, 5000);
  },
};
</script>
<style scoped>
* {
  z-index: 10;
}
.front-page {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 100vh;
  font-family: "Roboto", sans-serif;
  font-size: 15vw;
  background-color: #0b0c10;
  z-index: 501;
  color: #66fcf1;
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
  transition: all 1s;
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateY(-100vh);
  opacity: 0;
}
</style>
