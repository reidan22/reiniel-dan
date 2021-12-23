<template>
  <b-row class="home centrify">
    <oli-body></oli-body>
    <oli-back-ground></oli-back-ground>
  </b-row>
</template>

<script>
// @ is an alias to /src
import OliBody from "@/components/Oli/OliBody";
import OliBackGround from "@/components/Oli/OliBackGround";

export default {
  name: "Home",
  components: {
    OliBody,
    OliBackGround,
  },
  mounted() {
    this.$store.commit("changeHeaderColor", "#14719f");
    this.$store.commit("changeHeaderBase", "#bddce3");
    this.$store.commit("changeHeaderBorder", "#14719f");
    this.$store.commit("setShowToTop", false);
  },
};
</script>
<style scoped>
.home {
  height: 100vh;
  /* background-color: var(--header-base); */
  /* background-color: var(--header-base); */
  background: rgb(1, 12, 37);
  color: var(--header-color);
}
</style>
