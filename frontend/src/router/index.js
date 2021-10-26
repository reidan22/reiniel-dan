import Vue from "vue";
import VueRouter from "vue-router";
import TheMain from "@/views/TheMain.vue";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import DrumKitMain from "@/views/projects/drumkit/DrumKitMain.vue";
import ArtWorkMain from "@/views/projects/artworks/ArtWorkMain.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "TheMain",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },  {
    path: "/home",
    name: "Home",
    component: Home,
  },  {
    path: "/projects/drumkit",
    name: "DrumKit",
    component: DrumKitMain,
  },  {
    path: "/projects/artworks",
    name: "ArtWorks",
    component: ArtWorkMain,
  }, 
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
