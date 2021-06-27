<template>
  <div class="page">
    <div class="card">
      <h1 class="justify-center">Сменить пользователя</h1>
      <div class="item" v-for="item in users" :key="item.username">
        <div
          @click="switchUser(item)"
          :class="user.username === item.username ? 'text-blue-400' : ''"
        >
          {{ item.firstName }}
        </div>
        <img @click="logoutUser(item)" src="/static/trash.svg" />
      </div>
      <router-link class="button" to="/auth/login">Добавить</router-link>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  data: () => ({
    username: null,
    password: null,
  }),
  methods: {
    switchUser(newUser) {
      localStorage.setItem("authToken", newUser.authToken);
      window.location.href = "/";
    },
    logoutUser(deletedUser) {
      this.$store.commit("deleteFromUsers", deletedUser);
    },
  },
  computed: mapState(["users", "user"]),
};
</script>
<style scoped>
.item {
  @apply flex flex-row self-stretch justify-between;
}
.item > * {
  @apply cursor-pointer;
}
.item img {
  width: 5vw;
}
</style>
