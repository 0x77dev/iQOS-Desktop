import store from "./store";
import iQOS from "iqos";
import webbluetooth from "webbluetooth";

const update = () => {
    store.state.iqos = iqos;
}

const iqos = new iQOS(webbluetoothl, update);
iqos.start();

