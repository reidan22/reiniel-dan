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
  methods: {},
};
</script>
<style scoped>
.pkmn-img {
  width: 7vw;
  height: 7vw;
  padding: 0px;
  margin: 0px;
  transition: all 0.5s ease;
}

.pkmn-img:hover {
  transition: all 0.5s ease;
  transform: scale(1.5);
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
