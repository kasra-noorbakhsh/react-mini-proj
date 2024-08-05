import { getStocks } from "../../apis";
import {toast} from "react-toastify";


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



export const CommentCreatorPopupAsync = async (data, stockId) => {
    const url = `http://localhost:5206/api/comment/${stockId}`
    console.log(data)
    try {
        const response = await fetch(url, {
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

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        toast.success('دیدگاه شما با موفقیت اضافه شد', {
            position: 'top-left',
            autoClose: 5000,
        });
        return true
    }

    catch (error) {
        toast.error('خطا در اضافه کردن دیدگاه. لطفاً دوباره تلاش کنید', {
            position: 'top-left',
            autoClose: 5000,
        });
        return false

    }

}


