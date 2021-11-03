<template>
  <b-row
    class="pkmn-data centrify"
    v-if="isPkmnDataPageShown === true"
    id="pkmnData"
  >
    {{ pkmn }}
    {{ fetchedInfo.sprites }}
  </b-row>
</template>

<script>
export default {
  name: "PokemonDataPage",
  props: ["pkmn"],
  components: {},
  data() {
    return {
      info: null,
    };
  },
  mounted() {
    this.$store.commit("setShowPkmnDataPage", true);
    fetch("https://pokeapi.co/api/v2/pokemon/" + this.pkmn)
      .then((res) => res.json())
      .then((data) => {
        // this.info = data
        let abilities = data.abilities;
        let base_exp = data.base_experience;
        let height = data.height;
        let moves = data.moves;
        let sprites = data.sprites;
        let stats = data.stats;
        let types = data.types;
        this.info = {
          abilities: abilities,
          base_exp: base_exp,
          height: height,
          moves: moves,
          sprites: sprites,
          stats: stats,
          types: types,
        };
      });
  },
  beforeRouteLeave(to, from, next) {
    this.$store.commit("setShowPkmnDataPage", false);

    next();
  },
  computed: {
    isPkmnDataPageShown() {
      return this.$store.state.showPkmnDataPage;
    },
    fetchedInfo() {
      return this.info;
    },
  },
};
</script>
<style scoped>
.pkmn-data {
  width: 90vw;
  height: 100vh;
  font-size: 1vw;
  background: pink;
}
</style>
