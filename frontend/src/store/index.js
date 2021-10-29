import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    headerColor : "",
    headerBase:"",
    headerBorder:"",
    isDrumKitDisplayed: false,
    appTimeSeconds: 0,
    artworksLink:"@/assets/artworks/",
    isArtWorkLoaded: false,
    currentImage: 11,
  },
  mutations: {

    changeHeaderBase(state,payload){
      state.headerBase = payload;
    } ,
    changeHeaderColor(state,payload){
      state.headerColor = payload;
    },    
    changeHeaderBorder(state,payload){
      state.headerBorder = payload;
    },
    toggleDrumKitDisplayed(state,payload){
      state.isDrumKitDisplayed = payload;
    },
    countUpAppTimeSeconds(state, payload){
      state.appTimeSeconds = Math.floor(payload);
    },
    artWorkIsLoaded(state){
      state.isArtWorkLoaded = true;
    },
    changeCurrentImage(state, payload){
      state.currentImage = "image_" + payload;
    },
  },
  actions: {
  },
  modules: {},
});
