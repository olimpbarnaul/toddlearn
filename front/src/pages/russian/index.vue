<template>
  <section-menu :menu="$options.menu" />
</template>
<script>
import SectionMenu from "../../components/SectionMenu";
export default {
  menu: [{ title: "Алфавит", link: "/russian/alphabet" }],
  components: {
    SectionMenu,
  },
};
</script>
