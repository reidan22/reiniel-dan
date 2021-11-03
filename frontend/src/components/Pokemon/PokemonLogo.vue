<template>
  <div class="pokeball">
    <img
      :src="require('@/assets/pokemon/pokeball_logo.png')"
      alt="image.."
      class="pokeball-image"
    />
  </div>
</template>

<script>
export default {
  name: "PokemonLogo",
  computed: {
    logo() {
      return require("@/assets/pokemon/pokeball_logo.png");
    },
  },
};
</script>
<style scoped>
.pokeball {
  position: fixed;
  top: 0px;
  left: 0px;
}
.pokeball-image {
  animation: rotation 2s infinite linear;
  position: fixed;
  left: -400px;
  bottom: -400px;
  width: 800px;
  height: 800px;
  z-index: 1;
  opacity: 0.7;
}

@media only screen and (max-width: 500px) {
  .pokeball-image {
    left: -200px;
    bottom: -200px;
    width: 400px;
    height: 400px;
  }
}
@keyframes rotation {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(359deg);
  }
}
</style>
