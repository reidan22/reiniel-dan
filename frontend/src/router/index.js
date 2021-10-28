import Vue from "vue";
import VueRouter from "vue-router";
import TheMain from "@/views/TheMain.vue";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import DrumKitMain from "@/views/projects/drumkit/DrumKitMain.vue";
import ArtWorkMain from "@/views/projects/artworks/ArtWorkMain.vue";
import ArtWorkFront from "@/views/projects/artworks/ArtWorkFront.vue";
import DataScienceMain from "@/views/projects/datascience/DataScienceMain.vue";
import DataScienceIsFraud from "@/views/projects/datascience/DataScienceIsFraud.vue";
import DataScienceSpotify from "@/views/projects/datascience/DataScienceSpotify.vue";
import DataScienceMooe from "@/views/projects/datascience/DataScienceMooe.vue";
import DataScienceHireEducation from "@/views/projects/datascience/DataScienceHireEducation.vue";
import DataScienceCheckApp from "@/views/projects/datascience/DataScienceCheckApp.vue";

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
    component: ArtWorkFront,
    children: [{
    path: "main",
    name: "ArtWorkMain",
    component: ArtWorkMain,}
    ]
  }, {
    path: "/projects/data_science",
    name: "DataScience",
    component: DataScienceMain,
    children: [
      {
    path: "is_fraud",
    name: "DataScienceIsFraud",
    component: DataScienceIsFraud,

      }    , 
       {
    path: "spotify",
    name: "DataScienceSpotify",
    component: DataScienceSpotify,

      },
             {
    path: "checkapp",
    name: "DataScienceCheckApp",
    component: DataScienceCheckApp,

      },
             {
    path: "hire_education",
    name: "DataScienceHireEducation",
    component: DataScienceHireEducation,

      },
             {
    path: "mooe",
    name: "DataScienceMooe",
    component: DataScienceMooe,

      },
    ]
  }, 
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
