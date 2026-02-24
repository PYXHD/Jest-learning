function mean(values) {
    if (!Array.isArray(values)) {
        throw new TypeError("Argument must be an array")
    }
    if (values.length === 0) {
        throw new RangeError("Argument must not be empty")
    }
    if (values.some(n => !Number.isFinite(n))) {
        throw new TypeError("Argument's items must be only finite numbers")
    }

    return values.reduce((acc, item) => acc += item, 0) / values.length
}

export {
    mean
}