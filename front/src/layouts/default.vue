<template>
  <div>
    <header>
      <div>
        <router-link to="/" class="flex">Главная</router-link>
        <template v-if="this.$store.state.user">
          <router-link to="/english/dictionary/translation">
            Словарь
          </router-link>
          <router-link to="/math/arithmetic">
            Арифметика
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
