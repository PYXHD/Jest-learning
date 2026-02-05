import { sum, max, isEven } from "../../src/basics";

describe("Numbers utilities", () => {

    // ======================
    // sum()
    // ======================
    describe("sum()", () => {

        describe("normal cases", () => {
            test("adds two positive numbers", () => {
                const result = sum(2, 3);
                expect(result).toBe(5);
            });

            test("adds negative and positive number", () => {
                const result = sum(-2, 5);
                expect(result).toBe(3);
            });

            test("adds zeros", () => {
                const result = sum(0, 0);
                expect(result).toBe(0);
            });
        });


        describe("edge cases", () => {
            test("adds two negative numbers", () => {
                const result = sum(-2, -3);
                expect(result).toBe(-5);
            });

            test("adds decimal numbers", () => {
                const result = sum(0.5, 0.25);
                expect(result).toBe(0.75);
            });
        });


        describe("error cases", () => {
            test("throws if first argument is not a number", () => {
                expect(() => {
                    sum("banana", 2);
                }).toThrow(TypeError);
            });

            test("throws if second argument is not a number", () => {
                expect(() => {
                    sum(3, "apple");
                }).toThrow(TypeError);
            });
        });

    });


    // ======================
    // isEven()
    // ======================
    describe("isEven()", () => {

        describe("normal cases", () => {
            test("returns true for even numbers", () => {
                expect(isEven(4)).toBe(true);
            });

            test("returns false for odd numbers", () => {
                expect(isEven(3)).toBe(false);
            });
        });


        describe("edge cases", () => {
            test("returns true for zero", () => {
                expect(isEven(0)).toBe(true);
            });

            test("works with negative numbers", () => {
                expect(isEven(-4)).toBe(true);
                expect(isEven(-3)).toBe(false);
            });
        });


        describe("error cases", () => {
            test("throws if argument is not a number", () => {
                expect(() => {
                    isEven("banane");
                }).toThrow(TypeError);
            });
        });

    });


    // ======================
    // max()
    // ======================
    describe("max()", () => {

        describe("normal cases", () => {
            test("returns the biggest number", () => {
                const maxValue = max(2, 5);
                expect(maxValue).toBe(5);
            });

            test("works with equal numbers", () => {
                const maxValue = max(4, 4);
                expect(maxValue).toBe(4);
            });
        });


        describe("edge cases", () => {
            test("works with negative numbers", () => {
                const maxValue = max(-2, -5);
                expect(maxValue).toBe(-2);
            });

            test("works when one number is zero", () => {
                const maxValue = max(0, -3);
                expect(maxValue).toBe(0);
            });
        });


        describe("error cases", () => {
            test("throws if first argument is not a number", () => {
                expect(() => {
                    max("banana", 2);
                }).toThrow(TypeError);
            });

            test("throws if second argument is not a number", () => {
                expect(() => {
                    max(3, "apple");
                }).toThrow(TypeError);
            });
        });

    });

});
