import { validateStock } from "../../../../src/legacy/processCart/secondaryFunctions/validateStock";

describe("validateStock()", () => {
    test("throws if product is undefined", () => {
        expect(() => {
            validateStock(undefined, 3)
        }).toThrow(Error)
    })

    test("throws if stock < quantity", () => {
        const product = {
            stock: 3
        }
        expect(() => {
            validateStock(product, 4)
        }).toThrow(Error)
    })
})