import { difference } from "./difference"

function symmetricDifference(arr1, arr2) {
    if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
        throw new TypeError("Arguments must only be arrays")
    }

    return [...difference(arr1, arr2), ...difference(arr2, arr1)]
}

export {
    symmetricDifference
}