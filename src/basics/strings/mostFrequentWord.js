function mostFrequentWord(str) {
    if (typeof str !== "string") {
        throw new TypeError("Argument must be a string")
    }
    const cleaned = str
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^\w\s]/g, "")
        .split(" ")
        .filter(word => word.length > 0)

    if (cleaned.length === 0) {
        return null;
    }

    const counts = cleaned.reduce((finObject, word) => {
        if (finObject[word] === undefined) {
            finObject[word] = 1;
        } else {
            finObject[word]++;
        }
        return finObject
    }, {})

    let max = 0;
    let winner = null;

    for (const word of Object.keys(counts)) {
        if (counts[word] > max) {
            max = counts[word]
            winner = word;
        }
    }
    return winner;
}

export {
    mostFrequentWord
}