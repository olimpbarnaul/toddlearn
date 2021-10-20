<template>
  <div class="page">
    <div class="card">
      <h1 v-if="groups && currentGroup !== null">
        <div @click="changeMaxWordsInGroup">
          Слово {{ maxWordsInGroup - groups[currentGroup].length + 1 }} /
          {{ maxWordsInGroup }}
        </div>
        <div>Группа {{ currentGroup + 1 }} / {{ groups.length }}</div>
      </h1>
      <label class="translate-word">
        <span :class="{ invisible: typing && category === 'listening' }">{{
          currentWord
        }}</span>
        <img
          src="/static/sound.svg"
          @click="playCurrentWord"
          class="play"
          :class="{ invisible: typing && category !== 'listening' }"
        />
        <span class="typed">{{ typedResult }}</span>
      </label>
      <div v-if="!currentWord && groups && groups.length" class="text-center">
        <img src="https://lifeo.ru/wp-content/uploads/gif-salyut-10.gif" />
        <h2>Поздравляю! Ты победитель!</h2>
        <button @click="startTask(true)" class="next">Сброс</button>
      </div>
      <template v-else-if="typing" class="w-full">
        <input-keys :keys="keys" v-model="typedResult" />
        <button
          @click="checkTask(true)"
          class="give-up"
          :class="buttonInvisible"
        >
          Сдаюсь
        </button>
      </template>
      <template v-else>
        <div class="flex items-center">
          <label class="ok" :class="ok.toString()">
            {{ dictionary[currentWord] }}
          </label>
        </div>
        <button
          @click="startTask(false)"
          class="next"
          :class="buttonInvisible + ok.toString()"
        >
          Дальше
        </button>
      </template>
    </div>
  </div>
</template>
<script>
import InputKeys from "../InputKeys";
import player from "../../plugins/playAudio.js";
import api from "../../api.js";
export default {
  data: () => ({
    typing: true,
    typedResult: "",
    buttonInvisible: "",
    dictionary: null,
    groups: null,
    currentWord: null,
    maxWordsInGroup: null,
    praises: null,
    solaces: null,
  }),
  props: {
    revers: Boolean,
    category: String,
    typingCheck: String,
  },
  components: { InputKeys },
  methods: {
    async fetchDictionary() {
      this.dictionary = await api.getStatic(
        "english/dictionary/" + localStorage.username,
        {}
      );
      if (this.revers) this.dictionary = this.reverse(this.dictionary);
      this.maxWordsInGroup = parseInt(
        await api.getUserData("maxWordsInGroup", 10)
      );
      this.groups = await api.getUserData("groups");
      this.startTask(!this.groups, true);
      this.praises = await api.getStatic("praise/" + localStorage.username);
      this.solaces = await api.getStatic("solace/" + localStorage.username);
    },
    checkTask(forceFinish) {
      if (forceFinish || this.ok) {
        this.typing = false;
        this.hideButtons();
        if (this.category === "listening") {
          if (this.ok) player.play({ word: this.praise() });
          else if (parseInt(process.env.VUE_APP_SOLACE))
            player.play({
              word:
                this.currentWord.length === 1
                  ? this.currentWord
                  : this.solace(),
            });
        } else {
          this.playCurrentWord();
        }
      }
    },
    startTask(formGroups, firstTime) {
      if (formGroups) this.formGroups();
      if (!firstTime && this.category !== "listening") {
        if (this.ok) player.play({ word: this.praise() });
        else if (parseInt(process.env.VUE_APP_SOLACE))
          player.play({ word: this.solace() });
      }
      if (this.ok) this.delCurrentWord();
      this.setCurrentWord();
      if (this.category === "listening") this.playCurrentWord();
      this.typing = true;
      this.hideButtons();
    },
    async changeMaxWordsInGroup() {
      const newMaxWordsInGroup = parseInt(
        prompt("Сколько слов должно быть в группе?", this.maxWordsInGroup)
      );
      if (newMaxWordsInGroup !== this.maxWordsInGroup) {
        this.maxWordsInGroup = newMaxWordsInGroup;
        this.startTask(true);
        await api.setUserData("maxWordsInGroup", newMaxWordsInGroup);
        await api.setUserData("groups", this.groups);
      }
    },
    playCurrentWord() {
      player.play([
        this.revers ? this.dictionary[this.currentWord] : this.currentWord,
        //    { word: this.dictionary[this.currentWord], lang: "ru" },
      ]);
    },
    hideButtons() {
      this.buttonInvisible = "invisible ";
      setTimeout(() => (this.buttonInvisible = ""), 3000);
    },
    formGroups() {
      const words = Object.keys(this.dictionary);
      const wordGroups = [[]];
      let i = 0,
        j = 0;
      while (words.length > 0) {
        const key = parseInt(Math.random() * words.length);
        if (j == this.maxWordsInGroup) {
          i++;
          j = 0;
          wordGroups.push([]);
        }
        wordGroups[i].push(words[key]);
        j++;
        words.splice(key, 1);
      }
      this.groups = wordGroups;
    },
    delCurrentWord() {
      let words = this.groups[this.currentGroup];
      words.splice(words.indexOf(this.currentWord), 1);
    },
    setCurrentWord() {
      this.typedResult = "";
      let words = this.groups[this.currentGroup];
      const choiceWords = words.filter(
        (word) => word !== this.currentWord || words.length === 1
      );

      this.currentWord =
        choiceWords[parseInt(Math.random() * choiceWords.length)];
    },
    keydown(key) {
      if (key.key === "Enter") {
        this.typing ? this.checkTask(true) : this.startTask();
      } else if (key.key === "Escape1") {
        if (this.typing) {
          this.typedResult = this.currentVariants[0];
          this.checkTask(true);
        } else {
          this.startTask();
        }
      } else if ([" ", "r"].indexOf(key.key) > -1) {
        key.stopPropagation();
        key.preventDefault();
        return false;
      }
    },
    praise() {
      return this.praises[parseInt(Math.random() * this.praises.length)];
    },
    solace() {
      return this.solaces[parseInt(Math.random() * this.solaces.length)];
    },
    reverse(dict) {
      const obj = {};
      for (const [key, value] of Object.entries(dict)) {
        obj[value] = key;
      }
      return obj;
    },
  },
  computed: {
    ok() {
      let typed = this.typedResult.replace(/ +(?= )/g, "").trim();
      return this.typingCheck === "word"
        ? this.currentWord === typed
        : this.currentVariants.indexOf(typed) > -1;
    },
    keys() {
      if (this.currentVariants && this.currentWord) {
        const alphabetRu = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя".split("");
        const alphabetEn = "abcdefghijklmnopqrstuvwxyz".split("");
        const letters =
          alphabetEn.indexOf(
            this.typingCheck === "word"
              ? this.currentWord[0].toLowerCase()
              : this.currentVariants[0][0].toLowerCase()
          ) >= 0
            ? alphabetEn
            : alphabetRu;

        const set = new Set(
          this.typingCheck === "word"
            ? this.currentWord
            : this.currentVariants.join("").split("")
        );
        while (set.size < 11)
          set.add(letters[parseInt(Math.random() * letters.length)]);
        return Array.from(set).sort();
      }
      return null;
    },
    currentGroup() {
      if (Array.isArray(this.groups))
        for (let i = 0; i < this.groups.length; i++)
          if (this.groups[i].length) return i;
      return null;
    },
    currentVariants() {
      return this.dictionary && this.currentWord
        ? this.dictionary[this.currentWord].split(",").map((a) => a.trim())
        : [];
    },
  },
  mounted() {
    this.fetchDictionary();
    document.addEventListener("keydown", this.keydown);
  },
  destroyed() {
    document.removeEventListener("keydown", this.keydown);
  },
  watch: {
    typedResult() {
      this.checkTask();
    },
    currentGroup() {
      api.setUserData("groups", this.groups);
    },
  },
};
</script>
<style scoped>
.translate-word {
  @apply w-full flex;
}

.translate-word img {
  margin: 0;
}
.translate-word span {
  width: calc(50% - 5vw);
}
</style>
