function getUserVIPMultiplier(user) {
    if (user.isVIP) {
        return 0.9
    }
    return 1;
}

export {
    getUserVIPMultiplier
};