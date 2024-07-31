import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./stockFilterFormLogic";

const StockFilterForm = ({onSubmit}) => {

    const {register, handleSubmit, formState:{errors}} = useForm({resolver: yupResolver(schema)})

    const submit = () => {
        onSubmit()
    }

    return(
        <form onSubmit={handleSubmit(submit)}>
            <input type="text" placeholder="نماد..." {...register("symbol")}/>
            {errors.symbol && <p> {errors.symbol.message}</p>}
            <input type="text" placeholder="نام شرکت..." {...register("company")}/>
            <input type="number" placeholder="حداکثر قیمت خرید..." {...register("maxPrice")}/>
            {errors.maxPrice && <p> {errors.maxPrice.message}</p>}
            <input type="number" placeholder="حداقل قیمت خرید..." {...register("minPrice")}/>
            {errors.minPrice && <p> {errors.minPrice.message}</p>}
            <input type="text" placeholder="حوزه صنعتی..." {...register("industry")}/>
            <input type="submit" value="ثبت"/>
        </form>
    )
}

export default StockFilterForm