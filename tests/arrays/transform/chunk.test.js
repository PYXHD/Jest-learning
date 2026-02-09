import { chunk } from "../../../src/arrays/transform/chunk";

describe("chunk()", () => {

    describe("normal cases", () => {
        test("splits an array into chunks", () => {
            const array = [1, 2, 3, 4, 5, 6];
            const chunkArray = chunk(array, 2);
            expect(chunkArray).toEqual([[1, 2], [3, 4], [5, 6]]);
        });

        test("keeps last chunk smaller if needed", () => {
            const array = [1, 2, 3, 4, 5];
            const chunkArray = chunk(array, 2);
            expect(chunkArray).toEqual([[1, 2], [3, 4], [5]]);
        });
    });


    describe("edge cases", () => {
        test("returns empty array when input is empty", () => {
            const chunkEmptyArray = chunk([], 3);
            expect(chunkEmptyArray).toEqual([]);
        });
    });


    describe("error cases", () => {
        test("throws if argument is not an array", () => {
            expect(() => {
                chunk("banana", 2);
            }).toThrow(TypeError);
        });

        test("throws if size is not a positive integer", () => {
            const array = [1, 2, 3, 4, 5];
            expect(() => {
                chunk(array, 2.5);
            }).toThrow(TypeError);
        });
    });

});