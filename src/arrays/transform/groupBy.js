function groupBy(array, fn) {
    if (!Array.isArray(array)) {
        throw new TypeError("Array must be an array")
    }
    if (typeof fn !== "function") {
        throw new TypeError("fn must be a function")
    }

    return array.reduce((finArray, element) => {
        const key = fn(element);

        if (!finArray[key]) {
            finArray[key] = [];
        }
        finArray[key].push(element);
        return finArray;
    }, {})
}

export {
    groupBy
};