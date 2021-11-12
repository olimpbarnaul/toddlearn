<template>
  <english-words
    :category="'listening'"
    :typing-check="'alphabet'"
    :lang="'en'"
  />
</template>
<script>
import EnglishWords from "../../components/english/EnglishWords";
export default {
  components: {
    EnglishWords,
  },
};
</script>
