function countWords(str) {
    if (typeof str !== "string") {
        throw new TypeError("Argument must be a string")
    }

    let cleanedStr = str
        .trim()
        .replace(/[^a-zA-Z0-9À-ÿ']/g, " ")
        .split(/\s+/)
        .filter((word) => word.length > 0);

    return cleanedStr.length
}

export {
    countWords
};