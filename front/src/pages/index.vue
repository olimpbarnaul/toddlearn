<template>
  <div class="text-5xl">Hello</div>
  <!--<HelloWorld msg="Welcome to Your Vue.js App" />-->
</template>

<script>
// @ is an alias to /src
//import HelloWorld from "@/components/HelloWorld.vue";
export default {
  name: "home",
  components: {
    //HelloWorld,
  },
  created() {
    this.axios.get("api/user");
  },
};
</script>

<style>
.text-5xl {
  text-shadow: 0 0 15px rgba(255, 255, 255, 1);
}
</style>
