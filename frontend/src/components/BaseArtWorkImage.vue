<template>
  <span id="base-component">
    <div class="wrap">
      <h5 id="image-title">{{ image.title }}</h5>
      <b-img-lazy
        :src="getImage(image.image)"
        :alt="loadingGIF"
        class="base-image"
      />
    </div>
  </span>
</template>

<script>
export default {
  name: "BaseArtWorkImage",
  props: ["image"],
  methods: {
    getImage(path) {
      return require("@/assets/artworks/arts/" + path);
    },
  },
  computed: {
    loadingGIF() {
      return require("@/assets/resources/loading-buffering.gif");
    },
  },
};
</script>

<style scoped>
.base-image {
  height: 25vw;
  width: auto;
  border: 0.25vw solid white;
  border-radius: 0px;
  margin: 10px 5px;
}

img {
  margin: 10px 5px;
  transition: all 0.5s ease;
  opacity: 1;
}

img:hover {
  transition: all 0.5s ease;
  transform: scale(0.95);
  opacity: 0.2;
}

#base-component {
  transition: all 0.5s ease;
  color: transparent;
}

#base-component:hover {
  transition: all 0.5s ease;
  color: rgb(0, 0, 0);
}

#image-title {
  position: relative;
  top: 14rem;
}

@media only screen and (max-width: 500px) {
  .base-image {
    height: auto;
    width: 40vh;
    border: 2vw solid white;
    border-radius: 0px;
    margin: 0px 5px;
  }

  img {
    margin: 10px 5px;
    transition: all 0.5s ease;
  }

  img:hover {
    transition: all 0.5s ease;
    transform: scale(0.95);
  }

  #base-component {
    transition: all 0.5s ease;
    color: transparent;
  }

  #base-component:hover {
    transition: all 0.5s ease;
    color: rgb(0, 0, 0);
  }

  #image-title {
    position: relative;
    top: 14rem;
  }
}
</style>
