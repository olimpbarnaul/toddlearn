<template>
  <section-menu :menu="$options.menu" />
</template>
<script>
import SectionMenu from "../../components/SectionMenu";
export default {
  menu: [
    { title: "Слово - перевод", link: "/english/translateWord" },
    { title: "Перевод - слово", link: "/english/wordTranslate" },
    { title: "Аудирование", link: "/english/listening" },
    { title: "Брейншторм",  link: "/english/brainstorm" },
  ],
  components: {
    SectionMenu,
  },
};
</script>
