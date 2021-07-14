import Vue from "vue";
import "./plugins/axios";
import App from "./App.vue";
import router from "./router";
import "./assets/tailwind.css";
import "./assets/style.css";
import store from "./store.js";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
  created() {
    const authToken = localStorage.authToken;
    if (authToken)
      this.$axios.defaults.headers.common["Authorization"] =
        "Token " + authToken;
    this.$store.dispatch("fetchUser");
  },
}).$mount("#app");
