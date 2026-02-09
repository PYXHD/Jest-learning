import { max } from "../../../src/basics/numbers/max";

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