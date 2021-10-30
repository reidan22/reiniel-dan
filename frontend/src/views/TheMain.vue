<template>
  <b-container fluid id="main">
    <a href="#">
      <the-scroll-to-top></the-scroll-to-top>
      <span id="header-all" v-click-outside="onClickOutsideHeader">
        <the-header-tab
          @header-tab="isHeaderTabOpen"
          :isOpen="receivedIsTabOpen"
        ></the-header-tab>
        <the-header
          @header="closeHeaderTab"
          :isOpen="receivedIsTabOpen"
        ></the-header>
        <!-- <the-footer></the-footer> -->
      </span>
    </a>
    <transition name="fade">
      <the-body></the-body>
    </transition>
  </b-container>
</template>

<script>
import TheHeaderTab from "@/components/TheHeaderTab.vue";
import TheHeader from "@/views/TheHeader.vue";
import TheBody from "@/views/TheBody.vue";
import TheFooter from "@/views/TheFooter.vue";
import TheScrollToTop from "@/components/TheScrollToTop.vue";
export default {
  name: "TheMain",
  components: {
    TheHeader,
    TheBody,
    TheHeaderTab,
    // TheFooter,
    TheScrollToTop,
  },
  data() {
    return {
      receivedIsTabOpen: false,
    };
  },
  methods: {
    isHeaderTabOpen(isTabOpen) {
      this.receivedIsTabOpen = isTabOpen;
    },
    closeHeaderTab(fromEmit) {
      this.receivedIsTabOpen = fromEmit;
    },
    onClickOutsideHeader() {
      this.receivedIsTabOpen = false;
    },
  },
};
</script>
<style scoped>
#main {
  width: 100vw;
  height: 100vh;
  margin: 0px;
  padding: 0px;
}

#header-all {
  margin: 0px;
  padding: 0px;
}
</style>
