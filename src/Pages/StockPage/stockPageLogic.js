import { toast } from "react-toastify";
import API from "../../api";

const fetchStockAsync = async (url) => {
	const response = await fetch(url, {
		method: 'get',
		headers: { "Content-Type": "application/json" }
	})

	const data = await response.json()
	return data
}

export const setStockAsync = async (setStock, Id) => {
	const url = API.getStockIncludeComments(Id)
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

export const postCommentAsync = async (data, stockId, setStock) => {
	const url = API.getCommentsByStockId(stockId)
	
	try {
		await fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				title: data.title,
				content: data.content,
				userId: 1,
			}),
		})

		toast.success('دیدگاه شما با موفقیت اضافه شد', {
			position: 'top-left',
			autoClose: 5000,
		});
		setStockAsync(setStock, stockId)
	}
	catch (error) {
		toast.error('خطا در اضافه کردن دیدگاه. لطفاً دوباره تلاش کنید', {
			position: 'top-left',
			autoClose: 5000,
		});
	}
}
