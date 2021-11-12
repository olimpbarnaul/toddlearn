<template>
  <english-words
    :category="'listening'"
    :typing-check="'alphabet'"
    :lang="'ru'"
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
