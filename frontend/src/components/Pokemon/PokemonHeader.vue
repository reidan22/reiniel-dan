<template>
  <b-row class="pkmn-header centrify" v-if="isLoaded">
    Poképedia
    <h5>Pokemon Encylopedia v0.1a</h5>
  </b-row>
  <b-row class="pkmn-header centrify" v-else>Loading...</b-row>
</template>

<script>
export default {
  name: "PokemonHeader",
  components: {},
  computed: {
    isLoaded() {
      return this.$store.state.pkmnPageIsLoaded;
    },
  },
};
</script>
<style scoped>
.pkmn-header {
  width: 100vw;
  height: auto;
  font-size: 10vw;
}
</style>
