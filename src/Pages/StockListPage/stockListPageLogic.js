import { toast } from 'react-toastify';
import API from "../../api"

const fetchStocksAsync = async () => {
	try {
		const response = await fetch(API.getStocks, {
			method: "get",
			headers: { "Content-Type": "application/json" }
		});

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
