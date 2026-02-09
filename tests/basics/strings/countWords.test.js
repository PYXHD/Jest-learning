import { countWords } from "../../../src/basics/strings/countWords";

describe("countWords()", () => {
    describe("normal cases", () => {
        test.each([
            ["Hello world", 2],
            [" Banana    apple", 2],
            ["I'd like a banana, please", 5]
        ])("countWords(%p) returns %p", (input, expected) => {
            expect(countWords(input)).toBe(expected);
        })
    });

    describe("edge cases", () => {
        test.each([
            ["", 0],
            [" ", 0]
        ])("countWords(%p) returns %p", (input, expected) => {
            expect(countWords(input)).toBe(expected);
        })
    })

    describe("error cases", () => {
        test.each([
            42,
            null,
            undefined,
            {},
            [],
        ])("throws if argument is %p", (input) => {
            expect(() => countWords(input))
                .toThrow(TypeError);
        });
    });

})