async function fetchProduct(id) {
    const res = await fetch(`https://api.store.com/products/${id}`);
    const product = await res.json();

    return product
}

function validateStock(product, quantity) {
    if (!product || product.stock < quantity) {
        throw new Error("Out of stock");
    }
}

function getElectronicsTax(product) {

    if (product.category === "electronics") {
        return 1.2
    }
    return 1;
}

function getUserVIPMultiplier(user) {
    if (user.isVIP) {
        return 0.9
    }
    return 1;
}

function calculateItemPrice(product, quantity, user) {
    const basePrice = product.price * quantity;
    const tax = getElectronicsTax(product);
    const discount = getUserVIPMultiplier(user);

    return basePrice * tax * discount;
}

function getCartDiscount(total) {
    if (total > 500) {
        return 50
    }
    return 0
}

async function processCart(cart, user) {
    if (!cart || !cart.items || cart.items.length === 0) {
        throw new Error("Empty cart");
    }

    let total = 0;

    for (const item of cart.items) {
        const product = await fetchProduct(item.id);
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