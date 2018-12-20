import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cats: ["Marcus", "Fleur"]
  },
  mutations: {
    addCat(state, cat) {
      state.cats.push(cat);
    }
  },
  actions: {
    addCat(context, newCat) {
      context.commit("addCat", newCat);
    }
  }
});
