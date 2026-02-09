import { getMax } from "../../../src/arrays/stats/getMax";

describe("getMax()", () => {

    describe("normal cases", () => {
        test("returns max from positive numbers", () => {
            const maxValue = getMax([2, 7, 8]);
            expect(maxValue).toBe(8);
        });

        test("works with negative numbers", () => {
            const maxValue = getMax([-4, -5, -7]);
            expect(maxValue).toBe(-4);
        });
    });


    describe("edge cases", () => {
        test("returns the only element if there's one element", () => {
            const maxValue = getMax([2]);
            expect(maxValue).toBe(2);
        })
    });


    describe("error cases", () => {

        test("throws if argument is not an array", () => {
            const notAnArray = "banana";
            expect(() => {
                getMax(notAnArray);
            }).toThrow(TypeError);
        });

        test("throws on empty array", () => {
            const emptyArray = [];
            expect(() => {
                getMax(emptyArray);
            }).toThrow(RangeError);
        });

        test("throws if array contains non-number values", () => {
            const wrongArray = ["banana", 2];
            expect(() => {
                getMax(wrongArray);
            }).toThrow(TypeError);
        });
    });

});