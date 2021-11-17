const ru = "ru";
const en = "en";
const language = { ru: "ru-RU", en: "en-US" };
const alphabet = {
  ru: "абвгдеёжзийклмнопрстуфхцчшщъыьэюя".split(""),
  en: "abcdefghijklmnopqrstuvwxyz".split(""),
};
function checkLanguage(key) {
  return language[checkLang(key)];
}
function checkLang(key) {
  return "абвгдеёжзийклмнопрстуфхцчшщъыьэюя".indexOf(
    key[0][0][0][0].toLowerCase()
  ) > -1
    ? ru
    : en;
}

function mappedKey(key, keys) {
  const map = {
    "`": "ё",
    q: "й",
    w: "ц",
    e: "у",
    r: "к",
    t: "е",
    y: "н",
    u: "г",
    i: "ш",
    o: "щ",
    p: "з",
    "[": "х",
    "]": "ъ",
    a: "ф",
    s: "ы",
    d: "в",
    f: "а",
    g: "п",
    h: "р",
    j: "о",
    k: "л",
    l: "д",
    ";": "ж",
    "'": "э",
    z: "я",
    x: "ч",
    c: "с",
    v: "м",
    b: "и",
    n: "т",
    m: "ь",
    ",": "б",
    ".": "ю",
    "~": "Ё",
    Q: "Й",
    W: "Ц",
    E: "У",
    R: "К",
    T: "Е",
    Y: "Н",
    U: "Г",
    I: "Ш",
    O: "Щ",
    P: "З",
    "{": "Х",
    "}": "Ъ",
    A: "Ф",
    S: "Ы",
    D: "В",
    F: "А",
    G: "П",
    H: "Р",
    J: "О",
    K: "Л",
    L: "Д",
    ":": "Ж",
    '"': "Э",
    Z: "Я",
    X: "Ч",
    C: "С",
    V: "М",
    B: "И",
    N: "Т",
    M: "Ь",
    "<": "Б",
    ">": "Ю",
  };
  return checkLang(keys) === ru && checkLang(key) === en && map[key]
    ? map[key]
    : key;
}

export { checkLang, checkLanguage, alphabet, mappedKey };
