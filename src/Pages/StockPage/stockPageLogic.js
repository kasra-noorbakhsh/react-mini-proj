import { getStocks } from "../../urls"

const fetchStocksAsync = async () => {
    const response = await fetch(getStocks, {
        method: "get",
        headers: {"Content-Type": "application/json"}
        })

    const data = await response.json()

    return data
}

export const setStocksAsync = async (setStock) =>{
    const data = await fetchStocksAsync()

    const tempStocks = data.map((data) => {
        return({
            id: data.id,
            symbol: data.symbol,
            companyName: data.companyName,
            industry: data.industry
        })
    })

    setStock(tempStocks)
}