import { getCartDiscount } from "../../../../src/legacy/processCart/secondaryFunctions";

describe("getCartDiscount()", () => {
    describe("normal cases", () => {
        test("returns 50 if total > 500", () => {
            expect(getCartDiscount(600)).toBe(50);
        })
        test("returns 0 if total < 500", () => {
            expect(getCartDiscount(400)).toBe(0);
        })
    })

    describe("edge cases", () => {
        test("returns 0 if total = 500", () => {
            expect(getCartDiscount(500)).toBe(0);
        })
    })
})