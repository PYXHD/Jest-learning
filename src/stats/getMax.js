function getMax(arr) {
    if (!Array.isArray(arr)) {
        throw new TypeError("Argument must be an array");
    }
    if (arr.length === 0) {
        throw new RangeError("Array is empty");
    }
    if (arr.some(n => !Number.isFinite(n))) {
        throw new TypeError("Array must contain only numbers");
    }

    return Math.max(...arr)
}

export {
    getMax
};