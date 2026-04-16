import { calculateItemPrice } from "../../../../src/legacy/processCart/secondaryFunctions/calculateItemPrice";

describe("calculateItemPrice()", () => {
    test("returns total for VIP", () => {
        const product = {
            price: 200,
            category: "hygiene"
        };
        const quantity = 2;
        const user = {
            isVIP: true
        }

        const result = calculateItemPrice(product, quantity, user);

        expect(result).toBe(360)
    })

    test("returns total for non VIP", () => {
        const product = {
            price: 250,
            category: "hygiene"
        };
        const quantity = 2;
        const user = {
            isVIP: false
        }

        const result = calculateItemPrice(product, quantity, user);

        expect(result).toBe(500)
    })

    test("returns total electronics category", () => {
        const product = {
            price: 150,
            category: "electronics"
        };
        const quantity = 3;
        const user = {
            isVIP: false
        }

        const result = calculateItemPrice(product, quantity, user);

        expect(result).toBe(540)
    })
})