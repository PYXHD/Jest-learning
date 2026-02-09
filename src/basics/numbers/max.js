function max(a, b) {
    if (!Number.isFinite(a) || !Number.isFinite(b)) {
        throw new TypeError("Arguments must be numbers");
    }

    return Math.max(a, b);
}

export {
    max
};