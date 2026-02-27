function intersection(arr1, arr2) {
    if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
        throw new TypeError("Arguments must only be arrays")
    }

    const result = []

    for (const value of arr1) {
        if (arr2.includes(value)) {
            result.push(value)
        }
    }

    return [...new Set(result)]
}

export {
    intersection
}