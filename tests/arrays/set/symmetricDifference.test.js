import { symmetricDifference } from "../../../src/arrays/set/symmetricDifference";

describe("symmetricDifference()", () => {
    describe("normal cases", () => {
        test.each([
            [[2, 4], [1, 2, 3], [4, 1, 3]],
            [[1, 2, 3], [1, 3, 4], [2, 4]],
            [[true, 2, 4], [true, true, 4], [2]]
        ])("symmetricDifference(%p, %p) -> %p", (input1, input2, expected) => {
            const result = symmetricDifference(input1, input2)
            expect(result).toEqual(expected)
        })
    })

    describe("edge cases", () => {
        test.each([
            [[], [], []],
            [[1, 2], [1, 2], []],
            [[1, 2], [], [1, 2]],
            [[], [1, 2], [1, 2]],
        ])("symmetricDifference(%p, %p) -> %p", (input1, input2, expected) => {
            const result = symmetricDifference(input1, input2)
            expect(result).toEqual(expected)
        })
    })

    describe("error cases", () => {
        test.each([
            [[1, 2], "banana"],
            [[1, 2], 12],
            [undefined, [1, 2]],
            [null, [1, 2]]
        ])("throws if an argument(%p, %p) is not an array", (input1, input2) => {
            expect(() => {
                symmetricDifference(input1, input2)
            }).toThrow(TypeError)
        })
    })
})