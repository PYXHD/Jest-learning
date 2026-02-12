function average(numbers) {
    if (!Array.isArray(numbers)) {
        throw new TypeError("Argument must be an array")
    }
    if (numbers.length === 0) {
        throw new RangeError("Argument must no be empty")
    }
    if (numbers.some(n => !Number.isFinite(n))) {
        throw new TypeError("Items of argument must only be finite numbers")
    }
    return numbers.reduce((acc, n) => acc + n, 0) / numbers.length
}

export {
    average
}
