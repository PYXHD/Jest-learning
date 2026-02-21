async function fetchUserName(id) {
    if (!Number.isInteger(id) || id <= 0) {
        throw new TypeError("id must be a positive number")
    }

    return await new Promise((resolve, reject) => {
        setTimeout(() => {
            switch (id) {
                case 1:
                    return resolve("Alice");

                case 2:
                    return resolve("Bob");

                default:
                    return reject(new Error("User not found"))
            }
        }, 200)
    })
}

export {
    fetchUserName
}