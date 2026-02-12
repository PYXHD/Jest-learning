import { average } from "../../../src/basics/numbers/average";

describe("average.js", () => {
    describe("normal cases", () => {
        test.each([
            [[1, 2, 3], 2],
            [[-5, 0, 14], 3],
            [[-8, -4, -9], -7],
            [[1.5, 2.5, 3.5], 2.5]
        ])("average(%p) returns %p", (input, expected) => {
            expect(average(input)).toBe(expected)
        })

        test("infinite cases", () => {
            expect(average([-4, 0, 8])).toBeCloseTo(4 / 3)
        })
    })

    describe("edge cases", () => {
        test.each([
            [[0, 0, 0], 0],
            [[-0, 0], 0],
            [[5], 5],
        ])("average(%p) returns %p", (input, expected) => {
            expect(average(input)).toBe(expected)
        })
    })

    describe("error cases", () => {
        test.each([
            "banana",
            NaN,
            Infinity,
            -Infinity,
            1.5,
            null,
            undefined,
            {}
        ])("throws if argument is %p", (input) => {
            expect(() => average(input))
                .toThrow(TypeError)
        })

        test("throws if argument is empty", () => {
            expect(() => {
                average([])
            }).toThrow(RangeError);
        })

        test("throws if an argument is not a number", () => {
            expect(() => {
                average([2, 3, "banana"]);
            }).toThrow(TypeError);
        });
    })
})