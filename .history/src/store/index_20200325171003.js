import Vue from "vue";
import Vuex from "vuex";
import { createPersistedState, createSharedMutations } from "vuex-electron";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {},
  plugins: [
    createPersistedState(),
    createSharedMutations()
  ],
});
