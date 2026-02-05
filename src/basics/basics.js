function sum(a, b) {
    if (!Number.isFinite(a) || !Number.isFinite(b)) {
        throw new TypeError("Arguments must be numbers");
    }

    return a + b;
}

function isEven(n) {
    if (!Number.isFinite(n)) {
        throw new TypeError("Argument must be a number");
    }

    return n % 2 === 0;
}

function capitalize(str) {
    if (typeof str !== "string") {
        throw new TypeError("Argument must be a string");
    }

    if (str.length === 0) return "";

    return str[0].toUpperCase() + str.slice(1);
}

function reverse(str) {
    if (typeof str !== "string") {
        throw new TypeError("Argument must be a string");
    }

    return [...str].reverse().join("");
}

function max(a, b) {
    if (!Number.isFinite(a) || !Number.isFinite(b)) {
        throw new TypeError("Arguments must be numbers");
    }

    return Math.max(a, b);
}

export {
    sum,
    isEven,
    capitalize,
    reverse,
    max
};