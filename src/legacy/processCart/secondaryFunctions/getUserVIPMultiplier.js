function getUserVIPMultiplier(user) {
    return user?.isVIP ? 0.9 : 1;
}

export {
    getUserVIPMultiplier
};