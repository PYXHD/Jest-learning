import { sum } from "../../src/stats/sum";

describe("sum()", () => {

    describe("normal cases", () => {
        test.each([
            [[1, 2, 3], 6],
            [[0], 0],
            [[-1, 1], 0],
            [[2.5, 1.5], 4]
        ])("sum(%p) returns %d", (input, expected) => {
            expect(sum(input)).toBe(expected);
        })
    });


    describe("edge cases", () => {
        test("returns the sum even only one value", () => {
            const array = [2];
            expect(sum(array)).toBe(2);
        });
        test("returns 0 if empty array", () => {
            const array = [];
            expect(sum(array)).toBe(0);
        });
    });

    describe("error cases", () => {
        test("throws is not an array", () => {
            expect(() => {
                sum("apple");
            }).toThrow(TypeError);
        });

        test.each([
            [["banana", 1]],
            [[1, undefined]],
            [[1, null]],
            [[undefined]],
            [[null]],
        ])("throws if array contains invalid values: %p", (input) => {
            expect(() => sum(input)).toThrow(TypeError);
        });
    });

});