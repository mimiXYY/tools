import vue from "vue";
import Vuex from "vuex";
import app from "./modules/app";
import dota from "./modules/dota";
vue.use(Vuex);
export default new Vuex.Store({
    modules: {
        app, dota
    }
});