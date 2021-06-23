<template>
  <div class="page">
    <div class="card">
      <h1 v-if="this.wordGroups">
        <div>Слов {{ this.wordGroups[this.currentGroup].length }}</div>
        <div @click="requestChangeMaxWordsInGroup">
          Группа {{ this.currentGroup + 1 }} / {{ this.wordGroups.length }}
        </div>
      </h1>
      <label class="word">{{ this.currentWord }}</label>
      <div v-if="this.typing">
        <input @input="check" autofocus />
        <button @click="check" class="give-up">Сдаюсь</button>
      </div>
      <div v-else>
        <div class="flex items-center">
          <img src="/static/sound.svg" @click="playCurrentWord" class="play" />
          <label class="ok" :class="this.ok.toString()">
            {{ this.dictionary[this.currentWord] }}
          </label>
        </div>
        <button @click="next">Дальше</button>
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
    requestChangeMaxWordsInGroup() {
      const newMaxWordsInGroup = parseInt(
        prompt("Сколько слов должно быть в группе?")
      );
      if (newMaxWordsInGroup)
        this.$store.dispatch(
          "english/changeMaxWordsInGroup",
          newMaxWordsInGroup
        );
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
label.word {
  @apply my-6;
}
</style>
