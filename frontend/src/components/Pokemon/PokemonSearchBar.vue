<template>
  <b-row class="pkmn-search-bar-all centrify">
    <b-input-group prepend="Search:" class="mb-2 pkmn-search-bar">
      <b-form-input
        aria-label="Input search"
        v-model="search"
        @keypress.enter="filterPkmnSearch()"
        @click="gotoPkmnPage()"
        class="search-bar"
      >
      </b-form-input>
      <!-- <b-button
        variant="outline-primary"
        class="search-button"
        @click="filterPkmnSearch()"
        >Submit</b-button
      > -->
    </b-input-group>
    {{ filterPkmnSearch() }}
  </b-row>
</template>

<script>
export default {
  name: "PokemonSearchBar",
  data() {
    return {
      search: null,
    };
  },
  methods: {
    gotoPkmnPage() {
      if (this.$route.name !== "Pokemon") {
        this.$router.push("/projects/pokemon");
      }
      // this.search = "";
      this.filterPkmnSearch();
    },
    filterPkmnSearch() {
      let filteredList = null;
      let search = this.search;
      if (search) {
        search = search.toLowerCase();
        if (search === "/all") {
          filteredList = this.$store.state.pokemonList;
        } else {
          filteredList = this.pokemons.filter((pkmn) => {
            return (
              pkmn.name.includes(search) ||
              pkmn.fname.toLowerCase().includes(search) ||
              search.includes("/type " + pkmn.type1) ||
              search.includes("/type " + pkmn.type2) ||
              search.includes("/type1 " + pkmn.type1) ||
              (search.includes("/type2 " + pkmn.type2) &&
                pkmn.type2 != pkmn.type1) ||
              // (search.includes("d1_" + pkmn.type1) &&
              //   search.includes("d2_" + pkmn.type2))
              search.includes("/dual " + pkmn.type1 + " " + pkmn.type2)
            );
          });
          if (!filteredList.length) {
            filteredList = null;
          }
        }
      } else {
        filteredList = null;
      }
      this.$store.commit("setFilteredPokemonList", filteredList);
    },
  },
  computed: {
    pokemons() {
      return this.$store.state.pokemonList;
    },

    // search_lower() {
    //   return this.search.toLowerCase();
    // },
  },
  components: {},
};
</script>
<style scoped>
.pkmn-search-bar-all {
  width: 100vw;
  height: auto;
  font-size: 10vw;
}

.pkmn-search-bar {
  width: 50vw;
  height: auto;
}

.search-button,
.input-group-text,
.search-button:hover,
.search-button:active {
  background-color: var(--header-base);
  color: var(--header-color);
  border: none;
}

.search-button,
.search-button:hover,
.search-button:active {
  background-color: var(--header-base);
  color: var(--header-color);
  border: none;
  border-radius: 5px;
}
.search-bar {
  /* resize: none; */
}
.search-bar:focus,
.search-button:focus {
  outline: none !important;
  outline-width: 0 !important;
  box-shadow: none;
  -moz-box-shadow: none;
  -webkit-box-shadow: none;
  border-color: var(--header-base);
}
@media only screen and (max-width: 500px) {
  .pkmn-search-bar-all {
    font-size: 8vw;
  }

  .pkmn-search-bar {
    width: 100vw;
    font-size: 10px;
    /* transform: scale(0.6); */
  }

  .search-button,
  .search-bar,
  .input-group-text {
    height: 7vw;
    font-size: 10px;
  }
}
</style>
