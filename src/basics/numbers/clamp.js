function clamp(value, min, max) {
    if (
        !Number.isFinite(value)
        || !Number.isFinite(min)
        || !Number.isFinite(max)
    ) {
        throw new TypeError("Arguments must be numbers")
    }
    if (min > max) {
        throw new RangeError("Min must be less than or equal to max")
    }

    if (value < min) return min;
    if (value > max) return max;
    return value;
}

export {
    clamp
}