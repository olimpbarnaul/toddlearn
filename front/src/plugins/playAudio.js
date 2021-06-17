export default async function (word, lang) {
	return new Promise(function (resolve, reject) {
		const audio = new Audio(); // create audio wo/ src
		audio.preload = "auto"; // intend to play through
		audio.autoplay = true; // autoplay when loaded
		audio.onerror = reject; // on error, reject
		audio.onended = resolve; // when done, resolve

		audio.src =
			process.env.VUE_APP_API_URL +
			"/english/api/play?" +
			(lang ? "lang=" + lang + "&" : "") +
			"phrase=" +
			word; // just for example
	});
}
