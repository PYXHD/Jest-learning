function isAnagram(str1, str2) {
    if (typeof str1 !== "string" || typeof str2 !== "string") {
        throw new TypeError("Argument must be a string")
    }

    const normalizeAndSort = (str) =>
        str
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .replace(/[^a-z0-9]/g, "")
            .split("")
            .sort()
            .join("");

    return normalizeAndSort(str1) === normalizeAndSort(str2);
}

export {
    isAnagram
}