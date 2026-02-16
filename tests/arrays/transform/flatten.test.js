import { flatten } from "../../../src/arrays/transform/flatten";

describe("flatten()", () => {
    describe("normal cases", () => {
        test.each([
            [[1, 2, [3]], 1, [1, 2, 3]],
            [["banana", 2, ["apple"]], 1, ["banana", 2, "apple"]],
        ])("flatten(%p, %p) returns %p", (input1, input2, expected) => {
            expect(flatten(input1, input2)).toEqual(expected);
        });
    });

    describe("edge cases", () => {
        test.each([
            [[], 1, []],
            [[1, 2, 3], 0, [1, 2, 3]],
            [[1, [2, [3]]], 10, [1, 2, 3]], // depth trop grand
        ])("flatten(%p, %p) returns %p", (input1, input2, expected) => {
            expect(flatten(input1, input2)).toEqual(expected);
        });
    });

    describe("error cases", () => {
        test.each(["banana", 12, {}, undefined, null])(
            "throws TypeError if arr is %p",
            (input) => {
                expect(() => flatten(input)).toThrow(TypeError);
            }
        );

        test.each([
            [[1, 2, 3], 1.2],
            [[1, 2, 3], NaN],
            [[1, 2, 3], -1],
        ])("throws RangeError if depth is invalid: %p", (input1, input2) => {
            expect(() => flatten(input1, input2)).toThrow(RangeError);
        });
    });
});
