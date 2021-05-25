export const translateEnglishToMorse = (word) => {
  let alphabet = "unavailable";
  switch (word) {
    case "a":
      alphabet = ".-";
      break;
    case "b":
      alphabet = "-...";
      break;
    case "c":
      alphabet = "-.-.";
      break;
    case "d":
      alphabet = "-..";
      break;
    case "e":
      alphabet = ".";
      break;
    case "f":
      alphabet = "..-.";
      break;
    case "g":
      alphabet = "--.";
      break;
    case "h":
      alphabet = "....";
      break;
    case "i":
      alphabet = "..";
      break;
    case "j":
      alphabet = ".---";
      break;
    case "k":
      alphabet = "-.-";
      break;
    default:
      alphabet = "unavailable";
  }
  return alphabet;
};
