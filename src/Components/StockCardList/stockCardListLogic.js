import API from "../../api"

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const deleteStockAsync = async (stockId) => {
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

        return true
    }
    catch (error) {
        toast.error('خطا در حذف کردن سهام. لطفاً دوباره تلاش کنید', {
            position: 'top-left',
            autoClose: 5000,
        });

        return false
    }
}
