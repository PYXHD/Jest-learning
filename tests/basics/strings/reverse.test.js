import { reverse } from "../../../src/basics/strings/reverse";

describe("reverse()", () => {

    describe("normal cases", () => {
        test("reverses a simple word", () => {
            const result = reverse("hello");
            expect(result).toBe("olleh");
        });

        test("reverses a sentence", () => {
            const result = reverse("hello everyone");
            expect(result).toBe("enoyreve olleh");
        });
    });


    describe("edge cases", () => {
        test("returns empty string when input is empty", () => {
            const result = reverse("");
            expect(result).toBe("");
        });

        test("works with one character", () => {
            const result = reverse("e");
            expect(result).toBe("e");
        });
    });


    describe("error cases", () => {
        test("throws if argument is not a string", () => {
            expect(() => {
                reverse(12);
            }).toThrow(TypeError);
        });
    });

});