<template>
  <section-menu :menu="$options.menu" />
</template>
<script>
import SectionMenu from "../../components/SectionMenu";
export default {
  menu: [
    { title: "Слово - перевод", link: "/english/translateWord" },
    { title: "Перевод - слово", link: "/english/wordTranslate" },
    { title: "Listening", link: "/english/listening" },
    { title: "Аудирование", link: "/english/listeningRu" },
    { title: "Брейншторм",  link: "/english/brainstorm" },
  ],
  components: {
    SectionMenu,
  },
};
</script>
