function mode(arr) {
    if (!Array.isArray(arr)) {
        throw new TypeError("Argument must be an array")
    }

    if (arr.some(n => !Number.isFinite(n))) {
        throw new TypeError("Argument items must only be numbers")
    }

    if (arr.length === 0) {
        return null
    }

    const counts = {}

    for (const n of arr) {
        counts[n] = (counts[n] || 0) + 1
    }

    const max = Math.max(...Object.values(counts))

    if (max === 1) {
        return null
    }

    const modes = Object.keys(counts)
        .filter(key => counts[key] === max)
        .map(Number)

    return modes.length === 1 ? modes[0] : modes
}

export {
    mode
}