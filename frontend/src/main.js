import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";


import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import "./assets/fontawesome-free/css/all.min.css"

Vue.config.productionTip = false;
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)


// Custom functions
Vue.mixin({
    methods:{
        getColor: function(type,org)
{
      let pkmn_types = [
        "normal",
        "fire",
        "water",
        "electric",
        "grass",
        "ice",
        "fighting",
        "poison",
        "ground",
        "flying",
        "psychic",
        "bug",
        "rock",
        "ghost",
        "dragon",
        "dark",
        "steel",
        "fairy",
      ];

      let type_colors = [
        "#A8A77A",
        "#EE8130",
        "#6390F0",
        "#F7D02C",
        "#7AC74C",
        "#96D9D6",
        "#C22E28",
        "#A33EA1",
        "#E2BF65",
        "#A98FF3",
        "#F95587",
        "#A6B91A",
        "#B6A136",
        "#735797",
        "#6F35FC",
        "#705746",
        "#B7B7CE",
        "#D685AD",
      ];

      let type_index = pkmn_types.indexOf(type);
      let color = "";
      if (type_index === -1) {
        color = type_colors[pkmn_types.indexOf(org)];
      } else {
        color = type_colors[type_index];
      }
      return color;
    },
    formatName(name) {
      if (name.includes("-mega")) {
        name = "Mega " + name;
        name = name.replace("-mega", "");
      }

      if (name.includes("-gmax")) {
        name = "Gigantimax " + name;
        name = name.replace("-gmax", "");
      }
      name = name.replace("-midday", " (Midday Forme)");
      name = name.replace("-midnight", " (midnight Forme)");
      name = name.replace("-dusk", " (dusk Forme)");
      name = name.replace("-dawn", " (dawn Forme)");
      name = name.replace("-ultra", " (ultra Forme)");
      name = name.replace("-eternamax", " (eternamax Forme)");
      name = name.replace("-own-tempo", " (own tempo Forme)");
      name = name.replace("-red-meteor", " (Red Meteor Forme)");
      name = name.replace("-orange-meteor", " (orange Meteor Forme)");
      name = name.replace("-yellow-meteor", " (yellow Meteor Forme)");
      name = name.replace("-green-meteor", " (green Meteor Forme)");
      name = name.replace("-blue-meteor", " (blue Meteor Forme)");
      name = name.replace("-indigo-meteor", " (indigo Meteor Forme)");
      name = name.replace("-violet-meteor", " (violet Meteor Forme)");
      name = name.replace("-red", " (Red Forme)");
      name = name.replace("-orange", " (orange Forme)");
      name = name.replace("-yellow", " (yellow Forme)");
      name = name.replace("-green", " (green Forme)");
      name = name.replace("-blue", " (blue Forme)");
      name = name.replace("-indigo", " (indigo Forme)");
      name = name.replace("-violet", " (violet Forme)");
      name = name.replace("-fini", " Fini");
      name = name.replace("-koko", " Koko");
      name = name.replace("-bulu", " Bulu");
      name = name.replace("-lele", " Lele");
      name = name.replace("-mime", ". Mime");
      name = name.replace("-rime", ". Rime");
      name = name.replace("-male", " (Male)");
      name = name.replace("-female", " (Female)");
      name = name.replace("-normal", " (Normal)");
      name = name.replace("-attack", " (Attack)");
      name = name.replace("-defense", " (Defense)");
      name = name.replace("-speed", " (Speed)");
      name = name.replace("-altered", " (Altered Forme)");
      name = name.replace("-original-cap", " (original cap)");
      name = name.replace("-partner-cap", " (partner cap)");
      name = name.replace("-hoenn-cap", " (hoenn cap)");
      name = name.replace("-sinnoh-cap", " (sinnoh cap)");
      name = name.replace("-unova-cap", " (unova cap)");
      name = name.replace("-kalos-cap", " (kalos cap)");
      name = name.replace("-alola-cap", " (alolan cap)");
      name = name.replace("-original", " (Original Forme)");
      name = name.replace("-origin", " (Origin Forme)");
      name = name.replace("-land", " (Land Forme)");
      name = name.replace("-sky", " (Sky Forme)");
      name = name.replace("-busted", " (busted)");
      name = name.replace("-red-striped", " (Red Striped)");
      name = name.replace("-blue-striped", " (Blue Striped)");
      name = name.replace("-ordinary", " (Ordinary)");
      name = name.replace("-resolute", " (resolute)");
      name = name.replace("-blade", " (blade)");
      name = name.replace("-shield", " (shield)");
      name = name.replace("-crowned", " (crowned)");
      name = name.replace("-standard", "");
      name = name.replace("-noice", " (noice)");
      name = name.replace("-small", " (small size)");
      name = name.replace("-large", " (large size)");
      name = name.replace("-super", " (super size)");
      name = name.replace("-average", " (Average size)");
      name = name.replace("-incarnate", " (Incarnate Forme)");
      name = name.replace("-therian", " (therian Forme)");
      name = name.replace("-aria", " (Aria Forme)");
      name = name.replace("-pirouette", " (pirouette Forme)");
      name = name.replace("-amped", " (Amped Forme)");
      name = name.replace("-low-key", " (low-key Forme)");
      name = name.replace("-baile", " (Baile Forme)");
      name = name.replace("-pom-pom", " (pompom Forme)");
      name = name.replace("-sensu", " (sensu Forme)");
      name = name.replace("-pau", " (pau Forme)");
      name = name.replace("-solo", " (Solo Forme)");
      name = name.replace("-school", " (school Forme)");
      name = name.replace("-hero", " (Hero)");
      name = name.replace("-heat", " (heat)");
      name = name.replace("-frost", " (Frost)");
      name = name.replace("-wash", " (wash)");
      name = name.replace("-black", " (black)");
      name = name.replace("-white", " (white)");
      name = name.replace("-fan", " (fan)");
      name = name.replace("-mow", " (mow)");
      name = name.replace("-rock-star", " (rock star)");
      name = name.replace("-belle", " (belle)");
      name = name.replace("-pop-star", " (pop star)");
      name = name.replace("-phd", " (phd)");
      name = name.replace("-libre", " (libre)");
      name = name.replace("-cosplay", " (cosplay)");
      name = name.replace("-unbound", " (unbound)");
      name = name.replace("-zen", " (Zen Forme)");
      name = name.replace("-primal", " (primal Forme)");
      name = name.replace("-sunny", " (sunny forme)");
      name = name.replace("-rainy", " (rainy forme)");
      name = name.replace("-snowy", " (snowy forme)");
      name = name.replace("-eternal", " (eternal forme)");
      name = name.replace("-plant", " (plant)");
      name = name.replace("-sandy", " (sandy)");
      name = name.replace("-trash", " (trash)");
      name = name.replace("-ash", " (ash)");
      name = name.replace("-battle-bond", " (battle-bond)");
      name = name.replace("-10", " (10%)");
      name = name.replace("-50", " (50%)");
      name = name.replace("-complete", " (100%)");
      name = name.replace("-ice-rider", " (ice rider)");
      name = name.replace("-shadow-rider", " (shadow rider)");
      name = name.replace("-single-strike", " (Single Strike)");
      name = name.replace("-rapid-strike", " (rapid Strike)");
      name = name.replace("-disguised", " (Disguised Forme)");
      name = name.replace("-totem", " (Totem form)");
      name = name.replace("-alola", " (Alolan form)");
      name = name.replace("-galar", " (Galarian form)");
      name = name.replace("-f", " (Female)");
      name = name.replace("-m", " (Male)");
      this.$store.commit("setPkmnFormatName", name);

      return name;
    }
    }
})
// Custom Vue directives
Vue.directive('click-outside', {
    bind(el, binding, vnode) {
        var vm = vnode.context;
        var callback = binding.value;

        el.clickOutsideEvent = function (event) {
            if (!(el == event.target || el.contains(event.target))) {
                return callback.call(vm, event);
            }
        };
        document.body.addEventListener('click', el.clickOutsideEvent);
    },
    unbind(el) {
        document.body.removeEventListener('click', el.clickOutsideEvent);
    }
});

//


new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");


