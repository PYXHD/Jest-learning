import { groupBy } from "../../../src/arrays/transform/groupBy";

const byLength = (str) => str.length;
const parity = (n) => (n % 2 === 0 ? "even" : "odd");
const alwaysX = () => "x";

const strArray = ["banana", "apple", "orange"];
const numArray = [12, 3, 7];

const expStrArray = {
    5: ["apple"],
    6: ["banana", "orange"]
}
const expNumArray = {
    even: [12],
    odd: [3, 7]
}
const expNumAlwaysX = {
    x: [12, 3, 7]
}

describe("groupBy", () => {
    describe("normal cases", () => {
        test("returns grouped array", () => {
            const result = groupBy(strArray, byLength)
            expect(result).toEqual(expStrArray)
        })
    })

    describe("different grouping functions", () => {
        test("returns groupedArray", () => {
            const result = groupBy(numArray, parity)
            expect(result).toEqual(expNumArray)
        })
    });

    describe("edge cases", () => {
        test("returns empty object if empty arr", () => {
            const result = groupBy([], parity)
            expect(result).toEqual({})
        });
        test("groups all elements under one key", () => {
            const result = groupBy(numArray, alwaysX);
            expect(result).toEqual(expNumAlwaysX)
        })
    });

    describe("error cases", () => {
        test("error if arr is not an array", () => {
            expect(() => {
                groupBy({}, byLength)
            }).toThrow(TypeError)
        });
        test("error if fn is not a function", () => {
            expect(() => {
                groupBy(strArray, "banane")
            }).toThrow(TypeError)
        });
    })
})