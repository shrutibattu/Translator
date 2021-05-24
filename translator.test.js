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
