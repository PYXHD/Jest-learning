async function waitAndAdd(a, b) {
    if (!Number.isFinite(a) || !Number.isFinite(b)) {
        throw new TypeError("Arguments must be numbers")
    }

    const result = await new Promise((resolve) => {
        setTimeout(() => {
            resolve(a + b);
        }, 100);
    });

    return result
}

export {
    waitAndAdd
}