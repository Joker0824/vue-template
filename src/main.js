import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import "./plugins/element.js";
import i18n from "./i18n";

import Icon from "vue-svg-icon/Icon.vue";
Vue.component("icon", Icon);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount("#app");
