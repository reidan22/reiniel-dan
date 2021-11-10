<template>
  <div class="pkmn-body-all centrify">
    <router-view></router-view>
    <b-row
      class="pkmn-body centrify"
      v-if="filtered && isPkmnDataPageShown === false"
    >
      <!-- {{ isPkmnDataPageShown }} -->
      <b-row
        class="centrify pkmn-row"
        v-for="pokemon in filtered"
        :key="pokemon.name"
      >
        <router-link
          class="pkmn-data-router"
          :to="'/projects/pokemon/' + pokemon.name"
        >
          <base-sprite-image :pokemon="pokemon"></base-sprite-image>
        </router-link>
      </b-row>
    </b-row>
    <b-row
      class="pkmn-body centrify body-else"
      v-if="!filtered && isPkmnDataPageShown === false"
    >
      No returned results...
    </b-row>
  </div>
</template>

<script>
// @ is an alias to /src
import BaseSpriteImage from "@/components/Pokemon/BaseSpriteImage";
export default {
  name: "Pokemon",
  components: {
    BaseSpriteImage,
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

        for (const pokemon of this.pokemons) {
          let name = pokemon.name;
          let fname = this.formatName(pokemon.name);
          let url = pokemon.url;
          fetch(url)
            .then((res) => res.json())
            .then((data) => {
              let sprite = data.sprites.front_default;
              let types = data.types;
              let type1 = types[0]["type"]["name"];
              let type2 = types[0]["type"]["name"];
              if (types.length > 1) {
                type2 = types[1]["type"]["name"];
              }
              let pkmn = {
                name: name,
                url: url,
                sprite: sprite,
                type1: type1,
                type2: type2,
                fname: fname,
              };
              this.$store.commit("pushToPokemonList", pkmn);
            });
        }
        this.$store.commit("setPkmnPageIsLoaded");
      });
  },
  methods: {},
  computed: {
    filtered() {
      return this.$store.state.filteredPokemonList;
    },
    isPkmnDataPageShown() {
      return this.$store.state.showPkmnDataPage;
    },
  },
};
</script>
<style scoped>
.pkmn-body-all {
  padding: 0px;
  margin: 0px;
}
.pkmn-body {
  position: relative;
  top: 0px;
  left: 0px;
  width: auto;
  height: auto;
  padding: 0px;
  margin: auto;
  margin-bottom: 10vw;
  z-index: 10;
}

.pkmn-row {
  width: auto;
  height: auto;
  padding: 0px;
  margin: 0px;
  transition: all 0.5s ease;
}

.pkmn-row:hover {
  transform: scale(1.2);
  transition: all 0.5s ease;
  cursor: pointer;
}

.body-else {
  height: 25vh;
}

.pkmn-data-router {
  text-decoration: none;
}
@media only screen and (max-width: 500px) {
  .body-else {
    height: 80vh;
  }
}
</style>
