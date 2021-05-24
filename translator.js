export const translateEnglishToMorse = (word) => {
  if (word === "a") {
    return " .- ";
  } else if (word === "b") {
    return " -... ";
  } else {
    return "unavailable";
  }
};
