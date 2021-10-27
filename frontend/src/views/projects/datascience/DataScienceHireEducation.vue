<template>
  <b-row class="is_fraud">
    <base-data-science-slide
      :slide="slide"
      v-for="slide in slides"
      :key="slide.key"
      folder="hire_education/"
    ></base-data-science-slide>
    <b-row class="footer"></b-row>
  </b-row>
</template>

<script>
import BaseDataScienceSlide from "@/components/BaseDataScienceSlide";
import Slides from "@/assets/datascience/json/hireEducationList.json";
export default {
  name: "DataScienceHireEducation",
  components: {
    BaseDataScienceSlide,
  },
  data() {
    return {
      slides: Slides,
    };
  },
  mounted() {
    this.$store.commit("changeHeaderBase", "#3d2f30");
    this.$store.commit("changeHeaderColor", "#e2c0b5");
  },
  beforeRouteLeave(to, from, next) {
    this.$store.commit("changeHeaderBase", "black");
    this.$store.commit("", "white");
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
