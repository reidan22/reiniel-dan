<template>
  <b-row class="todo centrify">
    <to-do-body></to-do-body>
  </b-row>
</template>

<script>
// @ is an alias to /src
import ToDoBody from "@/components/ToDo/ToDoBody.vue";
export default {
  name: "ToDo",
  components: {
    ToDoBody,
  },
  mounted() {
    this.$store.commit("changeHeaderColor", "#c2c2c2");
    this.$store.commit("changeHeaderBase", "rgb(50, 66, 50)");
    this.$store.commit("changeHeaderBorder", "rgb(50, 66, 50)");
    this.$store.commit("setShowToTop", false);
  },
};
</script>
<style scoped>
.todo {
  height: 100vh;
  background-color: var(--header-color);
  color: var(--header-base);
}
</style>
