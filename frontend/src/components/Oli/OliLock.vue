<template>
  <b-row class="oli-body centrify">
    <div
      class="oli-clue centrify"
      v-if="displayHint"
      @click="displayHint = false"
    >
      <p class="oli-clue-details">
        (000 ~ 999) <br />
        clues: <br />
        • letter V union W <br />
        • it is in the link of EEvee and chikorita<br />
        • my + yOUR cusp <br />
      </p>
    </div>
    <b-row class="oli-hint centrify text-glow">
      Unlock with a 3-digit code &nbsp; &nbsp;<i
        class="fas fa-info-circle oli-hint-icon"
        @click="displayHint = true"
      ></i
    ></b-row>
    <b-row class="oli-lock centrify text-glow">
      <b-col
        :class="{ lock: true, centrify: true, unlock: unlock }"
        @click="
          lockA = (lockA + 1) % 10;
          playStroke();
        "
        >{{ lockA }}</b-col
      >
      <b-col
        :class="{ lock: true, centrify: true, unlock: unlock }"
        @click="
          lockB = (lockB + 1) % 10;
          playStroke();
        "
        >{{ lockB }}</b-col
      >
      <b-col
        :class="{ lock: true, centrify: true, unlock: unlock }"
        @click="
          lockC = (lockC + 1) % 10;
          playStroke();
        "
        >{{ lockC }}</b-col
      >
    </b-row>
    <b-row class="lock-open centrify">
      <i class="fas fa-lock-open" v-if="unlock" @click="unlockOliPage()"></i>
      <i class="fas fa-lock" v-else></i>
    </b-row>
  </b-row>
</template>

<script>
export default {
  name: "OliBody",
  components: {},
  data() {
    return {
      lockA: 0,
      lockB: 0,
      lockC: 0,
      displayHint: false,
    };
  },
  methods: {
    unlockOliPage() {
      this.$store.commit("setIsOliPageUnlocked");
    },
    playStroke() {
      let audio = new Audio(require("@/assets/oli/keystroke.mp3"));
      let audio_unlock = new Audio(require("@/assets/oli/unlock.mp3"));
      audio.volume = 0.05;
      audio_unlock.volume = 0.2;
      audio.play();
      if (this.unlock) {
        audio_unlock.play();
      }
    },
  },

  computed: {
    unlock() {
      return this.lockA === 2 && this.lockB === 2 && this.lockC === 3;
    },
  },
};
</script>

<style scoped>
.oli-body {
  position: absolute;
  color: #0f3860;
  z-index: 1;
}
.oli-lock {
  background: #0f386022;
  backdrop-filter: blur(30px);

  width: 75vw;
  height: 50vh;
  box-shadow: 0px 0px 10px rgb(16, 26, 61);
  border-radius: 30px;
}

.lock {
  border-radius: 30px;
  /* background: var(--header-base); */
  color: var(--header-base);
  /* background: var(--header-color); */
  /* backdrop-filter: blur(50px); */
  margin: 10px 10px;
  height: 40vh;
  font-size: 15vw;
  cursor: pointer;
}
.unlock {
  /* background: #72727244; */
  /* backdrop-filter: blur(25px); */
  color: gold;
  text-shadow: 0px 0px 20px gold;
  border: 2px solid transparent;
}
.lock-open {
  border-radius: 0px;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  /* background: #0f3860; */
  background: #0f386022;
  backdrop-filter: blur(25px);
  color: gold;
  height: auto;
  width: 40vw;
  font-size: 5vw;
  cursor: pointer;
  box-shadow: 0px 0px 10px rgb(16, 26, 61);
  padding: 20px;
}

.oli-hint {
  background: #0f386022;
  width: 80vw;
  padding: 10px 30px;
  margin: 10px 30px;
  font-size: 50px;
  backdrop-filter: blur(25px);
  color: var(--header-base);
  border-radius: 20px;
}

.oli-hint-icon {
  margin: 0px;
  padding: 0px;
  width: 0px;
  font-size: 50%;
  cursor: pointer;
}

.oli-clue {
  position: fixed;
  left: 0px;
  top: 0px;
  width: 100vw;
  height: 100vh;
  background: rgba(3, 73, 131, 0.85);
  z-index: 2;
  font-size: 1.5vw;
  color: var(--header-base);
}

@media only screen and (max-width: 500px) {
  .oli-lock {
    width: 95vw;
    height: 30vh;
  }

  .lock {
    margin: 5px 5px;
    height: 25vh;
    font-size: 25vw;
  }

  .lock-open {
    font-size: 15vw;
  }

  .oli-hint {
    width: 90vw;
    font-size: 20px;
    backdrop-filter: blur(35px);
  }

  .oli-hint-icon {
    font-size: 100%;
  }

  .oli-clue {
    font-size: 5vw;
  }
}
</style>
