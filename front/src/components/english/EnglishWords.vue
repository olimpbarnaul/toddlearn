<template>
  <div class="page">
    <div class="card">
      <h1 v-if="groups && currentGroup !== null">
        <div @click="changeMaxWordsInGroup">
          Слово {{ maxWordsInGroup - groups[currentGroup].length + 1 }} /
          {{ maxWordsInGroup }}
        </div>
        <div @click="showGroupsInfo">
          Группа {{ currentGroup + 1 }} / {{ groups.length }}
        </div>
      </h1>
      <label class="translate-word">
        <div
          class="flex items-center"
          :class="{
            invisible: typing && category === 'listening',
            'justify-center': isAlphabet,
          }"
        >
          {{ typingCheck === "word" ? dictionary[currentWord] : currentWord }}
        </div>
        <img
          src="/static/sound.svg"
          @click="playCurrentWord"
          class="play"
          :class="{ invisible: typing && category !== 'listening' }"
        />

        <div
          class="flex flex-col"
          :class="isAlphabet ? 'items-center' : 'items-end'"
        >
          <span
            v-if="!ok && !isAlphabet"
            class="typed"
            :class="{ 'line-through': !typing && !ok }"
            >{{ typedResult }}</span
          >
          <label v-if="!typing" class="text-right">
            {{
              isAlphabet
                ? dictionary[currentWord].toUpperCase()
                : typingCheck === "word"
                ? currentWord
                : dictionary[currentWord]
            }}
          </label>
        </div>
      </label>
      <div v-if="groups && !wordsInGroups" class="text-center">
        <img src="https://source.unsplash.com/800x600/?firework,winner" />
        <h2>Поздравляю! Ты победитель!</h2>
        <button @click="startTask(true)" class="next">Сброс</button>
      </div>
      <template v-else-if="groups && typing" class="w-full">
        <input-keys
          :keys="keys"
          :caps="isAlphabet ? Math.random() < 0.5 : false"
          :backspace="!isAlphabet"
          v-model="typedResult"
        />
        <button
          @click="checkTask(true)"
          class="give-up"
          :class="buttonInvisible"
        >
          Сдаюсь
        </button>
      </template>
      <template v-else-if="groups">
        <img
          v-if="!isAlphabet"
          class="illustration"
          :src="'https://source.unsplash.com/800x600/?' + currentWord"
        />
        <button
          @click="startTask(false)"
          class="next"
          :class="buttonInvisible + ok.toString()"
        >
          Дальше
        </button>
      </template>
      <div v-else class="m-auto">
        <img class="illustration" src="/static/loading.gif" />
      </div>
    </div>
  </div>
</template>
<script>
import InputKeys from "../InputKeys";
import player from "../../plugins/playAudio.js";
import { alphabet, checkLang } from "../../plugins/lang.js";
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
    answered: new Map(),
    factor: 1,
    attempts: 1,
  }),
  props: {
    revers: Boolean,
    category: String,
    typingCheck: {
      type: String,
      default: "",
    },
    lang: String,
  },
  components: { InputKeys },
  methods: {
    async fetchDictionary() {
      if (this.isAlphabet) {
        this.factor = 3;
        this.dictionary = {};
        alphabet[this.lang].forEach((letter) => {
          this.dictionary[letter] = letter;
        });
      } else {
        this.dictionary = await api.getStatic(
          "english/dictionary/" + localStorage.username,
          {}
        );
      }
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
      if (forceFinish || this.ok || this.typedFullfilled) {
        this.attempts += 1;
        this.typing = false;
        this.hideButtons();
        if (this.category === "listening") {
          if (this.ok)
            player.play(
              (Math.random() < 0.2
                ? this.$store.state.user.firstName + "!"
                : "") + this.praise(),
              true
            );
          else if (this.typedResult.length) player.play("Неправильно", true);
          else this.playCurrentWord();
        } else {
          this.playCurrentWord();
        }
      }
    },
    startTask(formGroups, firstTime) {
      if (formGroups) this.formGroups();
      if (!firstTime && this.category !== "listening") {
        if (this.ok) player.play(this.praise(), true);
        else if (parseInt(process.env.VUE_APP_SOLACE))
          player.play(this.solace(), true);
      }
      if (this.ok) {
        this.incMap(this.answered, this.currentWord);
        if (this.answered.get(this.currentWord) >= this.factor)
          this.delCurrentWord();
      } else if (this.currentWord) {
        this.decMap(this.answered, this.currentWord, this.isAlphabet ? 5 : 1);
      }
      this.setCurrentWord();
      if (this.category === "listening") this.playCurrentWord();
      this.typing = true;
      this.hideButtons();
    },
    incMap(map, key) {
      map.set(key, (map.get(key) || 0) + 1);
    },
    decMap(map, key, limit) {
      map.set(key, Math.max((map.get(key) || 0) - 1, -1 * limit));
    },
    async changeMaxWordsInGroup() {
      let newMaxWordsInGroup = parseInt(
        prompt(
          `Сколько слов должно быть в группе? Всего ${this.dictCount}.`,
          this.maxWordsInGroup
        )
      );
      if (
        !isNaN(newMaxWordsInGroup) &&
        newMaxWordsInGroup !== this.maxWordsInGroup
      ) {
        newMaxWordsInGroup = Math.min(newMaxWordsInGroup, this.dictCount);
        newMaxWordsInGroup = Math.max(newMaxWordsInGroup, 1);
        this.maxWordsInGroup = newMaxWordsInGroup;
        this.startTask(true);
        await api.setUserData("maxWordsInGroup", newMaxWordsInGroup);
        await api.setUserData("groups", this.groups);
      }
    },
    playCurrentWord() {
      player.play(
        this.revers ? this.dictionary[this.currentWord] : this.currentWord
      );
    },
    hideButtons() {
      this.buttonInvisible = "invisible ";
      setTimeout(() => (this.buttonInvisible = ""), 1000);
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
    showGroupsInfo() {
      alert(`Осталось всего слов: ${this.wordsInGroups}`);
    },
  },
  computed: {
    isAlphabet() {
      return this.typingCheck === "alphabet";
    },
    wordsInGroups() {
      let count = 0;
      if (this.groups)
        for (let i = 0; i < this.groups.length; i++)
          count += this.groups[i].length;
      return count;
    },
    typedFormatted() {
      return this.typedResult.replace(/ +(?= )/g, "").trim();
    },
    ok() {
      return this.typingCheck === "word"
        ? this.currentWord === this.typedFormatted
        : this.currentVariants.indexOf(this.typedFormatted) > -1;
    },
    typedFullfilled() {
      return this.typingCheck === "word"
        ? this.currentWord.length === this.typedFormatted.length
        : Math.max(...this.currentVariants.map((el) => el.length)) ===
            this.typedFormatted.length;
    },
    dictCount() {
      return Object.keys(this.dictionary).length;
    },
    keys() {
      if (this.currentVariants && this.currentWord) {
        const letters =
          alphabet[
            checkLang(
              this.typingCheck === "word"
                ? this.currentWord
                : this.currentVariants
            )
          ];

        const set = new Set(
          this.typingCheck === "word"
            ? this.currentWord
            : this.currentVariants.join("").split("")
        );
        while (set.size < (this.isAlphabet ? 9 : 11))
          set.add(
            letters[
              parseInt(
                (Math.random() * letters.length * this.attempts) / this.attempts
              )
            ]
          );
        return Array.from(set).sort(() => 0.5 - Math.random());
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
    window.onbeforeunload = () => "";
  },
  destroyed() {
    document.removeEventListener("keydown", this.keydown);
    window.onbeforeunload = null;
  },
  watch: {
    typedResult() {
      this.checkTask();
    },
    groups() {
      if (!((this.maxWordsInGroup - this.groups[this.currentGroup].length) % 9))
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
.translate-word div {
  width: calc(50% - 5vw);
}
</style>
