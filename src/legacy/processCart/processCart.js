import {
    fetchProduct,
    validateStock,
    calculateItemPrice,
    getCartDiscount
} from "./secondaryFunctions"

async function processCart(cart, user) {
    if (!cart || !cart.items || cart.items.length === 0) {
        throw new Error("Empty cart");
    }

    let total = 0;

    const itemsWithProducts = await Promise.all(
        cart.items.map(async (item) => {
            const product = await fetchProduct(item.id);
            return { item, product }
        })
    )

    for (const { item, product } of itemsWithProducts) {
        validateStock(product, item.quantity);

        const price = calculateItemPrice(product, item.quantity, user);

        total += price;
    }

    total -= getCartDiscount(total);

    return {
        total,
        itemCount: cart.items.length
    };
}

export default processCart;