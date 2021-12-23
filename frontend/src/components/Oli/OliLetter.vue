<template>
  <b-row :class="{ centrify: true, 'red-filter': beginAgain }">
    <b-col class="centrify">
      <b-row class="centrify">
        <!-- <button @click="printer(poem_lines)">Printer</button> -->
        <!-- <button @click="stoper()">Stoper</button> -->
        <p
          v-html="paper"
          id="paper"
          :class="{ 'red-paper': beginAgain, 'blue-paper': !beginAgain }"
        ></p>
      </b-row>
    </b-col>
    <transition name="fade">
      <b-row class="centrify" v-if="showPics">
        <b-col class="centrify">
          <a :href="afterPicGet('oli_art.png')" target="_blank">
            <img :src="afterPicGet('oli_art.png')" alt="" class="after-pic"
          /></a>
        </b-col>
        <b-col class="centrify">
          <a :href="afterPicGet('oli_pkmn.png')" target="_blank">
            <img :src="afterPicGet('oli_pkmn.png')" alt="" class="after-pic"
          /></a>
        </b-col>
        <b-col class="centrify">
          <a :href="afterPicGet('oli_day.png')" target="_blank">
            <img :src="afterPicGet('oli_day.png')" alt="" class="after-pic"
          /></a>
        </b-col>
        <b-col class="centrify">
          <a :href="afterPicGet('oli_night.png')" target="_blank">
            <img :src="afterPicGet('oli_night.png')" alt="" class="after-pic"
          /></a>
        </b-col>
        <!-- <b-col class="centrify">
          <a :href="afterPicGet('oli_letter.png')" target="_blank">
            <img :src="afterPicGet('oli_letter.png')" alt="" class="after-pic"
          /></a>
        </b-col> -->
      </b-row>
    </transition>
  </b-row>
</template>

<script>
export default {
  name: "OliLetter",
  components: {},
  data() {
    return {
      isTYLPlaying: false,
      isBeginAgainPlaying: false,
      test: "etat agegeg agaewgaeg....",
      after_pics: [
        "oli_pkmn.png",
        "oli_day.png",
        "oli_night.png",
        "oli_letter.png",
      ],
      poem_lines: `
<h1><br/><b>2-2-3</b></h1><br/>
by Dan <br/>
• • • <br/>
<b>J</b>aded eyes and a silver smile were left when the sun met the wings near sadness avenue <br/>
<b>O</b>bsidian tears seep while cold and barren memories protect from what once a warm ruby heart <br/>
<b>H</b>ellos and farewells; Good mornings and good nights; small exchanges show a future with you <br/>
<b>N</b>ever have I thought that my solid-frozen self would melt quick from the vibrance your love sparked <br/>
• • • <br/>
<b>O</b>ctober drew fast after long winded days turned into snippets of new captured moments <br/>
<b>L</b>et my guard down after protecting myself for what seems another certain uncertainty <br/>
<b>I</b>nstilled my confines even after you showered me with sapphire kisses until the night ends <br/>
<b>V</b>iridian pride means nothing even after the vagueness I protect my wounds with, safely <br/>
<b>E</b>ach day, good mornings and nights; little by little, your loving soul embracing what's left of mine <br/>
<b>R</b>eminding me each minute passed I am worth to keep, before after begins and ends in time <br/>
• • • <br/>
<b>M</b>aybe we began unprepared; maybe we started strong but, for you, what matters is us <br/>
<b>I</b>n the midst of this night flame, <u>Icarus</u> still fears flying too close with scars of present past burns <br/>
<b>C</b>old feet and cowardice cinder the chances to return your warmth, clouded by impulsive buts <br/>
<b>U</b>nprepared; I came out strong; I lost you along the way; with my words your healing heart hurts <br/>
<b>A</b>nd in the end, I learned late I, too, love you; <u>Losing you is losing myself too, Oli</u> <br/>
• • • <br/>
<br>
<u><b>D</b>iamonds and more is who you truly are</u>;</b> think not less than the constellation you are to me <br/>
<b>A</b>nd with a hastened snap, just like that, I lost the lumen that lit this lonely boulevard <br/>
<b>N</b>ot a single tear left unheard; <u>I miss you, and I know, now, what you mean to me</u>; can we... <br/><br/>
<p style='color:#c21807'>...begin again?</p> <br/> - - - - - <br/>
Here's a little gift I made for you...
<br/>`,
      paper: "",
      timer: null,
      tyl: null,
      begin_again: null,
      showPics: false,
      i: -1,
    };
  },
  methods: {
    afterPicGet(pic) {
      return require("@/assets/oli/" + pic);
    },
    printer(line) {
      // line = line + "<br/>";
      // this.stoper();
      let i = -1;
      this.timer = setInterval(() => {
        // this.i++;
        i++;
        const x = i % line.length;
        this.paper += line[x];
        let audio = new Audio(require("@/assets/oli/keystroke.mp3"));
        audio.volume = 0.02;
        audio.play();
        // }, 10);
      }, Math.random() * (150 - 70) + 70);
      // }, Math.random() * 120);
      // this.tyl.pause();
      // this.playBeginAgain();
    },
    stoper() {
      clearInterval(this.timer);
      this.paper = "";
    },
    playTYL() {
      if (this.isTYLPlaying === false) {
        this.tyl = new Audio(require("@/assets/oli/tyl.mp3"));
        this.tyl.play();
        this.isTYLPlaying = true;
      }
    },
    playBeginAgain() {
      if (this.isBeginAgainPlaying === false) {
        this.begin_again = new Audio(require("@/assets/oli/begin_again.mp3"));
        this.begin_again.play();
        this.isBeginAgainPlaying = true;
      }
    },
  },
  computed: {
    beginAgain() {
      return this.$store.state.beginAgain;
    },
  },
  watch: {
    paper: function () {
      let ln = `<h3 style='color:#c21807'>I love you ❤</h3>`;
      if (this.paper.length + 40 === this.poem_lines.length) {
        this.playBeginAgain();
        this.$store.commit("setBeginAgain");
        this.$store.commit("changeHeaderColor", "#fa8072");
        this.$store.commit("changeHeaderBase", "#c21807");
        this.$store.commit("changeHeaderBorder", "#fa8072");
      }
      if (this.paper.length === this.poem_lines.length) {
        // this.paper = "";
        clearInterval(this.timer);
        this.printer(ln);
      }
      if (this.paper.length === this.poem_lines.length + ln.length) {
        this.showPics = true;
        clearInterval(this.timer);
      }
    },
  },
  mounted() {
    this.playTYL();
    this.printer(this.poem_lines);
  },
};
</script>

<style scoped>
@font-face {
  font-family: "Typewriter";
  /* src: url("../../assets/font/JMH Typewriter.otf"); */
  src: url("../../assets/font/JMH Typewriter.otf");
}
#paper {
  font-family: "Typewriter";
  backdrop-filter: blur(20px);
  color: rgb(1, 12, 37);
  width: 80vw;
  padding: 20px;
}
.red {
  color: #c21807;
}
.blue-paper {
  background: rgba(201, 227, 252, 0.75);
}
.red-paper {
  background: rgba(250, 192, 213, 0.75);
}
.red-filter {
  position: fixed;
  left: 0px;
  top: 0px;
  height: 100vh;
  width: 100vw;
  margin: 0px;
  padding: 0px;
  z-index: 2;
  overflow-y: auto;
  background: rgba(255, 0, 0, 0.219);
}

.after-pic {
  width: 20vw;
  height: auto;
  cursor: pointer;
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
  #paper {
    font-size: 1.87vw;
    padding: 1px;
    padding-bottom: 20px;
    width: 97vw;
  }

  .after-pic {
    width: 90vw;
    margin: 20px 0px;
  }
}
</style>
