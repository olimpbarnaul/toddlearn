export default {
  namespaced: true,
  state: () => ({
    maxWordsInGroup: null,
    dictionary: null,
    wordGroups: null,
    currentGroup: null,
    currentWord: null,
    currentVariants: [],
  }),
  mutations: {
    setDictionary(state, data) {
      state.dictionary = data;
      setStored(state, "dictionary");
    },
    setMaxWordsInGroup(state, data) {
      state.maxWordsInGroup = data;
      setStoredInt(state, "maxWordsInGroup");
    },
    setCurrentGroup(state, data) {
      state.currentGroup = data;
      setStoredInt(state, "currentGroup");
    },
    setWordGroups(state, data) {
      state.wordGroups = data;
      setStored(state, "wordGroups");
    },
    setRandomWord(state, deleteCurrentWord) {
      let words = state.wordGroups[state.currentGroup];
      if (deleteCurrentWord) {
        words.splice(words.indexOf(state.currentWord), 1);
        setStored(state, "wordGroups");
        if (words.length === 0) {
          words = state.wordGroups[++state.currentGroup];
          setStoredInt(state, "currentGroup");
        }
      }
      state.currentWord = words[parseInt(Math.random() * words.length)];
      state.currentVariants = state.dictionary[state.currentWord]
        .split(",")
        .map((a) => a.trim());
    },
  },
  actions: {
    fetchDictionary({ commit, dispatch }) {
      const dictionary = getStored("dictionary");
      if (dictionary) {
        commit("setDictionary", dictionary);
        dispatch("formGroups");
      } else {
        const connect = require("axios").create();
        connect
          .get("/static/dict/" + localStorage.username + ".json")
          .then(({ data }) => {
            commit("setDictionary", data);
            dispatch("formGroups", true);
          });
      }
    },
    formGroups({ commit, state: { dictionary } }, force) {
      const groups = force
        ? dictionaryToWordGroups(
            dictionary,
            getStoredInt("maxWordsInGroup", 10)
          )
        : getStored("wordGroups");

      commit("setWordGroups", groups);
      commit("setCurrentGroup", force ? 0 : getStoredInt("currentGroup", 0));
      commit("setRandomWord");
    },
    changeMaxWordsInGroup({ commit, dispatch }, value) {
      commit("setMaxWordsInGroup", value);
      dispatch("formGroups", true);
    },
  },
  getters: {},
};

const setStored = (state, field) => {
  localStorage.setItem(
    localStorage.username + ".english." + field,
    JSON.stringify(state[field])
  );
};
const setStoredInt = (state, field) => {
  localStorage.setItem(
    localStorage.username + ".english." + field,
    state[field]
  );
};
const getStored = (field) => {
  return JSON.parse(
    localStorage.getItem(localStorage.username + ".english." + field)
  );
};
const getStoredInt = (field, defValue) => {
  return (
    parseInt(
      localStorage.getItem(localStorage.username + ".english." + field)
    ) || defValue
  );
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
