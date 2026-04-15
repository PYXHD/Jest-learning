async function fetchProduct(id) {
    const res = await fetch(`https://api.store.com/products/${id}`);

    if (!res.ok) {
        throw new Error(`Failed to fetch product ${id}`);
    }

    const product = await res.json();
    return product;
}

export {
    fetchProduct
};


