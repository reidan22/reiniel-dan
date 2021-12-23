<template>
  <b-row class="game-front-body centrify">
    <b-col class="">
      <b-row class="game-front-front centrify">
        <img class="game-front-front-image" :src="gameFrontGif" alt="" />
      </b-row>
      <b-row class="centrify game-front-details">
        My first frontend project using<b
          >Vanilla HTML, CSS, JavaScript, and jQuery.</b
        >
        To activate login, use the preset dummy account below.
      </b-row>

      <b-row class="centrify game-front-details">
        <b>Username:</b> user1 | <b>Password:</b> pass1
      </b-row>
      <b-row class="centrify">
        <a
          href="/reiniel-dan/gamefront/index.html"
          target="_blank"
          class="game-front-link"
        >
          <button class="game-front-button">
            <b>Game Front Page</b><i class="fas fa-external-link-alt"></i>
          </button>
        </a>
      </b-row>
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: "ToDoBody",
  components: {},
  computed: {
    gameFrontGif() {
      return require("@/assets/gamefront/gamefront-front.gif");
    },
  },
};
</script>

<style scoped>
b {
  margin: 0px;
  padding: 0px 5px;
  width: auto;
}

.game-front-body {
  color: var(--header-base);
}
.game-front-link {
  text-decoration: none;
  margin: 0.2vw;
}

.game-front-front-image {
  height: auto;
  width: 65vw;
  border-radius: 50px;
}

.game-front-details {
  height: auto;
  font-size: 1vw;
  /* border-bottom: 1px solid var(--header-base); */
  /* border-radius: 10px; */
  margin: 10px 12.5vw;
}

.game-front-button {
  height: 3vw;
  width: 20vw;
  border-radius: 20px;
  color: var(--header-base);
  border: 1px solid var(--header-base);
  margin-bottom: 20px;
  transition: all 0.5s ease;
}

.game-front-button:hover,
.game-front-button:active {
  transition: all 0.5s ease;
  transform: scale(0.9);
  color: var(--header-color);
  background: var(--header-base);
  font-size: 1.5vw;
  box-shadow: 0px 0px 10px var(--header-base);
  border-top-right-radius: 0px;
}

@media only screen and (max-width: 500px) {
  .game-front-front-image {
    width: 99vw;
    border-radius: 30px;
  }

  .game-front-details {
    font-size: 3vw;
    margin: 20px 0vw;
    padding: 50px 0px;
    border: 1px solid var(--header-base);
    border-radius: 10px;
  }

  .game-front-button {
    height: 10vw;
    width: 80vw;
    border-radius: 50px;
  }
}
</style>
