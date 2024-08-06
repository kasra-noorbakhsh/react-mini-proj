//TODO: choose the path of this file and check the naming
const API = {
    getStocks: "http://localhost:5206/api/stock",
    getUsers: "http://localhost:5206/api/user",
    postStock: 'http://localhost:5206/api/stock',
    forceDeleteStock: (id) => `http://localhost:5206/api/stock/force/${id}`,
    getUserEncludePortfolio: (id) => `http://localhost:5206/api/user/${id}/with-portfolio`,
}

export default API;
