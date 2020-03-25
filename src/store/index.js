import Vue from "vue";
import Vuex from "vuex";
import iQOS from "iqos";
const update = () => {
  store.state.batteryValue = iqos.batteryValue;
};

const iqos = new iQOS(navigator.bluetooth, update);

Vue.use(Vuex);
export const store = new Vuex.Store({
  state: {
    batteryValue: null
  },
  mutations: {
    start() {
      try {
        iqos.start();
      } catch (error) {
        console.error(error);
      }
    }
  },
  actions: {},
  modules: {}
});

export default store;
