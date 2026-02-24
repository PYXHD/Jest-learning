import { mean } from "../../src/stats/mean";

describe("mean()", () => {
    describe("normal cases", () => {
        test.each([
            [[2, 4, 6], 4],
            [[-2, -4, -6], -4],
            [[1.5, 3, 4.5], 3],
            [[-6, 0, 6], 0]
        ])("mean(%p) -> %d", (input, expected) => {
            const result = mean(input);
            expect(result).toBe(expected)
        })
    })

    describe("edge cases", () => {
        test.each([
            [[2], 2],
            [[0, 0, 0], 0]
        ])("mean(%p) -> %d", (input, expected) => {
            const result = mean(input);
            expect(result).toBe(expected)
        })
    })

    describe("error cases", () => {
        test.each([
            "banana",
            12,
            {},
            undefined,
            null
        ])("throws if argument is %p", (input) => {
            expect(() => {
                mean(input)
            }).toThrow(TypeError)
        })

        test("throws if empty array", () => {
            expect(() => {
                mean([])
            }).toThrow(RangeError)
        })

        test.each([
            ["banane", 12],
            [12, NaN],
            [12, Infinity],
            [null, 12],
            [undefined, 12],
            [12, [4, 5, 6]],
            [{}, 12]
        ])("throw if argument's item is not a finite number", (input) => {
            expect(() => {
                mean(input)
            }).toThrow(TypeError)
        })
    })
})