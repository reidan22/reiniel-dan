<template>
  <b-row class="is_fraud">
    <base-data-science-slide
      :slide="slide"
      v-for="slide in slides"
      :key="slide.key"
      folder="spotify/"
    ></base-data-science-slide>
    <b-row class="footer"></b-row>
  </b-row>
</template>

<script>
import BaseDataScienceSlide from "@/components/BaseDataScienceSlide";
import Slides from "@/assets/datascience/json/spotifyList.json";
export default {
  name: "DataScienceSpotify",
  components: {
    BaseDataScienceSlide,
  },
  data() {
    return {
      slides: Slides,
    };
  },
  mounted() {
    this.$store.commit("changeHeaderColor", "#d98484");
    this.$store.commit("changeHeaderBorder", "#d98484");
    this.$store.commit("changeHeaderBase", "#2a315f");
  },
  beforeRouteLeave(to, from, next) {
    this.$store.commit("changeHeaderBase", "black");
    this.$store.commit("changeHeaderBorder", "black");
    this.$store.commit("changeHeaderColor", "white");
    next();
  },
};
</script>

<style scoped>
.is_fraud {
  overflow-y: auto;
  overflow-x: hidden;
  height: 100vh;
}

.footer {
  height: 15vh;
}
</style>
