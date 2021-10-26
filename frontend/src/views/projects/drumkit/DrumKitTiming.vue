<template>
  <b-row id="drum-kit-timing">
    <b-col id="timing-title" cols="1" class="centrify">{{ sound.name }}</b-col>
    <b-col
      v-for="(timing, timingIndex) in sound.timing"
      :key="timingIndex"
      @click="toggleKey(timingIndex)"
      ><button
        :class="{
          'key-on': timing,
          'key-off': !timing,
          'highlight-button': timingIndex === getSecondsNow && timing,
          'highlight-gray-button': timingIndex === getSecondsNow && !timing,
        }"
      >
        {{ playSound(timingIndex, getSecondsNow, timing) }}
      </button></b-col
    >
  </b-row>
</template>

<script>
export default {
  name: "Template",
  props: ["sound"],
  data() {
    return {
      timeSeconds: null,
    };
  },
  methods: {
    toggleKey(timeIndex) {
      this.sound.timing[timeIndex] = !this.sound.timing[timeIndex];
      this.$forceUpdate();
    },
    playSound(timingIndex, getSecondsNow, timing) {
      if (timingIndex === getSecondsNow && timing) {
        new Audio(this.sound.audio).play();
      }
    },
  },
  computed: {
    getSecondsNow() {
      return this.$store.state.appTimeSeconds % 16;
    },
  },
};
</script>

<style scoped>
#drum-kit-timing {
  color: var(--header-base);
  font-size: 30%;
  margin-top: 2.5px;
}

#timing-title {
  width: 6vw;
  height: 2.5vw;
  background-color: rgb(241, 227, 188);
  border-radius: 10px;
  margin: 10px;
}

button {
  width: 4vw;
  height: 3.5vw;
  appearance: none;
  background: none;
  outline: none;
  border: none;
  cursor: none;
  border-radius: 7px;
  transition: all 0.5s ease;
}
button:hover {
  transition: all 0.5s ease;
  transform: scale(0.95);
}

.key-off {
  background-color: rgb(241, 227, 188);
  transition: all 0.5s ease;
}
.key-on {
  transition: all 0.5s ease;
  background-color: rgb(199, 162, 52);
}

.highlight-button {
  border: 4px solid rgb(201, 138, 1);
  transform: scale(1.1);
  transition: all 0.5s ease;
}

.highlight-gray-button {
  background-color: rgb(156, 156, 156);
  transform: scale(0.8);
  transition: all 0.5s ease;
}

@media only screen and (max-width: 500px) {
  div {
    margin: 0px;
    padding: 0px;
  }
  button {
    width: 10px;
    height: 50px;
    border-radius: 2px;
    margin: 0px;
    padding: 0px;
  }

  #timing-title {
    width: 5px;
    height: 5vh;
    font-size: 3vh;
    color: var(--header-base);
    background-color: transparent;
    border-radius: 2px;
    transform: rotate(-90deg);
  }
}
</style>
