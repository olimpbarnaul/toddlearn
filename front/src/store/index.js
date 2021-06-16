import Vue from "vue";
import Vuex from "vuex";
import english from "./modules/english";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null,
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
      localStorage.setItem("userId", user.id);
    },
  },
  actions: {
    fetchUser(context) {
      this._vm.axios
        .get(process.env.VUE_APP_API_URL + "/accounts/user")
        .then(({ data }) => {
          context.commit("setUser", data);
        });
    },
  },
  modules: { english: english },
});
