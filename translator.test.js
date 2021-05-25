import { translateEnglishToMorse } from "./translator";

it("should translate a to .-", () => {
  const result = translateEnglishToMorse("a");
  expect(result).toBe(".-");
});
it("should translate b to -...", () => {
  const result = translateEnglishToMorse("b");
  expect(result).toBe("-...");
});
it("should translate c to -.-.", () => {
  const result = translateEnglishToMorse("c");
  expect(result).toBe("-.-.");
});
it("should translate d to -..", () => {
  const result = translateEnglishToMorse("d");
  expect(result).toBe("-..");
});
it("should translate e to .", () => {
  const result = translateEnglishToMorse("e");
  expect(result).toBe(".");
});
it("should translate f to ..-.", () => {
  const result = translateEnglishToMorse("f");
  expect(result).toBe("..-.");
});
it("should translate g to --.", () => {
  const result = translateEnglishToMorse("g");
  expect(result).toBe("--.");
});
it("should translate h to ....", () => {
  const result = translateEnglishToMorse("h");
  expect(result).toBe("....");
});
it("should translate i to ..", () => {
  const result = translateEnglishToMorse("i");
  expect(result).toBe("..");
});
it("should translate j to .---", () => {
  const result = translateEnglishToMorse("j");
  expect(result).toBe(".---");
});

it("should translate k to .---", () => {
  const result = translateEnglishToMorse("k");
  expect(result).toBe("-.-");
});

it("should translate default to unavailable", () => {
  const result = translateEnglishToMorse("default");
  expect(result).toBe("unavailable");
});
