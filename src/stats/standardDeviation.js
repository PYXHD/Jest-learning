import { mean } from "./mean.js"

function standardDeviation(arr) {
    if (!Array.isArray(arr)) {
        throw new TypeError("Argument must be an array")
    }

    if (arr.some(n => !Number.isFinite(n))) {
        throw new TypeError("Argument items must only be numbers")
    }

    if (arr.length === 0) {
        return null
    }
    if (arr.length === 1) {
        return 0
    }

    const average = mean(arr);

    const variance = []
    for (const n of arr) {
        variance.push((n - average) ** 2)
    }

    return Math.sqrt(mean(variance))
}

console.log(standardDeviation([2, 4, 6]))
console.log(standardDeviation([-2, -5, -8]))
console.log(standardDeviation([1.2, 5.4, 6.8]))

export {
    standardDeviation
}