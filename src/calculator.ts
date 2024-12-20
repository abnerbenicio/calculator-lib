export function add(a: number, b: number): number {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("Invalid input: Both arguments must be numbers");
  }
  return a + b;
}

export function subtract(a: number, b: number): number {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("Invalid input: Both arguments must be numbers");
  }
  return a - b;
}

export function multiply(a: number, b: number): number {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("Invalid input: Both arguments must be numbers");
  }
  return a * b;
}

export function divide(a: number, b: number): number {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("Invalid input: Both arguments must be numbers");
  }
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b;
}
