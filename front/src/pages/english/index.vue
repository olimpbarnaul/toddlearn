<template>
  <section-menu :menu="$options.menu" />
</template>
<script>
import SectionMenu from "../../components/SectionMenu";
export default {
  menu: [
    { title: "Аудирование", link: "/english/listeningRu" },
    { title: "Слово - перевод", link: "/english/translateWord" },
    { title: "Listening", link: "/english/listening" },
    { title: "Перевод - слово", link: "/english/wordTranslate" },
    { title: "Alphabet", link: "/english/alphabet" },
  ],
  components: {
    SectionMenu,
  },
};
</script>
