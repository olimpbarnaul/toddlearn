import { checkLanguage } from "./lang.js";
export default {
  playing: false,
  play(phrase, oneSpeech) {
    //if (this.playing) return;
    const lang = checkLanguage(phrase);

    if (!oneSpeech && document.hidden === false) {
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
        if (document.hidden === false) speechSynthesis.speak(msg);
      },
      oneSpeech ? 0 : 1500
    );
  },
};
