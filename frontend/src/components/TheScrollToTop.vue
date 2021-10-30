<template>
  <div id="to-top" @click="onClickToTop()">
    <div id="to-top-component">
      <i class="fas fa-angle-up scroll-icon"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheScrollToTop",
  components: {},
  methods: {
    onClickToTop() {
      // alert("OK");
      // this.$el.scrollTo(0, 0);
      // scrollBy(0, -101000);
      window.scrollTo(0, 0);
    },
  },
};
</script>

<style scoped>
#to-top {
  position: absolute;
  bottom: 1vw;
  right: 1vw;
  padding: 0px;
  margin: 0px;
  font-size: 25px;
  width: 40px;
  height: 40px;
  border-radius: 50px;
  background: var(--header-color);
  color: var(--header-base);
  border: 1px solid var(--header-base);
  z-index: 100;
}
</style>
