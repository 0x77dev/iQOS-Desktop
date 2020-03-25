import Vue from "vue";
import Vuex from "vuex";
import iQOS from "iqos";
const update = () => {
  store.state.iqos = iqos;
};

const iqos = new iQOS(navigator.bluetooth, update);

Vue.use(Vuex);
export const store = new Vuex.Store({
  state: {
    iqos: null
  },
  mutations: {
    start() {
      iqos.start();
    }
  },
  actions: {},
  modules: {}
});

export default store;
