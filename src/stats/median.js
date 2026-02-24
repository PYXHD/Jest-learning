function median(values) {
    if (!Array.isArray(values)) {
        throw new TypeError("Argument must be an array")
    }
    if (values.length === 0) {
        throw new RangeError("Argument must not be empty")
    }
    if (values.some(n => !Number.isFinite(n))) {
        throw new TypeError("Argument's items must be only finite numbers")
    }

    const sorted = [...values].sort((a, b) => a - b)
    const mid = Math.floor(sorted.length / 2);

    if (sorted.length % 2 !== 0) {
        return sorted[mid];
    }

    return (sorted[mid] + sorted[mid - 1]) / 2;
}

export {
    median
}