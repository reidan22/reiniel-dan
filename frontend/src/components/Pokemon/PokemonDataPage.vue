<template>
  <b-row
    class="pkmn-data centrify"
    v-if="isPkmnDataPageShown === true"
    id="pkmnData"
    :style="{
      background: getColor(fetchedInfo.type1, fetchedInfo.type1) + 'd0',
      border: '10px solid ' + getColor(fetchedInfo.type2, fetchedInfo.type1),
    }"
  >
    <b-row class="centrify">
      <b-col>
        <b-row class="centrify">
          <b-row class="centrify name">{{ formatName(pkmn) }}</b-row>
          <b-img
            :src="fetchedInfo.sprites.other['official-artwork'].front_default"
            class="sprite"
          ></b-img>
        </b-row>
        <b-row>
          <b-col></b-col
          ><b-col
            class="typing centrify"
            :style="{
              background: getColor(fetchedInfo.type1, fetchedInfo.type1),
            }"
            >{{ fetchedInfo.type1 }}</b-col
          ><b-col
            class="typing centrify"
            v-if="fetchedInfo.type1 !== fetchedInfo.type2"
            :style="{
              background: getColor(fetchedInfo.type2, fetchedInfo.type1),
            }"
            >{{ fetchedInfo.type2 }}</b-col
          >
          <b-col></b-col
        ></b-row>
        <b-row>
          <!-- <b-col v-for="sprite in fetchedInfo.sprites" :key="sprite.name"> -->
          <!-- </b-col> -->
        </b-row>
      </b-col>
      <!-- <b-col class="centrify">{{ fetchedInfo }}</b-col> -->
      <b-col class="centrify"> Display pokemon details here...</b-col>
    </b-row>
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
        let type1 = types[0]["type"]["name"];
        let type2 = types[0]["type"]["name"];
        if (types.length > 1) {
          type2 = types[1]["type"]["name"];
        }
        this.info = {
          abilities: abilities,
          base_exp: base_exp,
          height: height,
          moves: moves,
          sprites: sprites,
          stats: stats,
          types: types,
          type1: type1,
          type2: type2,
        };
        console.log(this.info);
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
  position: relative;
  height: auto;
  min-height: 65vh;
  width: 95%;
  margin: 0px;
  margin-top: 50px;
  padding: 0px;
  font-size: 1vw;
  /* background: rgb(255, 192, 203); */
  /* border: 20px solid red; */
  border-radius: 20px;
  color: black;
}

.sprite {
  width: 20vw;
  height: 20vw;
}

.name {
  text-transform: capitalize;
  text-shadow: 1px 2px 0px white;
  font-size: 3vw;
}
.typing {
  color: rgb(0, 0, 0);
  font-size: 2vw;
  border: 2px solid black;
  text-shadow: 1px 2px 0px white;
  border-radius: 20px;
}

@media only screen and (max-width: 500px) {
  .pkmn-data {
    margin: 0px;
  }
  .name {
    text-shadow: 1px 1px 0px white;
    font-size: 7vw;
  }
  .sprite {
    width: 40vh;
    height: auto;
  }

  .typing {
    color: rgb(0, 0, 0);
    font-size: 5vw;
    border: 3px solid black;
    text-shadow: 1px 1px 0px white;
    border-radius: 30px;
  }
}
</style>
