function getElectronicsTax(product) {

    if (product.category === "electronics") {
        return 1.2
    }
    return 1;
}

export {
    getElectronicsTax
};