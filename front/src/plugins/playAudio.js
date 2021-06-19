export default function (arr) {
  if (!Array.isArray(arr)) arr = [arr];
  const players = [];
  arr.forEach((item) => {
    players.push(
      new Audio(
        process.env.VUE_APP_API_URL +
          "/english/api/play?" +
          (item instanceof Object ? "lang=" + item.lang + "&" : "") +
          "phrase=" +
          (item instanceof Object ? item.word : item)
      )
    );
  });
  players.forEach((audio, i) => {
    if (i === 0) {
      audio.play();
    } else {
      setTimeout(() => {
        audio.play();
      }, 3000);
    }
  });
}
