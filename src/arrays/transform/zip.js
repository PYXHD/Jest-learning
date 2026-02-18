function zip(arr1, arr2) {
    if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
        throw new TypeError("Arguments must be arrays");
    }

    const min = Math.min(arr1.length, arr2.length);
    const result = [];

    for (let i = 0; i < min; i++) {
        result.push([arr1[i], arr2[i]]);
    }

    return result;
}

export {
    zip
}