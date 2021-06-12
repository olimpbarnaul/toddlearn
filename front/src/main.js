import Vue from "vue";
import "./plugins/axios";
import App from "./App.vue";
import router from "./router";
import "./assets/tailwind.css";
import "./assets/style.css";
import store from "./store";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
  created() {
    this.axios.get(process.env.VUE_APP_API_URL + "/accounts/user");
  },
}).$mount("#app");
