<template>
  <b-container fluid>
    {{ isLinkClicked() }}
    <i
      id="icon-span"
      :class="{
        fas: true,
        'fa-chevron-circle-right': !isHeaderTabOpen,
        'fa-times-circle': isHeaderTabOpen,
        'icon-open': isHeaderTabOpen,
        'icon-span-open': isHeaderTabOpen,
        'icon-close': !isHeaderTabOpen,
        'icon-span': !isHeaderTabOpen,
      }"
      @click="
        clickHeaderTab();
        $emit('header-tab', isHeaderTabOpen);
      "
    ></i>
    <svg viewBox="0 0 305 100" class="svg-all">
      <path
        fill-opacity="1"
        d="M 0 0 C 0 100 0 100 50 100 A 50 50 0 1 1 50 200 C 0 200 0 250 0 300 "
        :class="{ 'svg-hide': isHeaderTabOpen, svg: true }"
        @click="
          clickHeaderTab();
          $emit('header-tab', isHeaderTabOpen);
        "
      ></path>
    </svg>
    <!-- <span
      id="header-tab"
      @click="
        clickHeaderTab();
        $emit('header-tab', isHeaderTabOpen);
      "
      :class="{
        'close-span': !isHeaderTabOpen,
        'open-span': isHeaderTabOpen,
        centrify: true,
      }"
    >
      <i
        id="icon-span"
        :class="{
          fas: true,
          'fa-chevron-circle-right': !isHeaderTabOpen,
          'fa-times-circle': isHeaderTabOpen,
          'icon-open': isHeaderTabOpen,
          'icon-close': !isHeaderTabOpen,
        }"
      ></i>
    </span> -->
  </b-container>
</template>

<script>
export default {
  name: "TheHeaderTab",
  components: {},
  props: ["isOpen"],
  data() {
    return {
      isHeaderTabOpen: false,
    };
  },
  methods: {
    clickHeaderTab() {
      this.isHeaderTabOpen = !this.isHeaderTabOpen;
    },
    isLinkClicked() {
      if (!this.isOpen) {
        this.isHeaderTabOpen = false;
      }
    },
  },
};
</script>

<style scoped>
.svg-all {
  position: fixed;
  left: 0px;
  top: -100px;
  z-index: 499;
  width: 150px;
  height: 200px;
}

.svg {
  position: fixed;
  left: 0px;
  z-index: 499;
  fill: var(--header-base);
  transition: all 0.5s ease;
  stroke: var(--header-color);
  opacity: 0.7;
  backdrop-filter: blur(25px);
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

.svg-hide {
  transition: all 0.5s ease;
  transform: translateX(-200px);
}
/* #header-tab {
  position: fixed;
  top: 2vh;
  left: 20vh;
  height: 5vh;
  font-size: 20px;
  z-index: 500;
} */

#icon-span {
  position: fixed;
  transition: all 0.5s ease;
  z-index: 500;
  color: var(--header-color);
}

.icon-span {
  left: 18px;
  top: 42px;
}

.icon-span-open {
  left: 150px;
  top: 35px;
}

#icon-span:hover {
  transition: all 0.5s ease;
  transform: scale(1.3);
}

.icon-open {
  transform: rotate(-180deg);
}

.icon-close {
  transform: rotate(0deg);
}
.open-span {
  width: 5vh;
  background-color: var(--header-color);
  border: solid 1px var(--header-base);
  color: var(--header-base);
  border-top-right-radius: 50px;
  border-bottom-right-radius: 50px;
  border-top-left-radius: 50px;
  border-bottom-left-radius: 50px;
  transition: all 0.5s ease, border-radius 0.5s ease;
}

.close-span {
  width: 8vh;
  border-top-right-radius: 50px;
  border-bottom-right-radius: 50px;
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
  transform: translateX(-20vh);
  background-color: var(--header-base);
  color: var(--header-color);
  border: solid 1px var(--header-color);
  border-left: none;
  transition: all 0.5s ease, border-radius 2.25s ease;
}

@media only screen and (max-width: 500px) {
  .close-span {
    width: 5vh;
  }
}
</style>
