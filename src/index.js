const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0"
};

function decode(expr) {
  return expr
    .split("**********")
    .map(el =>
      el
        .match(/.{10}/g)
        .map(el => stringNumberToMorze(el))
        .map(el => MORSE_TABLE[el])
        .join("")
    )
    .join(" ");
}

function stringNumberToMorze(str) {
  return str
    .split("00")
    .join("")
    .split("10")
    .join(".")
    .split("11")
    .join("-");
}

module.exports = {
  decode
};
