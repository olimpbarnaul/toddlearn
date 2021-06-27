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
export default {
  data: () => ({
    username: null,
    password: null,
  }),
  methods: {
    submit() {
      const { username, password } = this;
      this.$axios
        .post("/api/token/login/", { username, password })
        .then((response) => {
          localStorage.setItem("authToken", response.data.authToken);
          window.location.href = "/";
        });
    },
  },
};
</script>
<style scoped></style>
