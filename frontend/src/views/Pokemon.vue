<template>
  <b-row class="pokemon centrify">
    <pokemon-header />
    <pokemon-search-bar />
    <pokemon-logo></pokemon-logo>
    <pokemon-body />
  </b-row>
</template>

<script>
// @ is an alias to /src
import PokemonHeader from "@/components/Pokemon/PokemonHeader";
import PokemonSearchBar from "@/components/Pokemon/PokemonSearchBar";
import PokemonBody from "@/components/Pokemon/PokemonBody";
import PokemonLogo from "@/components/Pokemon/PokemonLogo";
export default {
  name: "Pokemon",
  components: {
    PokemonHeader,
    PokemonBody,
    PokemonSearchBar,
    PokemonLogo,
  },
  data() {
    return {
      pokemons: null,
    };
  },
  mounted() {
    this.$store.commit("changeHeaderColor", "#f0f0f0");
    this.$store.commit("changeHeaderBase", "#ee1515");
    this.$store.commit("changeHeaderBorder", "#ee1515");
    this.$store.commit("setShowToTop", true);

    fetch("https://pokeapi.co/api/v2/pokemon?limit=2000")
      .then((res) => res.json())
      .then((data) => {
        this.pokemons = data.results;
      });
  },
  methods: {},
};
</script>
<style scoped>
/* @import url("https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&display=swap"); */

@font-face {
  font-family: "Pixelate";
  src: url("../assets/font/SF Pixelate.ttf");
}
.pokemon {
  height: auto;
  background-color: var(--header-color);
  color: var(--header-base);
  padding: 0vw 1vw 5vw 1vw;
  font-family: "Pixelate", sans-serif;
  overflow-x: hidden;
  /* font-family: "Orbitron", sans-serif; */
}
</style>
