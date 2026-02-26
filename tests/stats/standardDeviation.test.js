import { standardDeviation } from "../../src/stats/standardDeviation";

describe("standardDeviation()", () => {
    describe("normal cases", () => {
        test.each([
            [[2, 4, 6], 1.63],
            [[-2, -5, -8], 2.45],
            [[1.2, 5.4, 6.8], 2.38]
        ])("standardDeviation(%p) -> %f", (input, expected) => {
            const result = standardDeviation(input)
            expect(result).toBeCloseTo(expected,)
        })
    })

    describe("edge cases", () => {
        test("edge case", () => {
            const result = standardDeviation([2, 2, 2])
            expect(result).toBe(0)
        })
        test("return 0 if only one item", () => {
            const result = standardDeviation([2])
            expect(result).toBe(0)
        })
    })

    describe("null cases", () => {
        test("return null if empty array", () => {
            expect(standardDeviation([])).toBe(null)
        })
    })

    describe("error cases", () => {
        test.each([
            "banana",
            12,
            {},
            null,
            undefined
        ])("throws if %p is not an array", (input) => {
            expect(() => {
                standardDeviation(input)
            }).toThrow(TypeError)
        })

        test.each([
            [1, 2, "banane"],
            [1, 2, NaN],
            [1, 2, Infinity],
            [{}, 2],
            [null, 2],
            [undefined, 2]
        ])("throws if an argument is not a finite number", (input) => {
            expect(() => {
                standardDeviation(input)
            }).toThrow(TypeError)
        })
    })
})