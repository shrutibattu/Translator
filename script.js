import { translateEnglishToMorse } from "./translator.js";

const button = document.querySelector("button");
button.addEventListener("click", () => {
  let word = document.querySelector("#english-input").value;
  const result = translateEnglishToMorse(word);

  let display = document.querySelector(".display");

  const displayvalue = display.textContent;
  display.textContent = result;
});
