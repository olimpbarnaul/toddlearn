<template>
  <div class="text-5xl">
    Привет{{
      this.$store.state.user ? ", " + this.$store.state.user.firstName : ""
    }}
  </div>
</template>

<script>
export default {
  name: "home",
};
</script>

<style>
.text-5xl {
  text-shadow: 0 0 15px rgba(255, 255, 255, 1);
}
</style>
