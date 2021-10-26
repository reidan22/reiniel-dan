<template>
  <b-container fluid class="centrify">
    <b-row> </b-row>
  </b-container>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
  mounted() {
    this.$store.commit("changeHeaderColor", "#66fcf1");
    this.$store.commit("changeHeaderBase", "#0b0c10a2");
  },
};
</script>
