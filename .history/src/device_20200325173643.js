import store from "./store";
import iQOS from "iqos";
import webbluetooth from "webbluetooth";

const update = () => {
    store.state.iqos = iqos;
}

const iqos = new iQOS(navigator.v, update);
