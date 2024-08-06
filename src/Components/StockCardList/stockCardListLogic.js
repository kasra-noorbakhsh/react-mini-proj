import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import API from "../../api"

export const deleteStockAsync = async (stockId, currentStocks, setStock) => {
	const url = API.forceDeleteStock(stockId);

	try {
		await fetch(url, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
			},
		})

		toast.success('سهام شما با موفقیت حذف شد', {
			position: 'top-left',
			autoClose: 5000,
		});
		setStock(currentStocks.filter(stock => stock.id !== stockId));
	}
	catch (error) {
		toast.error('خطا در حذف کردن سهام. لطفاً دوباره تلاش کنید', {
			position: 'top-left',
			autoClose: 5000,
		});
	}
}
