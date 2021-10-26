<template>
  <b-container fluid id="drum-kit" class="centrify">
    <b-col>
      <drum-kit-header id="drim-kit-header" class="centrify"
        >Vue JS Mini DRUM KIT<i
          :class="{
            fas: true,
            'fa-drum': true,
            'tilt-left': mode,
            'tilt-right': !mode,
          }"
          @click="toggleMode()"
        ></i
      ></drum-kit-header>
      <drum-kit-body
        id="drum-kit-body"
        class="centrify"
        :mode="mode"
      ></drum-kit-body>
    </b-col>
  </b-container>
</template>

<script>
import DrumKitHeader from "./DrumKitHeader.vue";
import DrumKitBody from "./DrumKitBody.vue";
export default {
  name: "DrumKitMain",
  components: {
    DrumKitHeader,
    DrumKitBody,
  },
  data() {
    return { mode: true };
  },
  methods: {
    toggleMode() {
      this.mode = !this.mode;
    },
  },
  mounted() {
    this.$store.commit("changeHeaderColor", "#F1E3BC");
    this.$store.commit("changeHeaderBase", "#b3890d");
    this.$store.commit("toggleDrumKitDisplayed", true);
  },
  beforeRouteLeave(to, from, next) {
    this.$store.commit("toggleDrumKitDisplayed", false);
    next();
  },
  created() {
    setInterval(() => {
      let secondsNow = new Date().getTime() / 1000;
      this.$store.commit("countUpAppTimeSeconds", secondsNow);
    }, 1000);
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Cute+Font&family=Fira+Sans+Extra+Condensed:wght@100;200;800&display=swap");
#drum-kit {
  font-family: "Fira Sans Extra Condensed", sans-serif;
  font-size: 5vw;
  background-color: rgb(241, 227, 188);
  width: 100vw;
  height: 100vh;
  user-select: none;
  color: rgb(211, 172, 55);
}
.fas.fa-drum {
  width: auto;
}
#drum-kit-header {
  height: 7vh;
  font-size: 10vw;
}
#drum-kit-body {
  height: 80vh;
  margin: 10px;
  background-color: rgb(216, 194, 130);
  border-radius: 20px;
}

.tilt-left {
  transform: rotate(10deg);
  transition: all 0.5s ease;
}

.tilt-right {
  transform: rotate(-10deg);
  transition: all 0.5s ease;
}
</style>
