export default {
  namespaced: true,
  state: () => ({
    maxWordsInGroup: 10,
    dictionary: null,
    wordGroups: null,
    currentGroup: 0,
    currentWord: null,
    currentVariants: [],
  }),
  mutations: {
    setDictionary(state, data) {
      state.dictionary = data;
    },
    setWordGroups(state, data) {
      state.wordGroups = data;
    },
    setRandomWord(state, deleteCurrentWord) {
      const words = state.wordGroups[state.currentGroup];
      if (deleteCurrentWord)
        words.splice(words.indexOf(state.currentWord), 1);
      state.currentWord = words[parseInt(Math.random() * words.length)];
      state.currentVariants = state.dictionary[state.currentWord].split(",");
    },
  },
  actions: {
    fetchDictionary(context) {
      this._vm.axios
        .get(process.env.VUE_APP_API_URL + "/english/dictionary")
        .then(({ data }) => {
          context.commit("setDictionary", data);
          const words = Object.keys(data);

          const wordGroups = [[]];
          let i = 0,
            j = 0;
          while (words.length > 0) {
            const key = parseInt(Math.random() * words.length);
            if (j == context.state.maxWordsInGroup) {
              i++;
              j = 0;
              wordGroups.push([]);
            }
            wordGroups[i].push(words[key]);
            j++;
            words.splice(key, 1);
          }

          context.commit("setWordGroups", wordGroups);
          context.commit("setRandomWord");
        });
    },
  },
  getters: {},
};
