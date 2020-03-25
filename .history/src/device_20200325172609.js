import store from "./store";
import iQOS from "iqos";
import webbluetooth from "webbluetooth";

const update = () => {
    store.state.searchingForDevice
}

const iqos = new iQOS(webbluetoothl, update);
iqos.start();

