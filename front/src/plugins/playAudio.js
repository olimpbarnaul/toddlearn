export default function (word, lang) {
  return (new Audio(
    process.env.VUE_APP_API_URL +
      "/english/api/play?" +
      (lang ? "lang=" + lang + "&" : "") +
      "phrase=" +
      word
  )).play();
}
