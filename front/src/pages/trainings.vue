<template>
  <section-menu :menu="$options.menu" />
</template>
<script>
import SectionMenu from "../components/SectionMenu";
export default {
  menu: [
    { title: "Русский язык", link: "/russian" },
    { title: "English", link: "/english" },
    { title: "Математика", link: "/math/arithmetic" },
  ],
  components: {
    SectionMenu,
  },
};
</script>
