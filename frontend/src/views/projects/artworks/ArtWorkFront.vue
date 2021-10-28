<template>
  <b-container fluid class="centrify" id="art-work-all">
    <b-row id="art-work-front" class="centrify" v-if="!isLoaded">
      <button id="art-work-front-button" class="centrify" @click="hideFront()">
        ENTER
      </button>
      <img
        id="art-work-front-image"
        :src="getImage(randomImage.image)"
        alt=""
      />
    </b-row>
    <art-work-main v-else-if="isLoaded"></art-work-main>
  </b-container>
</template>

<script>
import ArtWorkMain from "@/views/projects/artworks/ArtWorkMain";
import ArtList from "@/assets/artworks/artlist.json";
export default {
  name: "ArtWorkFront",
  components: {
    ArtWorkMain,
  },
  data() {
    return {
      images: ArtList,
      randomImage: null,
    };
  },
  methods: {
    getImage(path) {
      return require("@/assets/artworks/arts/" + path);
    },
    hideFront() {
      this.$store.commit("artWorkIsLoaded");
    },
  },
  mounted() {
    this.$store.commit("changeHeaderColor", "#171b25");
    this.$store.commit("changeHeaderBase", "white");

    for (let i = this.images.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * i);
      const temp = this.images[i];
      this.images[i] = this.images[j];
      this.images[j] = temp;
    }
    this.randomImage = this.images[0];
    console.log(this.randomImage);
  },
  computed: {
    isLoaded() {
      return this.$store.state.isArtWorkLoaded;
    },
  },
};
</script>

<style>
#art-work-all {
  font-size: 1vw;
  width: 100vw;
  height: 100vh;
  margin: 0px;
  padding: 0px;
}

#art-work-front {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 100vh;
  margin: 0px;
  padding: 0px;
  overflow: hidden;
  background-color: rgb(0, 0, 0);
}

#art-work-front-image {
  position: absolute;
  margin: 0px;
  padding: 0px;
  width: 100vw;
  left: 0px;
  top: -20%;
  opacity: 0.3;
}

#art-work-front-button {
  background-color: var(--header-color);
  color: var(--header-base);
  position: absolute;
  margin: auto 0px;
  width: 8rem;
  height: 4rem;
  transition: all 0.5s ease;
  z-index: 20;
  font-size: ;
}

#art-work-front-button:hover,
#art-work-front-button:active {
  color: var(--header-color);
  border: 1px solid var(--header-color);
  background-color: var(--header-base);
  transition: all 0.5s ease;
}
</style>
