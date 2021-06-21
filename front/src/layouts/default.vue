<template>
  <div>
    <header>
      <div>
        <router-link to="/" class="flex">Главная</router-link>
        <template v-if="this.$store.state.user">
          <router-link to="/english/dictionary/translation">
            Словарь
          </router-link>
          <a :href="'/accounts/logout/'">&nbsp; Выйти</a>
        </template>
        <div v-else>
          <a :href="'/accounts/login/'">Войти</a>
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
  @apply mx-auto px-4 w-full flex justify-between  flex-wrap sm:flex-nowrap container;
}
.router-view {
  @apply container min-h-screen mx-auto flex justify-center items-center;
}
</style>
