<template>
  <div>
    <header>
      <div>
        <router-link to="/" class="flex">Главная</router-link>
        <template v-if="this.$store.state.user">
          <router-link to="/english">English</router-link>
          <router-link to="/math/arithmetic">Математика</router-link>
          <router-link to="/auth/switch">{{
            $store.state.user.firstName
          }}</router-link>
        </template>
        <div v-else>
          <router-link to="/auth/login">Войти</router-link>
        </div>
      </div>
    </header>
    <router-view class="router-view" />
  </div>
</template>
