<template>
  <div class="page">
    <h1 v-if="this.wordGroups">
      Слов {{ this.wordGroups[this.currentGroup].length }} <br />
      Группа {{ this.currentGroup + 1 }} / {{ this.wordGroups.length }}
    </h1>
    <div class="form">
      <label>{{ this.currentWord }}</label>
      <div v-if="this.typing" class="contents">
        <input @input="check" ref="input" autofocus/>
        <button @click="check" class="give-up">Сдаюсь</button>
      </div>
      <div v-else class="contents">
        <label :class="this.ok ? 'text-green-600' : 'text-red-600'">{{
          this.dictionary[this.currentWord]
        }}</label>
        <button @click="next" ref="next">Дальше</button>
      </div>
    </div>
  </div>
</template>
<script>
import { createNamespacedHelpers } from "vuex";
const { mapState } = createNamespacedHelpers("english");
export default {
  data: () => ({
    typing: true,
    ok: false,
  }),
  methods: {
    check(event) {
      if (
        event.target.nodeName === "INPUT" &&
        this.currentVariants.indexOf(event.target.value) > -1
      ) {
        this.typing = false;
        this.ok = true;
        event.target.value = "";
      } else if (event.target.nodeName === "BUTTON") {
        this.typing = false;
      }
    },
    next() {
      this.$store.commit("english/setRandomWord", this.ok);
      this.typing = true;
      this.ok = false;
    },
  },
  computed: {
    ...mapState({
      dictionary: "dictionary",
      wordGroups: "wordGroups",
      currentGroup: "currentGroup",
      currentWord: "currentWord",
      currentVariants: "currentVariants",
    }),
  },
  created() {
    this.$store.dispatch("english/fetchDictionary");
  },
};
</script>
<style scoped>
.page {
  background: rgba(255, 255, 255, 0.8);
  @apply flex-col;
}
h1 {
  @apply mt-20 text-center;
}
.form {
  @apply text-3xl flex items-center flex-col my-auto;
}
label {
  @apply mb-3;
}
input {
  @apply px-4 py-2;
}
button {
  @apply bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded mt-6 text-lg;
}
button.give-up {
  @apply bg-red-700 hover:bg-red-800;
}

</style>
