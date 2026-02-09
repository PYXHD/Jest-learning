function isEven(n) {
    if (!Number.isFinite(n)) {
        throw new TypeError("Argument must be a number");
    }

    return n % 2 === 0;
}

export {
    isEven
};