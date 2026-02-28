function isSubset(arr1, arr2) {
    if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
        throw new TypeError("Arguments must only be arrays")
    }

    return arr1.every(item => arr2.includes(item))
}

export {
    isSubset
}