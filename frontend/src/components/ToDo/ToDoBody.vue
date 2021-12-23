<template>
  <b-row class="todo-body centrify">
    <b-col class="">
      <b-row class="todo-front centrify">
        <img class="todo-front-image" :src="todoFront" alt="" />
      </b-row>
      <b-row class="centrify todo-details">
        A simple <b>to-do/task checklist</b></b> web application.
   This is not yet mobile-responsive. <b>Best to use with a desktop computer.</b>  To login, you can either register using a dummy email<b>(ex.
        sample@g.com)</b> or use the preset dummy account below. 
      </b-row>

            <b-row class="centrify todo-details">
        <b>Email:</b> test@test.com | <b>Password:</b> test123 
      </b-row>
      <b-row class="centrify">
        <a
          href="https://todo-app-dan.herokuapp.com/"
          class="todo-link"
          target="_blank"
        >
          <button class="todo-button"><b>todo.</b><i class="fas fa-external-link-alt"></i></button>
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
    todoFront() {
      return require("@/assets/todo/todo-front.png");
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

.todo-body {
  color: var(--header-base);
}
.todo-link {
  text-decoration: none;
  margin: 0.2vw;
}

.todo-front-image {
  height: auto;
  width: 65vw;
  border-radius: 50px;
}

.todo-details {
  height: auto;
  font-size: 1vw;
  /* border-bottom: 1px solid var(--header-base); */
  /* border-radius: 10px; */
  margin: 10px 12.5vw;
}

.todo-button {
  height: 3vw;
  width: 20vw;
  border-radius: 20px;
  color: var(--header-base);
  border: 1px solid var(--header-base);
  margin-bottom: 20px;
  transition: all 0.5s ease;
}

.todo-button:hover,
.todo-button:active {
  transition: all 0.5s ease;
  transform: scale(0.9);
  color: var(--header-color);
  background: var(--header-base);
  font-size: 1.5vw;
  box-shadow: 0px 0px 10px var(--header-base);
  border-top-right-radius: 0px;
}

@media only screen and (max-width: 500px) {
  .todo-front-image {
    width: 99vw;
    border-radius: 30px;

  }

  .todo-details {
   font-size: 3vw;
    margin: 20px 0vw;
    padding: 50px 0px;
    border: 1px solid var(--header-base);
    border-radius: 10px;
  }

  .todo-button {
    height: 10vw;
    width: 80vw;
    border-radius: 50px;
  }
}
</style>
