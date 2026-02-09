function sum(a, b) {
    if (!Number.isFinite(a) || !Number.isFinite(b)) {
        throw new TypeError("Arguments must be numbers");
    }

    return a + b;
}

export {
    sum
};