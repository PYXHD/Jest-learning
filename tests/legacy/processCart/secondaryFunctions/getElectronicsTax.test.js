import { getElectronicsTax } from "../../../../src/legacy/processCart/secondaryFunctions/getElectronicTax";

describe("getElectronicsTax()", () => {
    describe("normal cases", () => {
        test("returns 1.2 if category is electronics", () => {
            const product = {
                category: "electronics"
            };

            expect(getElectronicsTax(product)).toBe(1.2);
        })

        test("returns 1 if category is not electronics", () => {
            const product = {
                category: "hygiene"
            };

            expect(getElectronicsTax(product)).toBe(1);
        })
    })

    describe("edge cases", () => {
        test("returns 1 if product is empty", () => {
            expect(getElectronicsTax({})).toBe(1);
        })
    })
})