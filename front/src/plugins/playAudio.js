export default {
  playing: false,
  play(phrase, oneSpeech) {
    if (this.playing) return;
    const lang =
      "abcdefghijklmnopqrstuvwxyz".indexOf(phrase[0].toLowerCase()) > -1
        ? "en-US"
        : "ru-RU";

    if (!oneSpeech) {
      const player = new Audio(
        `${
          process.env.VUE_APP_API_URL
        }/api/play?phrase=${phrase}&lang=${lang.substring(0, 2)}`
      );
      player.play();
      this.playing = true;
    }

    setTimeout(
      () => {
        this.playing = false;
        const msg = new SpeechSynthesisUtterance();
        msg.text = phrase;
        msg.lang = lang;
        msg.rate = lang === "en-US" ? 0.6 : 0.8;
        speechSynthesis.speak(msg);
      },
      oneSpeech ? 0 : 1500
    );
  },
};
