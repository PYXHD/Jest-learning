import { union } from "../../../src/arrays/set/union";

describe("union()", () => {
    describe("normal cases", () => {
        test.each([
            [[1, 2, 3], [2, 3, 4], [1, 2, 3, 4]],
            [["a", "b", "c"], ["b", "d"], ["a", "b", "c", "d"]],
            [[], [1, 2], [1, 2]],
            [[false, true, 2], [false, 2, 4], [false, true, 2, 4]],
            [[undefined, 1], [4, undefined], [undefined, 1, 4]],
            [[null, 4, "a"], [1, null], [null, 4, "a", 1]]
        ])("union(%p, %p) -> %p", (input1, input2, expected) => {
            const result = union(input1, input2)
            expect(result).toEqual(expected)
        })
    })

    describe("edge cases", () => {
        test("returns an empty array if args are empty arrays", () => {
            expect(union([], [])).toEqual([])
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
                union(input1, input2)
            }).toThrow(TypeError)
        })
    })
})