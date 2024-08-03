import { postStock } from "../../urls"
import { toast } from 'react-toastify';
import * as yup from 'yup'

export const schema = yup.object().shape({
    symbol: yup.string().required("فیلد نماد اجباری است").min(3, "حداقل طول نماد رعایت نشده است")
    .max(6, "حداکثر طول نماد رعایت نشده است"),

    companyName: yup.string().required("فیلد نام شرکت اجباری است"),

    price: yup.number().required("فیلد قیمت خرید اجباری است").positive("قیمت باید مثبت باشد"),

    lastPrice: yup.number().required("فیلد قیمت خرید اجباری است").positive("قیمت باید مثبت باشد"),

    industry: yup.string().required("فیلد حوزه صنعتی اجباری است"),

    value: yup.number().required("فیلد ارزش بنیادی اجباری است").positive("ارزش بنیادی باید مثبت باشد")
})

export const addStockAsync = async (data) => {

    const response = await fetch(postStock, {
            method: 'POST', 
            headers:{
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

    if (!response.ok) {
        throw new Error('Network response was not ok');
    }

    if(response.ok) {
        toast.success('سهام شما با موفقیت اضافه شد', {
            position: 'top-left',
            autoClose: 5000, 
        });
    }
}
