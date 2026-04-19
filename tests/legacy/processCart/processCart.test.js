import { jest } from "@jest/globals";

jest.unstable_mockModule(
    "../../../src/legacy/processCart/secondaryFunctions",
    async () => ({
        fetchProduct: jest.fn(),
        validateStock: jest.fn(),
        calculateItemPrice: jest.fn(),
        getCartDiscount: jest.fn(),
    })
);

describe("processCart()", () => {
    test("throws if cart is null", async () => {
        const { default: processCart } = await import(
            "../../../src/legacy/processCart/processCart"
        );

        await expect(processCart(null, {})).rejects.toThrow("Empty cart");
    });

    test("throws if cart.items is empty", async () => {
        const { default: processCart } = await import(
            "../../../src/legacy/processCart/processCart"
        );

        await expect(processCart({ items: [] }, {})).rejects.toThrow("Empty cart");
    });

    test("processes single item correctly", async () => {
        const { default: processCart } = await import(
            "../../../src/legacy/processCart/processCart"
        );

        const {
            fetchProduct,
            calculateItemPrice,
            getCartDiscount
        } = await import(
            "../../../src/legacy/processCart/secondaryFunctions"
        );

        fetchProduct.mockResolvedValue({ id: 1 });
        calculateItemPrice.mockReturnValue(50);
        getCartDiscount.mockReturnValue(0);

        const cart = {
            items: [{ id: 1, quantity: 2 }]
        };

        const result = await processCart(cart, {});

        expect(result).toEqual({
            total: 50,
            itemCount: 1
        });
    });

    test("processes multiple items correctly", async () => {
        const { default: processCart } = await import(
            "../../../src/legacy/processCart/processCart"
        );

        const {
            fetchProduct,
            calculateItemPrice,
            getCartDiscount
        } = await import(
            "../../../src/legacy/processCart/secondaryFunctions"
        );

        fetchProduct.mockResolvedValue({});

        calculateItemPrice
            .mockReturnValueOnce(30)
            .mockReturnValueOnce(70);

        getCartDiscount.mockReturnValue(0);

        const cart = {
            items: [
                { id: 1, quantity: 1 },
                { id: 2, quantity: 1 }
            ]
        };

        const result = await processCart(cart, {});

        expect(result).toEqual({
            total: 100,
            itemCount: 2
        });
    });

    test("throws if validateStock fails", async () => {
        const { default: processCart } = await import(
            "../../../src/legacy/processCart/processCart"
        );

        const {
            fetchProduct,
            validateStock
        } = await import(
            "../../../src/legacy/processCart/secondaryFunctions"
        );

        fetchProduct.mockResolvedValue({});

        validateStock.mockImplementation(() => {
            throw new Error("Out of stock");
        });

        const cart = {
            items: [{ id: 1, quantity: 10 }]
        };

        await expect(processCart(cart, {})).rejects.toThrow("Out of stock");
    });
});