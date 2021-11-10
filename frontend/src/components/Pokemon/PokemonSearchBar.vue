<template>
  <b-row class="pkmn-search-bar-all centrify">
    <div
      class="info-modal centrify"
      @click="modal = false"
      v-if="modal === true"
    >
      <div class="info-content centrify">
        <b-row>
          <b-col>
            <b-row class="centrify">
              <h3>How to use:</h3>
            </b-row>
            <b-row class="content-cmd"
              >a.) Type the <b>name</b> of the Pokemon.
              <b>(ex. Eevee)</b></b-row
            >
            <b-row class="content-cmd"
              >b.) Type <b>/all</b> to load all Pokemon.</b-row
            >
            <b-row class="content-cmd"
              >c.) Type <b>/random</b> to load a randomly chosen Pokemon.</b-row
            >
            <b-row class="content-cmd"
              >d.) Type <b>/type [TYPE]</b> to load Pokemon based on their
              primary or secondary type<b>(ex. /type normal)</b></b-row
            >
            <b-row class="content-cmd"
              >e.) Type <b>/type1 [TYPE]</b> to load Pokemon based on their
              primary type. <b>(ex. /type1 ghost)</b></b-row
            >
            <b-row class="content-cmd"
              >f.) Type <b>/type2 [TYPE]</b> to load Pokemon based on their
              secondary type. <b>(ex. /type2 fairy)</b></b-row
            >
            <b-row class="content-cmd"
              >g.) Type <b>/dual [TYPE1] [TYPE2]</b> to load Pokemon based on
              its specific type combination.
              <b>(ex. /dual fire fighting)</b></b-row
            >
            <b-row class="content-cmd centrify"><b>Elemental Types</b></b-row>
            <b-row class="content-cmd elem centrify">
              <b-col
                cols="2"
                class="elem-type"
                v-for="type in pkmn_types"
                :key="type"
                :style="{ background: getColor(type, type) }"
              >
                {{ type }}</b-col
              >
            </b-row>
          </b-col>
        </b-row>
      </div>
    </div>
    <b-input-group prepend="Search:" class="mb-2 pkmn-search-bar">
      <b-form-input
        aria-label="Input search"
        v-model="search"
        @keypress.enter="filterPkmnSearch()"
        @click="gotoPkmnPage()"
        class="search-bar"
      >
      </b-form-input>
      <i class="fas fa-info-circle" id="info" @click="modal = true"></i>
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
      modal: false,
      search: null,
      pkmn_types: [
        "normal",
        "fire",
        "water",
        "electric",
        "grass",
        "ice",
        "fighting",
        "poison",
        "ground",
        "flying",
        "psychic",
        "bug",
        "rock",
        "ghost",
        "dragon",
        "dark",
        "steel",
        "fairy",
      ],
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
        } else if (search === "/random") {
          filteredList = this.$store.state.pokemonList;
          let len = filteredList.length;
          let randLen = Math.floor(Math.random() * len);
          let rand = filteredList[randLen];
          filteredList = filteredList.filter((pkmn) => {
            return pkmn.name === rand.name;
          });
          // filteredList =
          //   this.$store.state.pokemonList[
          //     Math.floor(Math.random() * this.$store.state.pokemonList.length)
          //   ];
          console.log(filteredList);
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
b {
  margin: 0px;
  padding: 0px 5px;
  width: auto;
}
.pkmn-search-bar-all {
  width: 100vw;
  height: auto;
  font-size: 10vw;
}

.pkmn-search-bar {
  width: 70vw;
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
/* .search-bar {
  resize: none;
  } */

.search-bar:focus,
.search-button:focus {
  outline: none !important;
  outline-width: 0 !important;
  box-shadow: none;
  -moz-box-shadow: none;
  -webkit-box-shadow: none;
  border-color: var(--header-base);
}

#span-info {
  font-size: 10vw;
  height: 4vw;
}

#info {
  width: 5vw;
  margin: auto;
  padding: 0px;
  font-size: 2vw;
  cursor: pointer;
  transition: all 0.5s ease;
}

#info:hover {
  transition: all 0.5s ease;
  transform: scale(1.1) rotate(20deg);
}

.info-modal {
  position: fixed;
  left: 0px;
  top: 0px;
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.384);
  z-index: 30;
  font-size: 1vw;
  color: black;
}

.info-content {
  height: auto;
  width: 70vw;
  padding: 5vw;
  background: var(--header-color);
  border-radius: 30px;
  border: 0.5vw solid var(--header-base);
}

.content-cmd {
  margin-top: 1vw;
}
.elem {
  margin: 0px;
  padding: 0px;
}

.elem-type {
  width: 10vw;
  font-size: 1vw;
  margin: 5px;
  border-radius: 20px;
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

  #info {
    font-size: 5vw;
    padding-left: 5px;
  }

  .info-modal {
    font-size: 2vw;
  }

  .info-content {
    width: 95vw;
  }

  .elem-type {
    width: 20vw;
    font-size: 2.5vw;
  }
}
</style>
