import { fetchUserName } from "../../src/async/fetchUserName";

describe("fetchUserName()", () => {
    describe("normal cases", () => {
        test.each([
            [1, "Alice"],
            [2, "Bob"]
        ])("fetchUserName(%p) -> %s", async (input, expected) => {
            const result = await fetchUserName(input);
            expect(result).toBe(expected)
        })
    })

    describe("error cases", () => {
        test.each([
            ["banana"],
            [0],
            [1.2],
            [-4],
            [NaN],
            [null],
            [undefined]
        ])("throws if fetchUserName(%p)", async (input) => {
            await expect(fetchUserName(input))
                .rejects
                .toThrow(TypeError)
        })

        test("throws if invalid id", async () => {
            await expect(fetchUserName(4))
                .rejects
                .toThrow("User not found")
        })
    })
})