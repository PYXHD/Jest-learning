import { difference } from "../../../src/arrays/set/difference"

describe("difference()", () => {
    describe("normal cases", () => {
        test.each([
            [[1, 2], [4, 3], [1, 2]],
            [[1, 2, 3], [1, 3, 4], [2]],
            [[true, 2, 4], [true, true, 4], [2]]
        ])("difference(%p, %p) -> %p", (input1, input2, expected) => {
            const result = difference(input1, input2)
            expect(result).toEqual(expected)
        })
    })

    describe("edge cases", () => {
        test.each([
            [[], [], []],
            [[1, 2], [], [1, 2]],
            [[], [1, 2], []]
        ])("difference(%p, %p) -> %p", (input1, input2, expected) => {
            const result = difference(input1, input2)
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
                difference(input1, input2)
            }).toThrow(TypeError)
        })
    })
})