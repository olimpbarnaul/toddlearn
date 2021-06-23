<template>
  <div class="page">
    <div class="card">
      <h1>
        <div>Ответов {{ totalAnswers }}</div>
        <div>Правильных {{ successAnswers }}</div>
        <div>Уровень {{ level }}</div>
        <div>Эффективность {{ efficiency }}%</div>
      </h1>
      <label class="task">
        {{ x }} {{ sign }} {{ y }} =
        <input
          v-if="this.typing"
          id="result"
          type="text"
          v-model="typedResult"
        />
        <label v-else class="ok" :class="this.ok.toString()">{{
          result
        }}</label>
      </label>
      <button @click="next">Дальше</button>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    typing: null,
    ok: null,
    x: null,
    y: null,
    sign: null,
    typedResult: null,
    totalAnswers: null,
    successAnswers: null,
  }),
  created() {
    this.getStoredInt("totalAnswers", 0);
    this.getStoredInt("successAnswers", 0);
    this.startTask();
  },
  computed: {
    level() {
      return parseInt((this.totalAnswers * 0.5 + this.successAnswers) * 0.2);
    },
    efficiency() {
      return parseInt((this.successAnswers / this.totalAnswers) * 100) || 0;
    },
    result() {
      return this.x + (this.sign === "+" ? 1 : -1) * this.y;
    },
  },
  methods: {
    next() {
      this.typing ? this.checkTask() : this.startTask();
    },
    checkTask() {
      this.typing = false;
      this.ok = this.result === parseInt(this.typedResult);
      this.setStoredInt("totalAnswers", ++this.totalAnswers);
      this.ok && this.setStoredInt("successAnswers", ++this.successAnswers);
    },
    startTask() {
      this.typing = true;
      this.typedResult = "";
      this.sign = this.getRandomSign();
      this.x = this.getRandomNumber();
      this.y = this.getRandomNumber(this.x, this.sign);
    },
    getRandomNumber(x, sign) {
      return parseInt(Math.random() * (sign === "-" ? x : 5 + this.level));
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
  },
};
</script>
<style scoped>
#result {
  width: 3rem;
}
</style>
