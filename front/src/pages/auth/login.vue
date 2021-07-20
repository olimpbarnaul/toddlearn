<template>
  <div class="page">
    <div class="card">
      <h1 class="justify-center">Авторизация</h1>
      <label>логин </label>
      <input type="text" v-model="username" />
      <label>пароль </label>
      <input type="password" v-model="password" />
      <button
        @click="submit"
        :class="this.username && this.password ? '' : 'invisible'"
      >
        Войти
      </button>
    </div>
  </div>
</template>
<script>
import api from "../../api.js";
export default {
  data: () => ({
    username: null,
    password: null,
  }),
  methods: {
    async submit() {
      const { username, password } = this;
      const { data } = await api.login(username, password);
      if (data && data.authToken) {
        localStorage.setItem("authToken", data.authToken);
        window.location.href = "/";
      }
    },
  },
};
</script>
<style scoped></style>
