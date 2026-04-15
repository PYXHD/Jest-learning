import { getUserVIPMultiplier } from "../../../../src/legacy/processCart/secondaryFunctions/getUserVIPMultiplier";

describe("getUserVIPMultiplier", () => {
    describe("normal cases", () => {
        test("returns 0.9 if user is VIP", () => {
            const user = {
                isVIP: true
            }

            expect(getUserVIPMultiplier(user)).toBe(0.9);
        })

        test("returns 1 if user is not VIP", () => {
            const user = {
                isVIP: false
            }

            expect(getUserVIPMultiplier(user)).toBe(1);
        })
    })

    describe("edge cases", () => {
        test("returns 1 if user is undefined", () => {
            expect(getUserVIPMultiplier(undefined)).toBe(1);
        })
    })
})