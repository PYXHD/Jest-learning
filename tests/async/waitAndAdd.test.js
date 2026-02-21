import { waitAndAdd } from "../../src/async/waitAndAdd";

beforeEach(() => jest.useFakeTimers());
afterEach(() => jest.useRealTimers());

describe("waitAndAdd()", () => {
    describe("normal cases", () => {
        test("add two numbers", async () => {
            const promise = waitAndAdd(2, 3);
            jest.runAllTimers();
            const result = await promise;
            expect(result).toBe(5)
        })
    })

    describe("error cases", () => {
        test("throws if invalid parameters", async () => {
            await expect(waitAndAdd(2, "x"))
                .rejects
                .toThrow(TypeError)
        })
    })
})