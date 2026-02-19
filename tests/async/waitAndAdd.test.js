import { waitAndAdd } from "../../src/async/waitAndAdd";

describe("waitAndAdd()", () => {
    describe("normal cases", () => {
        test("add two numbers", async () => {
            const result = await waitAndAdd(2, 3);
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