function sumDigits(n) {
    if (!Number.isInteger(n)) {
        throw new TypeError("Argument must be a number");
    }

    let remaining = Math.abs(n);
    let total = 0;

    while (remaining > 0) {
        total += remaining % 10;
        remaining = Math.floor(remaining / 10);
    }

    return total;
}

export {
    sumDigits
};