<template>
  <div class="page">
    <div class="card">
      <h1>
        <div>Ответы {{ successAnswers }}/{{ totalAnswers }}</div>
        <div>Уровень {{ level }}</div>
        <div>Правильно {{ efficiency }}%</div>
      </h1>
      <label class="task">
        {{ x }} {{ sign }} {{ y }} =
        <span class="typedResult" :class="(typing || ok).toString()">{{ typedResult }}</span>
      </label>
      <div v-if="this.typing" class="keys">
        <div
          v-for="n in [7, 8, 9, 4, 5, 6, 1, 2, 3, 0]"
          :key="n"
          @click="type(n)"
        >
          {{ n }}
        </div>
        <div class="invisible"></div>
        <div @click="backspace">←</div>
      </div>
      <div v-else class="result">{{ result }}</div>
      <button
        @click="startTask"
        :class="(this.typing ? 'invisible ' : '') + this.ok.toString()"
        class="next"
      >
        Дальше
      </button>
    </div>
  </div>
</template>
<script>
//import play from "../../plugins/playAudio.js";
//import api from "../../api.js";
export default {
  data: () => ({
    typing: null,
    ok: false,
    x: null,
    y: null,
    sign: null,
    typedResult: null,
    totalAnswers: null,
    successAnswers: null,
    praises: null,
    solaces: null,
  }),
  created() {
    this.getStoredInt("totalAnswers", 0);
    this.getStoredInt("successAnswers", 0);
    this.startTask();
 //   this.praises = api.getStatic("praise/" + localStorage.username);
    //this.solaces = api.getStatic("solace/" + localStorage.username);
  },
  computed: {
    level() {
      return parseInt(
        5 + (this.totalAnswers * 0.5 + this.successAnswers) * 0.2
      );
    },
    efficiency() {
      return ((this.successAnswers / this.totalAnswers) * 100).toFixed(2) || 0;
    },
    result() {
      return Math.round(this.x + (this.sign === "+" ? 1 : -1) * this.y);
    },
  },
  methods: {
    type(n) {
      this.typedResult += n;
      if (this.result.toString().length === this.typedResult.length)
        this.checkTask();
    },
    backspace() {
      this.typedResult = this.typedResult.slice(0, -1);
    },
    checkTask() {
      this.typing = false;
      this.ok = this.result === parseInt(this.typedResult);
      this.setStoredInt("totalAnswers", ++this.totalAnswers);
      this.ok && this.setStoredInt("successAnswers", ++this.successAnswers);
    //  if (this.ok) play({ word: this.praise(), lang: "ru" });
   //   else play({ word: this.solace(), lang: "ru" });
    },
    startTask() {
      this.typing = true;
      this.typedResult = "";
      this.sign = this.getRandomSign();
      this.x = this.getRandomNumber();
      this.y = this.getRandomNumber(this.x, this.sign);
    },
    getRandomNumber(x, sign) {
      return parseInt(Math.random() * (sign === "-" ? x : this.level));
    },
    getRandomSign() {
      return Math.random() < 0.5 ? "+" : "-";
    },
    getStoredInt(field, defValue) {
      this[field] =
        parseInt(
          localStorage.getItem(localStorage.username + ".math." + field)
        ) || defValue;
    },
    setStoredInt(field, value) {
      localStorage.setItem(localStorage.username + ".math." + field, value);
    },
//    praise() {
 //     return this.praises[parseInt(Math.random() * this.praises.length)];
  //  },
 //   solace() {
  //    return this.solaces[parseInt(Math.random() * this.solaces.length)];
   // },
  },
};
</script>
<style scoped>
label.task {
  margin-top: 1vh;
  margin-bottom: 1vh;
}
.result {
  font-size: 10vw;
}
.typedResult.false{
  text-decoration: line-through;
}
</style>
