import { median } from "../../src/stats/median";

describe("median()", () => {
    describe("normal cases", () => {
        test.each([
            [[1, 2, 5, 4, 3], 3],
            [[1, 2, 3, 4], 2.5],
            [[1.5, 3.5, 10.5, 6.5], 5],
            [[-4, -2, -3, -1], -2.5],
            [[0.08, 0.2, 0.1, 0.5], 0.15]
        ])("median(%p) -> %p", (input, expected) => {
            const result = median(input);
            expect(result).toBeCloseTo(expected)
        })
    })

    describe("edge cases", () => {
        test.each([
            [[0, 0, 0, 0, 0], 0],
            [[1], 1]
        ])("median(%p) -> %p", (input, expected) => {
            const result = median(input);
            expect(result).toBeCloseTo(expected)
        })
    })

    describe("immutability", () => {
        test("does not mutate input array", () => {
            const arr = [3, 1, 2];
            const copy = [...arr];

            median(arr);
            expect(arr).toEqual(copy);
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
                median(input)
            }).toThrow(TypeError)
        })

        test("throws if empty array", () => {
            expect(() => {
                median([])
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
                median(input)
            }).toThrow(TypeError)
        })
    })
})