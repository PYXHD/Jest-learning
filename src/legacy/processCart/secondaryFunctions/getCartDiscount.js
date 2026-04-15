function getCartDiscount(total) {
    if (total > 500) {
        return 50
    }
    return 0
}

export default getCartDiscount;