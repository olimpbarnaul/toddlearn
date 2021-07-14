<template>
  <div class="section-menu">
    <router-link
      v-for="(item, k) in menu"
      :to="item.link"
      :key="k"
      class="button-xl"
    >
      {{ item.title }}
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    menu: Array,
  },
};
</script>

<style scoped>
.section-menu {
  @apply flex-wrap;
}
.section-menu .button-xl {
  @apply mx-2;
}
</style>
