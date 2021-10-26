<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$store.commit("changeHeaderColor", "#66fcf1");
    this.$store.commit("changeHeaderBase", "#0b0c10a2");
  },
};
</script>
