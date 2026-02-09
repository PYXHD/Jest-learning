function reverse(str) {
    if (typeof str !== "string") {
        throw new TypeError("Argument must be a string");
    }

    return [...str].reverse().join("");
}

export {
    reverse
};