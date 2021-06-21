<template>
  <div></div>
</template>
<script>
export default {
  created() {
    localStorage.clear();
    document.location.href = "/";
  },
};
</script>
