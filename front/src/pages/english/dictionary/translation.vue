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
          <img
            src="/static/sound.svg"
            @click="playWord"
            class="play"
            :class="this.playing ? 'invisible' : ''"
          />
          <label :class="this.ok ? 'text-green-600' : 'text-red-600'">{{
            this.dictionary[this.currentWord]
          }}</label>
        </div>
        <button @click="next" ref="next">Дальше</button>
      </div>
    </div>
  </div>
</template>
<script>
import { createNamespacedHelpers } from "vuex";
import play from "../../../plugins/playAudio.js";
const { mapState } = createNamespacedHelpers("english");
export default {
  data: () => ({
    typing: true,
    playing: false,
    ok: false,
  }),
  methods: {
    playWord() {
      if (!this.playing) {
        play(this.currentWord).then(() => {
          play(this.dictionary[this.currentWord], "ru");
        });
        this.playing = true;
        setTimeout(() => (this.playing = false), 3000);
      }
    },
    check(event) {
      this.ok = this.currentVariants.indexOf(event.target.value) > -1;
      if (this.ok || event.target.nodeName === "BUTTON") {
        this.typing = false;
        this.playWord();
        event.target.value = "";
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
  @apply text-3xl my-auto flex items-center flex-col;
}
.form > div {
  @apply flex items-center flex-col;
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
.play {
  @apply mr-2 cursor-pointer h-8;
}
</style>
