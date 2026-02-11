import { clamp } from "../../../src/basics/numbers/clamp";

describe("clamp()", () => {
    describe("normal cases", () => {
        test.each([
            [4, 1, 5, 4],
            [8, 1, 5, 5],
            [1, 3, 5, 3],
            [-2, -8, -4, -4],
            [-2, 0, 4, 0]
        ])("clamp(%p, %p, %p) returns %p", (input1, input2, input3, expected) => {
            expect(clamp(input1, input2, input3)).toBe(expected)
        })
    })

    describe("edge cases", () => {
        test.each([
            [2, 4, 4, 4],
            [0, 0, 0, 0],
            [3.5, 2.5, 4, 3.5]
        ])("clamp(%p, %p, %p) returns %p", (input1, input2, input3, expected) => {
            expect(clamp(input1, input2, input3)).toBe(expected)
        })
    })

    describe("error cases", () => {
        test.each([
            ["banana", 2, 4],
            [4, NaN, 6],
            [2, Infinity, 8],
            [3, 8, -Infinity],
            [2, undefined, 8]
        ])("throws if arguments are %p, %p, %p", (input1, input2, input3) => {
            expect(() => clamp(input1, input2, input3))
                .toThrow(TypeError)
        })

        test("throw if min > max", () => {
            expect(() => {
                clamp(2, 6, 4)
            }).toThrow(RangeError)
        })
    })
})