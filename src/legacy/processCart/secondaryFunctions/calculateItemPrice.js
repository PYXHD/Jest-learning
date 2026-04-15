import { getElectronicsTax, getUserVIPMultiplier } from "./getElectronicTax";

function calculateItemPrice(product, quantity, user) {
    const basePrice = product.price * quantity;
    const tax = getElectronicsTax(product);
    const discount = getUserVIPMultiplier(user);

    return basePrice * tax * discount;
}

export default calculateItemPrice;