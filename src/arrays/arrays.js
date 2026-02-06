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

function unique(arr) {
    if (!Array.isArray(arr)) {
        throw new TypeError("Argument must be an array");
    }

    return [...new Set(arr)]
}

function chunk(arr, size) {
    if (!Array.isArray(arr)) {
        throw new TypeError("Argument must be an array");
    }
    if (!Number.isInteger(size) || size <= 0) {
        throw new TypeError("Size must be a positive integer");
    }

    const result = [];
    for (let i = 0; i < arr.length; i += size) {
        result.push(arr.slice(i, i + size));
    }
    return result;
}

export {
    getMax,
    unique,
    chunk,
};