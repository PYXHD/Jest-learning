async function processCart(cart, user) {
    if (!cart || !cart.items || cart.items.length === 0) {
        throw new Error("Empty cart");
    }

    let total = 0;

    for (const item of cart.items) {
        const res = await fetch(`https://api.store.com/products/${item.id}`);
        const product = await res.json();

        if (!product || product.stock < item.quantity) {
            throw new Error("Out of stock");
        }

        let price = product.price * item.quantity;

        if (product.category === "electronics") {
            price *= 1.2;
        }

        if (user.isVIP) {
            price *= 0.9;
        }

        total += price;
    }

    if (total > 500) {
        total -= 50;
    }

    return {
        total,
        itemCount: cart.items.length
    };
}

export { processCart };

// processOrder avec la première gestion d'erreur
// fetchProduct avec l'async
// ok, validateStock avec la seconde gestion d'erreur
// calculateItemPrice avec le prix, la taxe, le VIP
// applyDiscount avec la réduction