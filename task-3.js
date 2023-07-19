class calculator {
  add(a, b) {
    return a + b;
  }

  subtract(a, b) {
    return a - b;
  }

  divide(a, b) {
    if (b === 0) {
      throw new Error("Cannot divide by zero");
    }
    return a / b;
  }

  multiply(a, b) {
    return a * b;
  }
}

calculator = new calculator();

console.log(calculator.add(2, 3)); // Output: 5
console.log(calculator.subtract(5, 2)); // Output: 3
console.log(calculator.divide(10, 2)); // Output: 5
console.log(calculator.multiply(4, 3)); // Output: 12

module.exports = calculator;
