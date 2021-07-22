export default {
  playing: false,
  play(arr) {
    if (this.playing) return;
    if (!Array.isArray(arr)) arr = [arr];
    const players = [];
    arr.forEach((item) => {
      const phrase = item instanceof Object ? item.word : item;
      const lang =
        "abcdefghijklmnopqrstuvwxyz".indexOf(phrase[0]) > -1 ? "en" : "ru";
      players.push(
        new Audio(
          `${process.env.VUE_APP_API_URL}/api/play?phrase=${phrase}&lang=${lang}`
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
