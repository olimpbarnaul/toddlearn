export default {
  namespaced: true,
  state: () => ({
    maxWordsInGroup: 15,
    dictionary: null,
    wordGroups: null,
    currentGroup: null,
    currentWord: null,
    currentVariants: [],
  }),
  mutations: {
    setDictionary(state, data) {
      state.dictionary = data;
      localStorage.setItem(
        localStorage.userId + ".english.dictionary",
        JSON.stringify(data)
      );
    },
    setWordGroups(state, data) {
      state.wordGroups = data;
      localStorage.setItem(
        localStorage.userId + ".english.wordGroups",
        JSON.stringify(data)
      );
    },
    setRandomWord(state, deleteCurrentWord) {
      if (state.currentGroup === null)
        state.currentGroup =
          localStorage.getItem(localStorage.userId + ".english.currentGroup") ||
          0;
      let words = state.wordGroups[state.currentGroup];
      if (deleteCurrentWord) {
        words.splice(words.indexOf(state.currentWord), 1);
        localStorage.setItem(
          localStorage.userId + ".english.wordGroups",
          JSON.stringify(state.wordGroups)
        );
        if (words.length === 0) {
          words = state.wordGroups[++state.currentGroup];
          localStorage.setItem(
            localStorage.userId + ".english.currentGroup",
            state.currentGroup
          );
        }
      }
      state.currentWord = words[parseInt(Math.random() * words.length)];
      state.currentVariants = state.dictionary[state.currentWord].split(",");
    },
  },
  actions: {
    fetchDictionary(context) {
      const userId = localStorage.userId;
      const dictionary = localStorage.getItem(userId + ".english.dictionary");
      if (dictionary) {
        context.commit("setDictionary", JSON.parse(dictionary));
        context.commit(
          "setWordGroups",
          JSON.parse(localStorage.getItem(userId + ".english.wordGroups"))
        );
        context.commit("setRandomWord");
      } else {
        this._vm.axios
          .get(process.env.VUE_APP_API_URL + "/english/api/dictionary")
          .then(({ data }) => {
            context.commit("setDictionary", data);
            context.commit(
              "setWordGroups",
              dictionaryToWordGroups(data, context.state.maxWordsInGroup)
            );
            context.commit("setRandomWord");
          });
      }
    },
  },
  getters: {},
};

const dictionaryToWordGroups = (dictionary, maxWordsInGroup) => {
  const words = Object.keys(dictionary);
  const wordGroups = [[]];
  let i = 0,
    j = 0;
  while (words.length > 0) {
    const key = parseInt(Math.random() * words.length);
    if (j == maxWordsInGroup) {
      i++;
      j = 0;
      wordGroups.push([]);
    }
    wordGroups[i].push(words[key]);
    j++;
    words.splice(key, 1);
  }
  return wordGroups;
};
