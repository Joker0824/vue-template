import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

/* 根级别的state,getters,mutations,actions */
import state from "./state";
import getters from "./getters";
import mutations from "./mutations";
import actions from "./actions";

/* store模块 */
import app from "./modules/app";

export default new Vuex.Store({
  modules: {
    app
  },
  state,
  mutations,
  actions,
  getters
});
