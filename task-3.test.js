const calculator = require("./task-3");

// const calculator = new calculator();

describe("add method", () => {
  test("should return the sum of two numbers", () => {
    expect(calculator.add(2, 3)).toBe(5);
    expect(calculator.add(0, 0)).toBe(0);
    expect(calculator.add(-2, 3)).toBe(1);
  });
});

describe("add method", () => {
  test("should return the difference of the two numbers", () => {
    expect(calculator.subtract(4, 3)).toBe(1);
    expect(calculator.subtract(0, 0)).toBe(0);
    expect(calculator.subtract(4, -3)).toBe(7);
  });
});

describe("add method", () => {
  test("should return tho quotient of the two numbers", () => {
    expect(calculator.divide(10, 2)).toBe(5);
    expect(calculator.divide(-10, -2)).toBe(5);
  });

  test("should throw an error when dividing by zero", () => {
    expect(() => calculator.divide(5, 0)).toThrow();
  });
});

describe("add method", () => {
  test("should return the product of the two numbers", () => {
    expect(calculator.multiply(10, 2)).toBe(20);
    expect(calculator.multiply(0, 2)).toBe(0);
    expect(calculator.multiply(-10, 2)).toBe(-20);
  });
});
