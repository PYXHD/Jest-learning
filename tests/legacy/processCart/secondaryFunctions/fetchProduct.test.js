import { fetchProduct } from "../../../../src/legacy/processCart/secondaryFunctions/fetchProduct";
import { jest } from '@jest/globals';

describe("fetchProduct()", () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    test("normal case", async () => {
        const product = {
            stock: 2,
            category: "electronics"
        }
        global.fetch = jest.fn().mockResolvedValue({
            ok: true,
            json: async () => product
        });
        const result = await fetchProduct(2)

        expect(fetch).toHaveBeenCalledWith("https://api.store.com/products/2");
        expect(result).toEqual(product);
    })

    test("error case", async () => {
        global.fetch = jest.fn().mockResolvedValue({
            ok: false,
            json: async () => ({})
        });

        await expect(fetchProduct(2)).rejects.toThrow("Failed to fetch product 2");
    });
})