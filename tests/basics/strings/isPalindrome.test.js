import { isPalindrome } from "../../../src/basics/strings/isPalindrome";

describe("isPalindrome", () => {
    describe("normal cases", () => {
        test.each([
            ["kayak", true],
            ["Radar", true],
            ["Elu par cette crapule", true],
            ["Tu l'as trop écrasé, César, ce port-salut", true],
            ["---!!!   ", true]
        ])("isPalindrome(%p) returns %p", (input, expected) => {
            expect(isPalindrome(input)).toBe(expected);
        })
        test("return false if not a palindrome", () => {
            expect(isPalindrome("banana")).toBe(false)
        })
    })

    describe("edge cases", () => {
        test.each([
            ["a", true],
            ["", true],
        ])("isPalindrome(%p) returns %p", (input, expected) => {
            expect(isPalindrome(input)).toBe(expected);
        });
    });


    describe("error cases", () => {
        test.each([
            null,
            undefined,
            13,
            {},
            []
        ])("throws if argument is not a string: %p", (input) => {
            expect(() => {
                isPalindrome(input)
            }).toThrow(TypeError);
        }
        );

    })
})