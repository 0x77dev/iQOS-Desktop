import Vue from "vue";
import Vuex from "vuex";
import iQOS from "iqos";
const Notification = window.Notification;

const update = () => {
  store.state.batteryValue = iqos.batteryValue;
};

const iqos = new iQOS(navigator.bluetooth, update);

Vue.use(Vuex);
export const store = new Vuex.Store({
  state: {
    batteryValue: null,
    notificationHolderReadyShown: false
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

store.watch(state => {
  if (state.batteryValue.holderReady) {
    if (Notification.permission === "granted") {
      new Notification("Holder Ready ✅");
    } else if (Notification.permission !== "denied") {
      Notification.requestPermission(permission => {
        if (permission === "granted") {
          new Notification("Holder Ready ✅");
        }
      });
    }
  }
});

export default store;
