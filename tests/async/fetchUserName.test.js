import { fetchUserName } from "../../src/async/fetchUserName";

beforeEach(() => jest.useFakeTimers());
afterEach(() => jest.useRealTimers());

describe("fetchUserName()", () => {
    describe("normal cases", () => {
        test.each([
            [1, "Alice"],
            [2, "Bob"]
        ])("fetchUserName(%p) -> %s", async (input, expected) => {
            const promise = fetchUserName(input)
            jest.runAllTimers();
            const result = await promise;
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
            const promise = fetchUserName(4);
            jest.runAllTimers();
            await expect(promise)
                .rejects
                .toThrow("User not found")
        })
    })
})