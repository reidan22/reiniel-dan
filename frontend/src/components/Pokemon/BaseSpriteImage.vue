<template>
  <b-row
    class="pkmn-single-row centrify"
    :style="{
      'background-color': getColor(type1Loaded, type1Loaded) + 'E0',
      'border-color': getColor(type2Loaded, type1Loaded),
    }"
  >
    <b-row class="row-format centrify">
      <img :src="spriteImg" alt="loading..." class="pkmn-img" />
    </b-row>
    <b-row class="row-format centrify"
      ><h2 class="pkmn-name">{{ pokemon.fname }}</h2></b-row
    >
  </b-row>
</template>

<script>
// @ is an alias to /src
let pkmn_types = [
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
];

let type_colors = [
  "#A8A77A",
  "#EE8130",
  "#6390F0",
  "#F7D02C",
  "#7AC74C",
  "#96D9D6",
  "#C22E28",
  "#A33EA1",
  "#E2BF65",
  "#A98FF3",
  "#F95587",
  "#A6B91A",
  "#B6A136",
  "#735797",
  "#6F35FC",
  "#705746",
  "#B7B7CE",
  "#D685AD",
];
export default {
  name: "BaseSpriteImage",
  props: ["pokemon"],
  components: {},
  data() {
    return {
      pokemons: null,
      test: null,
      sprite: null,
      type1: null,
      type2: null,
      types: null,
    };
  },
  mounted() {},
  computed: {
    name() {
      return this.pokemon.name;
    },
    url() {
      return this.pokemon.url;
    },
    spriteImg() {
      return this.pokemon.sprite;
    },
    type1Loaded() {
      return this.pokemon.type1;
    },
    type2Loaded() {
      return this.pokemon.type2;
    },
  },
  methods: {
    getColor(type, org) {
      let type_index = pkmn_types.indexOf(type);
      let color = "";
      if (type_index === -1) {
        color = type_colors[pkmn_types.indexOf(org)];
      } else {
        color = type_colors[type_index];
      }
      return color;
    },
  },
};
</script>
<style scoped>
.pkmn-img {
  width: 7vw;
  height: 7vw;
  padding: 0px;
  margin: 0px;
}

.pkmn-single-row {
  width: 15vw;
  height: auto;
  padding: 0px;
  margin: 2vw;
  border: 10px solid red;
  background-color: #ffffff00;
  border-radius: 25px;
}
.pkmn-name {
  font-size: 1vw;
  color: black;
  text-transform: capitalize;
}

.row-format {
  padding: 0px;
  margin: 0px;
}

@media only screen and (max-width: 500px) {
  .pkmn-img {
    width: 15vh;
    height: 15vh;
  }
  .pkmn-single-row {
    width: 20vh;
    height: 24vh;
    padding: 0px;
    border: 5px solid red;
    margin: 2vw;
    /* margin-bottom: 10vw; */
  }
  .pkmn-name {
    font-size: 2.5vw;
    color: black;
    width: 15vh;
  }
}
</style>
