<template>
  <b-row class="game-front centrify">
    <game-front-body></game-front-body>
  </b-row>
</template>

<script>
// @ is an alias to /src
import GameFrontBody from "@/components/GameFront/GameFrontBody.vue";
export default {
  name: "GameFront",
  components: {
    GameFrontBody,
  },
  mounted() {
    this.$store.commit("changeHeaderColor", "black");
    this.$store.commit("changeHeaderBase", "white");
    this.$store.commit("changeHeaderBorder", "white");
    this.$store.commit("setShowToTop", false);
  },
};
</script>
<style scoped>
.game-front {
  height: 100vh;
  background-color: var(--header-color);
  color: var(--header-base);
}
</style>
