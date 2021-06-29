<template>
  <div class="page">
    <div class="card">
      <h1 v-if="wordGroups">
        <div>Слов {{ wordGroups[currentGroup].length }}</div>
        <div @click="requestChangeMaxWordsInGroup">
          Группа {{ currentGroup + 1 }} / {{ wordGroups.length }}
        </div>
      </h1>
      <label class="word w-full flex justify-between">
        <span>{{ currentWord }}</span>
        <span v-show="typedResult">-</span>
        <span>{{ typedResult }}</span>
      </label>
      <div v-if="typing" class="w-full">
        <div class="keys">
          <div v-for="n in keys" :key="n" @click="type(n)">
            {{ n }}
          </div>
          <div @click="backspace">←</div>
        </div>
        <button
          @click="checkTask(true)"
          class="give-up"
          :class="buttonInvisible"
        >
          Сдаюсь
        </button>
      </div>
      <div v-else>
        <div class="flex items-center">
          <img src="/static/sound.svg" @click="playCurrentWord" class="play" />
          <label class="ok" :class="ok.toString()">
            {{ dictionary[currentWord] }}
          </label>
        </div>
        <button
          @click="startTask"
          class="next"
          :class="buttonInvisible + ok.toString()"
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
      if (forceFinish || this.ok) {
        this.typing = false;
        this.playCurrentWord();
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
    ok() {
      return this.currentVariants.indexOf(this.typedResult) > -1;
    },
    keys() {
      const letters = "ёйцукенгшщзхъфывапролджэячсмитьбю".split("");
      const set = new Set(this.currentVariants[0].split(""));
      while (set.size < 11) set.add(letters[parseInt(Math.random() * 33)]);
      return Array.from(set).sort();
    },
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
