const Url = Object.freeze({
	home: "/",
	stockList: "/stock-list",
	addStock: "/add-stock",
	userList: "/user-list",
	userTemplate: "/user/:userId",
	user: (id) => `/user/${id}`,
	stockTemplate: "/stock/:stockId",
	stock: (id) => `/stock/${id}`,
});

export const isNotFound = (currentUrl) => {
	for (const validUrl in Url) {
		if (typeof Url[validUrl] !== "string") continue;
		if (compareUrls(Url[validUrl], currentUrl)) return false;
	}
	return true;
}

export const compareUrls = (baseUrl, realUrl) => {
	const baseParts = baseUrl.split('/');
	const realParts = realUrl.split('/');
	if (baseParts.length !== realParts.length) return false;

	const len = baseParts.length;
	for (let i = 0; i < len; i++) {
		if (baseParts[i].startsWith(":")) continue;
		if (baseParts[i] !== realParts[i]) return false;
	}
	return true;
}

export default Url
