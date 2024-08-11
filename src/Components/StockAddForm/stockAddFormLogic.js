import { toast } from 'react-toastify';
import API from "../../api"
import * as yup from 'yup'

export const schema = yup.object().shape({
	symbol: yup.string().required("فیلد نماد اجباری است").min(3, "حداقل طول نماد رعایت نشده است")
		.max(6, "حداکثر طول نماد رعایت نشده است"),

	companyName: yup.string().required("فیلد نام شرکت اجباری است"),

	price: yup.number().typeError('قیمت باید عدد باشد').required("فیلد قیمت خرید اجباری است").positive("قیمت باید مثبت باشد"),

	lastPrice: yup.number().typeError('قیمت باید عدد باشد').required("فیلد قیمت خرید اجباری است").positive("قیمت باید مثبت باشد"),

	industry: yup.string().required("فیلد حوزه صنعتی اجباری است"),

	value: yup.number().typeError('ارزش بنیادی باید عدد باشد').required("فیلد ارزش بنیادی اجباری است")
		.positive("ارزش بنیادی باید مثبت باشد")
})

export const addStockAsync = async (data) => {
	try {
		await fetch(API.postStock, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				symbol: data.symbol,
				companyName: data.companyName,
				purchase: data.price,
				lastDiv: data.lastPrice,
				industry: data.industry,
				marketCap: data.value,
			}),
		})

		toast.success('سهام شما با موفقیت اضافه شد', {
			position: 'top-left',
			autoClose: 5000,
		});
	}
	catch (error) {
		toast.error('خطا در اضافه کردن سهام. لطفاً دوباره تلاش کنید', {
			position: 'top-left',
			autoClose: 5000,
		});
	}
}
