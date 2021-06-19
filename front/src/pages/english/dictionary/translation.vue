<template>
  <div class="page">
    <h1 v-if="this.wordGroups">
      Слов {{ this.wordGroups[this.currentGroup].length }} <br />
      Группа {{ this.currentGroup + 1 }} / {{ this.wordGroups.length }}
    </h1>
    <div class="form">
      <label class="mb-3">{{ this.currentWord }}</label>
      <div v-if="this.typing">
        <input @input="check" ref="input" autofocus />
        <button @click="check" class="give-up">Сдаюсь</button>
      </div>
      <div v-else>
        <div class="flex items-center">
          <img src="/static/sound.svg" @click="playCurrentWord" class="play" />
          <label :class="this.ok ? 'text-green-600' : 'text-red-600'">
            {{ this.dictionary[this.currentWord] }}
          </label>
        </div>
        <button @click="next" ref="next">Дальше</button>
      </div>
    </div>
  </div>
</template>
<script>
import { createNamespacedHelpers } from "vuex";
import play from "../../../plugins/playAudio.js";
import praise from "../../../store/dict/praise.js";
import solace from "../../../store/dict/solace.js";
const { mapState } = createNamespacedHelpers("english");
export default {
  data: () => ({
    typing: true,
    ok: false,
  }),
  methods: {
    check(event) {
      this.ok =
        this.currentVariants.indexOf(event.target.value.toLowerCase()) > -1;
      if (this.ok || event.target.nodeName === "BUTTON") {
        this.typing = false;
        this.playCurrentWord();
        event.target.value = "";
      }
    },
    playCurrentWord() {
      play([
        this.currentWord,
        { word: this.dictionary[this.currentWord], lang: "ru" },
      ]);
    },
    next() {
      if (!this.playing) {
        if (this.ok) play({ word: praise(), lang: "ru" });
        else play({ word: solace(), lang: "ru" });
      }
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
  @apply text-3xl my-auto flex items-center flex-col max-w-full;
}
.form > div {
  @apply flex items-center flex-col max-w-full;
}
input {
  @apply px-4 py-2;
  max-width: 96%;
}
button {
  @apply bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded mt-6 text-lg;
}
button.give-up {
  @apply bg-red-700 hover:bg-red-800;
}
.play {
  @apply mr-2 cursor-pointer h-8;
}
</style>
