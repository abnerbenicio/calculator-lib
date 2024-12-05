import { describe, test, expect } from "vitest";
import { add, subtract, multiply, divide } from "./calculator";

describe("Addition", () => {
  test("adds two numbers", () => {
    expect(add(2, 3)).toBe(5);
  });

  test("throws error when adding a number and a string", () => {
    expect(() => add(2 as any, "3" as any)).toThrow("Invalid input");
  });

  test("throws error when adding two strings", () => {
    expect(() => add("2" as any, "3" as any)).toThrow("Invalid input");
  });

  test("adds floating-point numbers", () => {
    expect(add(2.5, 3.1)).toBeCloseTo(5.6);
  });
});

describe("Subtraction", () => {
  test("subtracts two numbers", () => {
    expect(subtract(5, 3)).toBe(2);
  });

  test("throws error when subtracting a number and a string", () => {
    expect(() => subtract(5 as any, "3" as any)).toThrow("Invalid input");
  });

  test("throws error when subtracting two strings", () => {
    expect(() => subtract("5" as any, "3" as any)).toThrow("Invalid input");
  });

  test("subtracts floating-point numbers", () => {
    expect(subtract(5.5, 3.1)).toBeCloseTo(2.4);
  });
});

describe("Multiplication", () => {
  test("multiplies two numbers", () => {
    expect(multiply(2, 3)).toBe(6);
  });

  test("throws error when multiplying a number and a string", () => {
    expect(() => multiply(2 as any, "3" as any)).toThrow("Invalid input");
  });

  test("throws error when multiplying two strings", () => {
    expect(() => multiply("2" as any, "3" as any)).toThrow("Invalid input");
  });

  test("multiplies floating-point numbers", () => {
    expect(multiply(2.5, 3.2)).toBeCloseTo(8);
  });
});

describe("Division", () => {
  test("divides two numbers", () => {
    expect(divide(6, 3)).toBe(2);
  });

  test("throws error for division by zero", () => {
    expect(() => divide(6, 0)).toThrow("Cannot divide by zero");
  });

  test("throws error when dividing a number and a string", () => {
    expect(() => divide(6 as any, "3" as any)).toThrow("Invalid input");
  });

  test("throws error when dividing two strings", () => {
    expect(() => divide("6" as any, "3" as any)).toThrow("Invalid input");
  });

  test("divides floating-point numbers", () => {
    expect(divide(7.5, 2.5)).toBeCloseTo(3);
  });
});
