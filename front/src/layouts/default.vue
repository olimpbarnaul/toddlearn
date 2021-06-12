<template>
  <div>
    <header>
      <div>
        <router-link to="/" class="flex">
          <img src="/static/favicon.png" class="h-6 mr-1" />
          Главная
        </router-link>
        <router-link to="/english/dictionary/translation">
          Словарь
        </router-link>
        <div v-if="this.$store.state.user">
          <span>{{ this.$store.state.user.name }}</span>
          <a :href="'/accounts/logout'">Выйти</a>
        </div>
        <div v-else>
          <a :href="'/accounts/login'">Войти</a>
        </div>
      </div>
    </header>
    <router-view class="router-view" />
  </div>
</template>
<style>
body {
  background: no-repeat center/cover url(https://source.unsplash.com/random);
}
header {
  @apply flex-none relative z-50 text-sm leading-6 font-medium bg-white ring-1 ring-gray-900 ring-opacity-5 shadow-sm py-5 text-xl;
  @apply fixed inset-x-0;
}
header > div {
  @apply mx-auto px-4 sm:px-6 lg:px-8 w-full flex justify-between  flex-wrap sm:flex-nowrap container;
}
.router-view {
  @apply container min-h-screen mx-auto flex justify-center items-center;
}
</style>
