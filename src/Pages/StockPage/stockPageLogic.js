import { getStocks } from "../../urls";

const fetchStockAsync = async (url) => {
    const response = await fetch(url, {
        method: 'get',
        headers: { "Content-Type": "application/json" }
    })

    const data = await response.json()
    return data
}

export const setStockAsync = async (setStock, Id) => {
    const url = `${getStocks}/with-comments/${Id}`
    const data = await fetchStockAsync(url)

    const tempStocks = {
        id: data.id,
        symbol: data.symbol,
        companyName: data.companyName,
        industry: data.industry,
        purchase: data.purchase,
        lastDiv: data.lastDiv,
        comments: data.comments,
    }
    setStock(tempStocks);
}
