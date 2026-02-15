import { isAnagram } from "../../../src/basics/strings/isAnagram";

describe("isAnagram()", () => {
    describe("normal cases", () => {
        test.each([
            ["été", "ete", true],
            ["Maire", "Aimer", true],
            ["gare-du-nord", "drogue d'anar", true],
            ["relire", "relier!", true],
            ["Dormitory", "Dirty room!!", true]
        ])("isAnagram(%p, %p) -> %p", (input1, input2, expected) => {
            expect(isAnagram(input1, input2)).toBe(expected);
        });

        test.each([
            ["bonjour", "bonsoir", false],
            ["aab", "abb", false],
            ["chien", "nichee", false],
        ])("isAnagram(%p, %p) -> %p", (input1, input2, expected) => {
            expect(isAnagram(input1, input2)).toBe(expected);
        });
    });

    describe("edge cases", () => {
        test.each([
            ["", "", true],
            [" ", "   ", true],
            ["!!!", "?", true], // true after being cleaned
        ])("isAnagram(%p, %p) -> %p", (input1, input2, expected) => {
            expect(isAnagram(input1, input2)).toBe(expected);
        });
    });

    describe("error cases", () => {
        test.each([
            [12, "banana"],
            ["banana", NaN],
            [{}, "banana"],
            [[], "banana"],
            ["banana", null],
            ["banana", undefined],
        ])("throws if an argument is not a string: %p %p", (input1, input2) => {
            expect(() => isAnagram(input1, input2)).toThrow(TypeError);
        });
    });
});
