//The operation should return the multiple of two numbers
const { addition } = require("./addition");

test("2 + 5 = 7", () => {
  expect(addition(2, 5)).toBe(7);
});

test.skip("2 + 10 = 12", () => {
  expect(addition(2, 10)).toBe(12);
});
