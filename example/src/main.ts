import Vue from "vue";
import VueSimpleAlert from "vue-simple-alert";

import App from "./App.vue";

Vue.config.productionTip = false;

Vue.use(VueSimpleAlert);

new Vue({
  render: h => h(App)
}).$mount("#app");
