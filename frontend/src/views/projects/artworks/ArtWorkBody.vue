<template>
  <b-row>
    <b-col class="centrify" v-for="key in keys" :key="key.letter">
      <base-drum-kit-key :sound="key"></base-drum-kit-key>
    </b-col>
  </b-row>
</template>

<script>
import BaseDrumKitKey from "@/components/BaseDrumKitKey.vue";
export default {
  name: "ArtWorkBody",
  components: {
    BaseDrumKitKey,
  },
  data() {
    return {
      keys: [
        {
          name: "boom",
          audio: require("@/assets/drumkit/sounds/boom.wav"),
          letter: "A",
        },
        {
          name: "clap",
          audio: require("@/assets/drumkit/sounds/clap.wav"),
          letter: "S",
        },
        {
          name: "hihat",
          audio: require("@/assets/drumkit/sounds/hihat.wav"),
          letter: "D",
        },
        {
          name: "kick",
          audio: require("@/assets/drumkit/sounds/kick.wav"),
          letter: "F",
        },
        {
          name: "openhat",
          audio: require("@/assets/drumkit/sounds/openhat.wav"),
          letter: "G",
        },
        {
          name: "ride",
          audio: require("@/assets/drumkit/sounds/ride.wav"),
          letter: "Z",
        },
        {
          name: "snare",
          audio: require("@/assets/drumkit/sounds/snare.wav"),
          letter: "X",
        },
        {
          name: "tink",
          audio: require("@/assets/drumkit/sounds/tink.wav"),
          letter: "C",
        },
        {
          name: "tom",
          audio: require("@/assets/drumkit/sounds/tom.wav"),
          letter: "V",
        },
      ],
    };
  },
};
</script>

<style scoped></style>
