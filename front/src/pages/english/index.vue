<template>
  <section-menu :menu="$options.menu" />
</template>
<script>
import SectionMenu from "../../components/SectionMenu";
export default {
  menu: [
    { title: "Alphabet", link: "/english/alphabet" },
    { title: "Слово - перевод", link: "/english/translateWord" },
    { title: "Перевод - слово", link: "/english/wordTranslate" },
    { title: "Listening", link: "/english/listening" },
    { title: "Аудирование", link: "/english/listeningRu" },
  ],
  components: {
    SectionMenu,
  },
};
</script>
