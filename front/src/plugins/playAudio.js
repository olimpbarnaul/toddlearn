export default {
  playing: false,
  play(arr) {
    if (this.playing) return;
    if (!Array.isArray(arr)) arr = [arr];
    const players = [];
    arr.forEach((item) => {
      players.push(
        new Audio(
          process.env.VUE_APP_API_URL +
            "/api/play?" +
            (item instanceof Object ? "lang=" + item.lang + "&" : "") +
            "phrase=" +
            (item instanceof Object ? item.word : item)
        )
      );
    });
    players.forEach((audio, i) => {
      if (i === 0) {
        audio.play();
        this.playing = true;
        setTimeout(() => (this.playing = false), 3000);
      } else {
        setTimeout(() => {
          audio.play();
        }, 3000);
      }
    });
  },
};
