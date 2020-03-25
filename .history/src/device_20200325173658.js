import store from "./store";
import iQOS from "iqos";
const update = () => {
    store.state.iqos = iqos;
}

const iqos = new iQOS(navigator.bluetooth, update);
