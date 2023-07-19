const stringLength = require("./task-1");

test("throws an error if the string is too short", () => {
  expect(() => stringLength("")).toThrowError(
    "String must be between 1 and 10 characters long"
  );
});

test("throws an error if the string is too long", () => {
  expect(() => stringLength("This is too long")).toThrowError(
    "String must be between 1 and 10 characters long"
  );
});
test("returns the correct character count for a string", () => {
  expect(stringLength("hello")).toBe(5);
  expect(stringLength("1")).toBe(1);
  expect(stringLength("!&%^#()/@*")).toBe(10);
});
