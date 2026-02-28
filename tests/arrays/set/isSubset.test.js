import { isSubset } from "../../../src/arrays/set/isSubset";

describe("isSubset()", () => {
    describe("normal cases", () => {
        test.each([
            [[1, 2], [1, 2, 3], true],
            [[true, false], [true, false, 4], true],
            [[true, 2, 4], ["banana", false], false]
        ])("isSubset(%p, %p) -> %p", (input1, input2, expected) => {
            const result = isSubset(input1, input2)
            expect(result).toBe(expected)
        })
    })

    describe("edge cases", () => {
        test.each([
            [[], [], true],
            [[1, 2], [1, 2], true],
            [[], [1, 2], true],
            [[1, 2], [], false]
        ])("isSubset(%p, %p) -> %p", (input1, input2, expected) => {
            const result = isSubset(input1, input2)
            expect(result).toBe(expected)
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
                isSubset(input1, input2)
            }).toThrow(TypeError)
        })
    })
})