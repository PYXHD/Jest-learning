import { getElectronicsTax } from "./getElectronicTax";
import { getUserVIPMultiplier } from "./getUserVIPMultiplier";

function calculateItemPrice(product, quantity, user) {
    const basePrice = product.price * quantity;
    const tax = getElectronicsTax(product);
    const discount = getUserVIPMultiplier(user);

    return basePrice * tax * discount;
}

export {
    calculateItemPrice
};