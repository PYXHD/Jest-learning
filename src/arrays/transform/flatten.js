function flatten(arr, depth = 1) {
    if (!Array.isArray(arr)) {
        throw new TypeError("Arr must be an array")
    }
    if (!Number.isInteger(depth)) {
        throw new RangeError("Depth must be an integer")
    }
    if (depth < 0) {
        throw new RangeError("Depth must be >= 0")
    }

    if (depth === 0) {
        return [...arr]
    }

    return arr.reduce((finalArr, element) => {
        if (!Array.isArray(element)) {
            finalArr.push(element)
        } else {
            finalArr.push(...flatten(element, depth - 1))
        }
        return finalArr;
    }, [])
}

export {
    flatten
}