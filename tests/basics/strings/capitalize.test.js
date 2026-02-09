import { capitalize } from "../../../src/basics/strings/capitalize";

describe("capitalize()", () => {

    describe("normal cases", () => {
        test("capitalizes first letter of a word", () => {
            const result = capitalize("hello");
            expect(result).toBe("Hello");
        });

        test("works with multiple letters", () => {
            const result = capitalize("javascript");
            expect(result).toBe("Javascript");
        });
    });


    describe("edge cases", () => {
        test("returns empty string when input is empty", () => {
            const result = capitalize("");
            expect(result).toBe("");
        });

        test("works with one character", () => {
            const result = capitalize("a");
            expect(result).toBe("A");
        });
    });


    describe("error cases", () => {
        test("throws if argument is not a string", () => {
            expect(() => {
                capitalize(12);
            }).toThrow(TypeError);
        });
    });

});