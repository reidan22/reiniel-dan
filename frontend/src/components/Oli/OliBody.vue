<template>
  <b-row class="oli-body centrify">
    <transition name="fade">
      <oli-lock v-if="isPageUnlocked === false" key="lock"></oli-lock>
      <b-row
        class="oli-warn centrify"
        v-else-if="warning === true"
        @click="warning = false"
      >
        <b-row class="centrify warn-text"
          >Songs will play.<br />
          Please wear earphones to listen.<br />
          Click to proceed.</b-row
        >
        <b-row><i class="fas fa-headphones-alt warn-icon"></i></b-row>
      </b-row>
      <oli-letter v-else></oli-letter>
    </transition>
  </b-row>
</template>

<script>
import OliLock from "@/components/Oli/OliLock";
import OliLetter from "@/components/Oli/OliLetter";
export default {
  name: "OliBody",
  components: {
    OliLock,
    OliLetter,
  },
  data() {
    return {
      isTYLPlaying: false,
      isBeginAgainPlaying: false,
      poem_lines:
        "Jaded eyes and a silver smile were left when the sun met the wings near sadness avenue",
      paper: "",
      timer: null,
      warning: true,
    };
  },
  methods: {
    printer() {
      this.stoper();
      let i = -1;
      let audio = null;
      this.timer = setInterval(() => {
        audio = new Audio(require("@/assets/oli/keystroke.mp3"));
        i++;
        const x = i % this.poem_lines.length;
        this.paper += this.poem_lines[x];
      }, 150);
    },
    stoper() {
      clearInterval(this.timer);
      this.paper = "";
    },
    playTYL() {
      if (this.isTYLPlaying === false) {
        new Audio(require("@/assets/oli/tyl.mp3")).play();
        this.isTYLPlaying = true;
      }
    },
    playBeginAgain() {
      if (this.isBeginAgainPlaying === false) {
        new Audio(require("@/assets/oli/begin_again.mp3")).play();
        this.isBeginAgainPlaying = true;
      }
    },
  },
  watch: {
    paper: function () {
      if (this.paper.length === this.poem_lines.length) {
        // this.paper = "";
      }
    },
  },
  mounted() {},
  computed: {
    isPageUnlocked() {
      return this.$store.state.isOliPageUnlocked;
    },
  },
};
</script>

<style scoped>
.oli-body {
  /* background: rgb(1, 12, 37); */
  position: absolute;
  color: #0f3860;
  z-index: 1;
}

.oli-warn {
  position: relative;
  top: 0px;
  left: 0px;
  width: auto;
  height: 70vh;
  background: #0f3860ee;
  color: var(--header-base);
  border-radius: 30px;
  cursor: pointer;
}

.warn-text {
  font-size: 2vw;
}
.warn-icon {
  font-size: 15vw;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease;
}

.fade-enter,
.fade-leave-active {
  transform: scale(0.5);
  opacity: 0;
}

@media only screen and (max-width: 500px) {
  .oli-warn {
    height: 30vh;
  }

  .warn-text {
    font-size: 5vw;
  }
  .warn-icon {
    font-size: 30vw;
  }
}
</style>
