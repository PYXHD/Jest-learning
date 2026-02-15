import { mostFrequentWord } from "../../../src/basics/strings/mostFrequentWord";

describe("mostFrequentWord", () => {
    describe("normal cases", () => {
        test.each([
            ["Bonjour bonjour salut", "bonjour"],
            ["HeLLo hello HELLO world", "hello"],
            ["Été été ete hiver", "ete"],
            ["Salut, salut! salut... bonjour?", "salut"],
            ["   bonjour    bonjour   salut   ", "bonjour"],
            ["1 2 2 3 3 3", "3"],
        ])("mostFrequentWord(%p) returns %p", (input, expected) => {
            expect(mostFrequentWord(input)).toBe(expected);
        });
    })

    describe("edge cases", () => {
        test.each([
            ["un deux deux trois trois", "deux"],
            ["a b b c c", "b"]
        ])("mostFrequentWord(%p) returns %p (first element in tie)", (input, expected) => {
            expect(mostFrequentWord(input)).toBe(expected);
        })
        test.each([
            ["", null],
            ["   ", null],
            ["!!! --- ???", null]
        ])("mostFrequentWord(%p) returns %p", (input, expected) => {
            expect(mostFrequentWord(input)).toBe(expected);
        })
    })

    describe("error cases", () => {
        test.each([
            null,
            undefined,
            13,
            {},
            []
        ])("throws if argument is not a string: %p", (input) => {
            expect(() => {
                mostFrequentWord(input)
            }).toThrow(TypeError);
        }
        );

    })
})