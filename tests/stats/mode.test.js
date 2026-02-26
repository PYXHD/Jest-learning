import { mode } from "../../src/stats/mode";

describe("mode()", () => {
    describe("normal cases", () => {
        test("normal case", () => {
            const result = mode([1, 2, 2, 3])
            expect(result).toBe(2)
        })

        test("multipleModes", () => {
            const result = mode([1, 1, 2, 2])
            expect(result).toEqual([1, 2])
        })
    })

    describe("edge cases", () => {
        test("edge case", () => {
            const result = mode([1, 1, 1])
            expect(result).toBe(1)
        })
    })

    describe("null cases", () => {
        test("return null if empty array", () => {
            expect(mode([])).toBe(null)
        })

        test("return null if all numbers are 1", () => {
            expect(mode([1, 2, 3])).toBe(null)
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
                mode(input)
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
                mode(input)
            }).toThrow(TypeError)
        })
    })
})
