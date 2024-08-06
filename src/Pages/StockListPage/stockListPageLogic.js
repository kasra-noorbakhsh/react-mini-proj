import API from "../../api"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const fetchStocksAsync = async () => {
    try {
        const response = await fetch(API.getStocks, {
            method: "get",
            headers: { "Content-Type": "application/json" }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        toast.error('خطا در مشاهده سهام ها. لطفاً دوباره تلاش کنید', {
            position: 'top-left',
            autoClose: 5000,
        });
        return []
    }
}

export const setStocksAsync = async (setStock) => {
    const data = await fetchStocksAsync()

    const tempStocks = data.map((data) => {
        return ({
            id: data.id,
            symbol: data.symbol,
            companyName: data.companyName,
            industry: data.industry
        })
    })

    setStock(tempStocks)
}
