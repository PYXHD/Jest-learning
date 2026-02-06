import { getMax, unique, chunk } from "../../src/arrays"

describe("Array utilities", () => {

    // ======================
    // getMax()
    // ======================
    describe("getMax()", () => {

        describe("normal cases", () => {
            test("returns max from positive numbers", () => {
                const maxValue = getMax([2, 7, 8]);
                expect(maxValue).toBe(8);
            });

            test("works with negative numbers", () => {
                const maxValue = getMax([-4, -5, -7]);
                expect(maxValue).toBe(-4);
            });
        });


        describe("edge cases", () => {
            test("returns the only element if there's one element", () => {
                const maxValue = getMax([2]);
                expect(maxValue).toBe(2);
            })
        });


        describe("error cases", () => {

            test("throws if argument is not an array", () => {
                const notAnArray = "banana";
                expect(() => {
                    getMax(notAnArray);
                }).toThrow(TypeError);
            });

            test("throws on empty array", () => {
                const emptyArray = [];
                expect(() => {
                    getMax(emptyArray);
                }).toThrow(RangeError);
            });

            test("throws if array contains non-number values", () => {
                const wrongArray = ["banana", 2];
                expect(() => {
                    getMax(wrongArray);
                }).toThrow(TypeError);
            });
        });

    });


    // ======================
    // unique()
    // ======================
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


    // ======================
    // chunk()
    // ======================
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

});
