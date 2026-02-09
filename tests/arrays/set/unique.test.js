import { unique } from "../../../src/arrays/set/unique";

describe("unique()", () => {

    describe("normal cases", () => {
        test("removes duplicates from numbers", () => {
            const numArray = [1, 1, 2, 3, 3, 4];
            const uniqueItems = unique(numArray);
            expect(uniqueItems).toEqual([1, 2, 3, 4]);
        });

        test("removes duplicates from strings", () => {
            const stringArray = ["a", "a", "b", "c", "c", "d"];
            const uniqueItems = unique(stringArray);
            expect(uniqueItems).toEqual(["a", "b", "c", "d"]);

        });
    });


    describe("edge cases", () => {
        test("returns empty array when input is empty", () => {
            const emptyArray = unique([]);
            expect(emptyArray).toEqual([]);
        });
        test("keeps unique values with mixed types", () => {
            const typesArray = ["a", "a", 1, 2, 2];
            const uniqueItems = unique(typesArray);
            expect(uniqueItems).toEqual(["a", 1, 2]);
        });
    });


    describe("error cases", () => {
        test("throws if argument is not an array", () => {
            const notAnArray = "banana";
            expect(() => {
                unique(notAnArray);
            }).toThrow(TypeError);
        });
    });

});