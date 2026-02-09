function sum(arr) {
    if (!Array.isArray(arr)) {
        throw new TypeError("First argument must be an array");
    }
    if (arr.length === 0) {
        return 0;
    }

    let total = 0;
    for (const n of arr) {
        if (!Number.isFinite(n)) {
            throw new TypeError("Array must contain only numbers");
        }
        total += n;
    }
    return total;
}

export {
    sum
};