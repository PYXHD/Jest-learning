import { zip } from "../../../src/arrays/transform/zip";

describe("zip()", () => {
    describe("normal cases", () => {
        test.each([
            [[1, 2, 3], ["a", "b", "c"], [[1, "a"], [2, "b"], [3, "c"]]],
            [[1, 2, 3], ["a", "b"], [[1, "a"], [2, "b"]]],
        ])("zip(%p, %p) -> %p", (input1, input2, expected) => {
            expect(zip(input1, input2)).toEqual(expected);
        });
    });

    describe("edge cases", () => {
        test.each([
            [[], [], []],
            [["1"], [], []],
            [[], ["a", "b", "c"], []],
            [["x"], ["y"], [["x", "y"]]],
        ])("zip(%p, %p) -> %p", (input1, input2, expected) => {
            expect(zip(input1, input2)).toEqual(expected);
        });
    });

    describe("error cases", () => {
        test.each([
            [[1, 2, 3], 12],
            ["banana", [1, 2, 3]],
            [[1, 2, 3], {}],
            [[1, 2, 3], undefined],
            [null, [1, 2, 3]],
        ])("throws if %p or %p is not an array", (input1, input2) => {
            expect(() => zip(input1, input2)).toThrow(TypeError);
        });

        test("does not mutate inputs", () => {
            const a = [1, 2, 3];
            const b = ["a", "b", "c"];
            zip(a, b);
            expect(a).toEqual([1, 2, 3]);
            expect(b).toEqual(["a", "b", "c"]);
        });

    });
});
