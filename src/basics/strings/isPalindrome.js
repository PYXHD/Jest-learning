function isPalindrome(str) {
    if (typeof str !== "string") {
        throw new TypeError("argument must be a string");
    }

    const cleaned = str
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-z0-9]/g, "");;

    return cleaned === [...cleaned].reverse().join("");
}


export {
    isPalindrome
}