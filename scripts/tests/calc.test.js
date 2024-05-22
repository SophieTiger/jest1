/**
 * @jest-environment jsdom
 */

const { TestScheduler } = require("jest");
const addition = require("../calc");

describe("Calculator", () => {
    describe("Addition function", () => {
        test("should return 42 for 20 + 22", () => {
            expect(addition(20, 22)).toBe(42);
        });
        test("should return 73 for 42 + 31", () => {
            expect(addition(42, 31)).toBe(73);
        });
        test("should return -10 for -6 + -4", () => {
            expect(addition(-6, -4)).toBe(-10);
        });
        test("should return 1 for 0.6 + 0.4", () => {
            expect(addition(0.6, 0.4)).toBe(1);
        });
        test("should return 1 for null + 1", () => {
            expect(addition(null, 1)).toBe(1);
        });
    });
    describe("Subtraction function", () => {

    });
    describe("Multiply function", () => {

    });
    describe("Division function", () => {

    });
})