function union(arr1, arr2) {
    if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
        throw new TypeError("Arguments must only be arrays")
    }

    return [...new Set([...arr1, ...arr2])];
}

export {
    union
}