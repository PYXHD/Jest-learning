import { sum } from "../../../src/basics/numbers/sum";

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