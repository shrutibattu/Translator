export const translateEnglishToMorse = (word) => {
  // if (word === "a") {
  //   return ".-";
  // } else if (word === "b") {
  //   return "-...";
  // } else if (word === "c") {
  //   return "-.-.";
  // } else {
  //   return "unavailable";
  // }
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
    default:
      alphabet = "unavailable";
  }
  return alphabet;
};
