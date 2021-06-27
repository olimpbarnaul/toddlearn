import Vue from "vue";
import Vuex from "vuex";
import english from "./modules/english";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null,
    users: null,
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
      state.users = JSON.parse(localStorage.getItem("users")) || [];
      localStorage.setItem("username", user.username);
    },
    addToUsers(state, user) {
      state.users = state.users.filter(
        ({ username }) => user.username != username
      );
      state.users.push(user);
      localStorage.setItem("users", JSON.stringify(state.users));
    },
    deleteFromUsers(state, user) {
      state.users = state.users.filter(
        ({ username }) => user.username != username
      );
      localStorage.setItem("users", JSON.stringify(state.users));
    },
  },
  actions: {
    fetchUser(context) {
      this._vm.axios
        .get(process.env.VUE_APP_API_URL + "/api/users/me/")
        .then(({ data }) => {
          context.commit("setUser", data);
          context.commit("addToUsers", {
            username: data.username,
            firstName: data.firstName,
            authToken: localStorage.authToken,
          });
        })
        .catch(() => {});
    },
  },
  modules: { english: english },
});
