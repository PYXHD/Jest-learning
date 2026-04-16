import { jest } from "@jest/globals";
import { processOrder } from "../../../src/legacy/orderProcessor/orderProcessor";

describe("processOrder()", () => {
    beforeEach(() => {
        jest.useFakeTimers();
    });

    afterEach(() => {
        jest.useRealTimers();
        jest.clearAllMocks();
    });

    const mockShipping = (cost) => {
        global.fetch = jest.fn().mockResolvedValue({
            json: () => Promise.resolve({ cost }),
        });
    };

    describe("happy path", () => {
        test("returns correct total, normal", async () => {
            jest.setSystemTime(new Date("2026-03-03"));
            mockShipping(10);

            const order = {
                items: [{ price: 10, quantity: 2 }],
            };

            const user = {
                country: "FR",
                isPremium: false,
            };

            const result = await processOrder(order, user);

            expect(result.total).toBe(30);
            expect(result.shipping).toBe(10);
            expect(result.discount).toBe(0);
        });

        test("returns correct total, premium", async () => {
            jest.setSystemTime(new Date("2026-03-03"));
            mockShipping(10);

            const order = {
                items: [{ price: 10, quantity: 2 }],
            };

            const user = {
                country: "FR",
                isPremium: true,
            };

            const result = await processOrder(order, user);

            expect(result.total).toBe(28);
            expect(result.shipping).toBe(10);
            expect(result.discount).toBe(2);
        });

        test("returns correct total, WE fees", async () => {
            jest.setSystemTime(new Date("2026-03-07"));
            mockShipping(10);

            const order = {
                items: [{ price: 10, quantity: 2 }],
            };

            const user = {
                country: "FR",
                isPremium: false,
            };

            const result = await processOrder(order, user);

            expect(result.total).toBe(35);
            expect(result.shipping).toBe(10);
            expect(result.discount).toBe(0);
        });
    });

    describe("error cases", () => {
        test.each([
            [undefined, {}],
            [{}, undefined],
            [null, {}],
            [{}, null],
        ])("throws if argument is empty", async (input1, input2) => {
            await expect(processOrder(input1, input2))
                .rejects
                .toThrow("Invalid data");
        });

        test("throws if API rejects", async () => {
            global.fetch = jest.fn().mockRejectedValue(
                new Error("Network error")
            );

            const order = { items: [{ price: 10, quantity: 2 }] };
            const user = { country: "FR", isPremium: false };

            await expect(processOrder(order, user))
                .rejects
                .toThrow();
        });

        test("throws if API returns null", async () => {
            mockShipping(null);

            const order = {
                items: [{ price: 10, quantity: 2 }],
            };

            const user = {
                country: "FR",
                isPremium: false,
            };

            await expect(processOrder(order, user))
                .rejects
                .toThrow("Shipping calculation failed")
        })
    });
});