const UrlEnum = Object.freeze({
    home: "/",
    stockList: "/stock-list",
    addStock: "/add-stock",
    userList: "/user-list",
    user: "/user/:userId",
    stock: "/stock/:stockId",
});

export const isNotFound = (currentUrl) => {
    for (const validUrl in UrlEnum) {
        if (compareUrls(UrlEnum[validUrl], currentUrl)) return false;
    }
    return true;
}

export const compareUrls = (baseUrl, realUrl) => {
    const baseParts = baseUrl.split('/');
    const realParts = realUrl.split('/');
    if (baseParts.length !== realParts.length) return false;

    const len = baseParts.length;
    for (let i=0; i<len; i++) {
        if (baseParts[i].startsWith(":")) continue;
        if (baseParts[i] !== realParts[i]) return false;
    }
    return true;
}

export default UrlEnum
