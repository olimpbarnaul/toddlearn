<template>
  <english-words :category="'listening'" :typing-check="'alphabetEn'" />
</template>
<script>
import EnglishWords from "../../components/english/EnglishWords";
export default {
  components: {
    EnglishWords,
  },
};
</script>
