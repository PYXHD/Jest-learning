function validateStock(product, quantity) {
    if (!product || product.stock < quantity) {
        throw new Error("Out of stock");
    }
}

export {
    validateStock
};