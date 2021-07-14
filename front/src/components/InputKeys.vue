<template>
  <div class="keys">
    <div v-for="n in keys" :key="n" @click="type(n)">
      {{ n }}
    </div>
    <div @click="type('Backspace')">←</div>
  </div>
</template>
<script>
export default {
  props: {
    value: String,
    keys: Array,
  },
  created() {
    document.addEventListener("keydown", this.dispatchType);
  },
  destroyed() {
    document.removeEventListener("keydown", this.dispatchType);
  },
  methods: {
    type(n) {
      if (this.keys.indexOf(n) >= 0) this.$emit("input", this.value + n);
      else if (n === "Backspace") this.$emit("input", this.value.slice(0, -1));
    },
    dispatchType({ key }) {
      this.type(key);
    },
  },
};
</script>
