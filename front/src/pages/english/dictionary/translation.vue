<template>
  <div class="page">
    <div class="card">
      <h1 v-if="this.wordGroups">
        <div>Слов {{ this.wordGroups[this.currentGroup].length }}</div>
        <div @click="requestChangeMaxWordsInGroup">
          Группа {{ this.currentGroup + 1 }} / {{ this.wordGroups.length }}
        </div>
      </h1>
      <label class="word w-full flex justify-between">
        <span>{{ currentWord }}</span>
        <span v-show="this.typedResult">-</span>
        <span>{{ typedResult }}</span>
      </label>
      <div v-if="this.typing" class="w-full">
        <div class="keys">
          <div v-for="n in this.keys" :key="n" @click="type(n)">
            {{ n }}
          </div>
          <div @click="backspace">←</div>
        </div>
        <button
          @click="checkTask(true)"
          class="give-up"
          :class="this.buttonInvisible"
        >
          Сдаюсь
        </button>
      </div>
      <div v-else>
        <div class="flex items-center">
          <img src="/static/sound.svg" @click="playCurrentWord" class="play" />
          <label class="ok" :class="this.ok.toString()">
            {{ this.dictionary[this.currentWord] }}
          </label>
        </div>
        <button
          @click="startTask"
          class="next"
          :class="this.buttonInvisible + this.ok.toString()"
        >
          Дальше
        </button>
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
    typedResult: "",
    ok: false,
    buttonInvisible: "",
  }),
  methods: {
    type(n) {
      this.typedResult += n;
      this.checkTask();
    },
    backspace() {
      this.typedResult = this.typedResult.slice(0, -1);
    },
    checkTask(forceFinish) {
      this.ok = this.currentVariants.indexOf(this.typedResult) > -1;
      if (forceFinish || this.ok){
        this.typing = false;
        this.playCurrentWord();
        event.target.value = "";
        this.hideButtons();
      }
    },

    playCurrentWord() {
      play([
        this.currentWord,
        { word: this.dictionary[this.currentWord], lang: "ru" },
      ]);
    },
    startTask() {
      if (!this.playing) {
        if (this.ok) play({ word: praise(), lang: "ru" });
        else play({ word: solace(), lang: "ru" });
      }
      this.$store.commit("english/setRandomWord", this.ok);
      this.typedResult = "";
      this.typing = true;
      this.ok = false;
      this.hideButtons();
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
    hideButtons() {
      this.buttonInvisible = "invisible ";
      setTimeout(() => (this.buttonInvisible = ""), 3000);
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
    keys() {
      const letters = "ёйцукенгшщзхъфывапролджэячсмитьбю".split("");
      const set = new Set(this.currentVariants[0].split(""));
      while (set.size < 11) set.add(letters[parseInt(Math.random() * 33)]);
      return Array.from(set).sort();
    },
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
