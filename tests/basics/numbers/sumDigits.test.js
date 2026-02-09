import { sumDigits } from "../../../src/basics/numbers/sumDigits";

describe("sumDigits()", () => {
    describe("normal cases", () => {
        test.each([
            [123, 6],
            [-12, 3]
        ])("sumDigits(%p) returns %p", (input, expected) => {
            expect(sumDigits(input)).toBe(expected)
        })
    });

    describe("edge cases", () => {
        test.each([
            [1000, 1],
            [0, 0],
            [-0, 0]
        ])("sumDigits(%p) returns %p", (input, expected) => {
            expect(sumDigits(input)).toBe(expected)
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
            {},
            []
        ])("throws if argument is %p", (input) => {
            expect(() => sumDigits(input))
                .toThrow(TypeError)
        })
    })
})