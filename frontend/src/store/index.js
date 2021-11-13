import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    headerColor : "",
    headerBase:"red",
    headerBorder:"",
    isDrumKitDisplayed: false,
    appTimeSeconds: 0,
    artworksLink:"@/assets/artworks/",
    isArtWorkLoaded: false,
    currentImage: null,
    showToTop: false,
    artWorkPage:0,
    showBaseArt:false,
    dataSciencePage:"home",
    pokemonList:[],
    filteredPokemonList:null,
    pkmnType1:"",
    pkmnType2:"",
    pkmnFormatName:"",
    pkmnSprite:"",
    pkmnPageIsLoaded:false,
    showPkmnDataPage:false,
    isOliPageUnlocked: false,
    beginAgain: false,

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
    setShowToTop(state,payload){
      state.showToTop = payload
    },
    setArtWorkPage(state,payload){
      state.artWorkPage = payload
    },
    setShowBaseArt(state,payload){
      state.showBaseArt = payload
    },
    setDataSciencePage(state,payload){
      state.dataSciencePage = payload
    },
    setPokemonList(state,payload){
      state.pokemonList = payload
    },
    setFilteredPokemonList(state,payload){
      state.filteredPokemonList = payload
    },  
    setPkmnType1(state,payload){
      state.pkmnType1 = payload
    },  
    setPkmnType2(state,payload){
      state.pkmnType1 = payload
    },
    setPkmnFormatName(state,payload){
      state.pkmnFormatName = payload
    },
    setPkmnSprite(state,payload){
      state.pkmnSprite = payload
    },

    pushToPokemonList(state,payload){
      state.pokemonList.push(payload)
    },    
    setPkmnPageIsLoaded(state){
      state.pkmnPageIsLoaded = true;
    },
    setShowPkmnDataPage(state,payload){
      state.showPkmnDataPage = payload;
    },
    setIsOliPageUnlocked(state){
      state.isOliPageUnlocked = true;
    },
    setBeginAgain(state){
      state.beginAgain = true;
    },
  },
  actions: {
  },
  modules: {},
});
