import { isEven } from "../../../src/basics/numbers/isEven";

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