<template>
  <b-container fluid id="nav" :class="{ 'open-header': !checkIfOpen }">
    {{ fromPropsIsOpen(isOpen) }}
    <span>
      <b-row @click="onClickLink()">
        <router-link to="/home" class="nav-home"
          ><i class="fas fa-home"></i> Home</router-link
        >
        <router-link to="/about"><i class="fas fa-user"></i> About</router-link>
        <router-link to="/projects/oli"
          ><i class="fas fa-heart" style="color: red"></i> &nbsp;<b
            >For Oli</b
          ></router-link
        >
      </b-row>

      <b-row
        @mouseenter="isSubHeaderClicked = true"
        @mouseleave="isSubHeaderClicked = false"
        class="side-proj-all"
      >
        <!-- <div
          :class="{
            'sub-header': true,
            c1: !isSubHeaderClicked,
            c2: isSubHeaderClicked,
          }"
          @click="clickSubHeader()"
        > -->
        <div
          :class="{
            'sub-header': true,
            c1: !isSubHeaderClicked,
            c2: isSubHeaderClicked,
          }"
        >
          Side Projects &nbsp;&nbsp;<i
            :class="{
              fas: true,
              'fa-caret-right': !isSubHeaderClicked,
              'fa-caret-down': isSubHeaderClicked,
            }"
          />
        </div>
        <b-row @click="onClickLink()" :class="{ hide: !isSubHeaderClicked }">
          <!-- <router-link to="/projects/oli"
            ><i class="fas fa-heart" style="color: red"></i> <b>For
            Oli</b></router-link
          > -->
          <router-link to="/projects/data_science"
            ><i class="fas fa-chart-bar"></i> Data Science</router-link
          >
          <router-link to="/projects/artworks" @click="onClickLink()">
            <i class="fas fa-paint-brush" /> Artworks</router-link
          >

          <router-link to="/projects/pokemon"
            ><i class="fas fa-dragon"></i> Pokemon</router-link
          >
          <router-link to="/projects/drumkit"
            ><i class="fas fa-drum"></i> Drum Kit</router-link
          >
          <router-link to="/projects/todo"
            ><i class="fas fa-tasks"></i> ToDo.</router-link
          >

          <router-link to="/projects/gamefront"
            ><i class="fas fa-gamepad"></i> Game Front</router-link
          >
          <!-- <a href="https://todo-app-dan.herokuapp.com/" target="_blank"
            ><i class="fas fa-tasks"></i> ToDo. (x)</a
          > -->
          <!-- <a href="/reiniel-dan/gamefront/index.html" target="_blank"
            ><i class="fas fa-gamepad"></i> Game Front (x)</a
          > -->
        </b-row>
      </b-row>
    </span>
  </b-container>
</template>

<script>
export default {
  name: "TheHeader",
  props: ["isOpen"],
  data() {
    return {
      checkIfOpen: false,
      isSubHeaderClicked: false,
    };
  },
  components: {},
  methods: {
    onClickLink() {
      this.fromPropsIsOpen(false);
      this.$emit("header", false);
      this.isSubHeaderClicked = false;
    },
    fromPropsIsOpen(val) {
      this.checkIfOpen = val;
    },
    clickSubHeader() {
      this.isSubHeaderClicked = !this.isSubHeaderClicked;
    },
  },
  computed: {},
};
</script>

<style scoped>
#nav {
  position: fixed;
  left: 0px;
  top: 20px;
  height: 100vh;
  width: 25vh;
  padding: 0px;
  background-color: var(--header-base);
  border-top-right-radius: 20px;
  border-left: transparent;
  transition: transform 0.5s;
  overflow: hidden;
  font-size: 0.85rem;
  transition: all 0.5s ease;
  z-index: 499;
  opacity: 0.9;
  backdrop-filter: blur(25px);
  box-shadow: 0px 0px 2px var(--header-border);
}
.nav-home {
  padding-top: 20px;
}

a {
  color: var(--header-color);
  text-decoration: none;
  transition: font-size 0.5s;
  padding: 10px;
  /* border-bottom: 0.1px solid var(--header-color); */
}

.sub-header {
  text-decoration: none;
  padding: 5px;
  transition: all 0.5s ease;
  margin: 0px;
  border-top: 0.1px solid var(--header-color);
}
.side-proj-all,
div.row {
  margin: 0px;
  padding: 0px;
}
.sub-header:hover {
  transition: all 0.5s ease;
  font-size: 90%;
  /* border-bottom: 0.1px solid var(--header-color); */
}
.c1 {
  color: var(--header-color);
  transition: all 0.5s ease;
  background: var(--header-base);
}

.c2 {
  transition: all 0.5s ease;
  background: var(--header-color);
  color: var(--header-base);
}
.hide {
  display: none;
  transition: all 0.5s ease;
}
a:hover,
a:active {
  background-color: var(--header-color);
  color: var(--header-base);
  font-size: 120%;
  transition: font-size 0.5s;
}

.open-header {
  transition: transform 0.5s;
  transform: translateX(-26vh);
}

@media only screen and (max-width: 500px) {
  #nav {
    font-size: 0.8rem;
    width: 23vh;
  }
}
</style>
