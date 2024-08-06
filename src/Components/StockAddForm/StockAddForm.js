import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { schema } from './stockAddFormLogic'
import { addStockAsync } from './stockAddFormLogic'

import './StockAddForm.css'

export const StockAddForm = () => {
	const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) })

	const addNewStock = (data) => {
		addStockAsync(data)
	}

	return (
		<form className="stock-add-form" onSubmit={handleSubmit(addNewStock)}>

			<div>
				<label>نماد: </label>
				<input className='stock-add-form-input' placeholder='نماد...' type='text' {...register("symbol")} />
			</div>

			{errors.symbol && (<p className='add-form-error-message'>{errors.symbol?.message}</p>)}

			<div>
				<label>نام شرکت: </label>
				<input className='stock-add-form-input' placeholder='نام شرکت...' type='text' {...register("companyName")} />
			</div>

			{errors.companyName && (<p className='add-form-error-message'>{errors.companyName?.message}</p>)}

			<div>
				<label>قیمت خرید: </label>
				<input className='stock-add-form-input' placeholder='قیمت خرید...' type='number' {...register("price")} />
			</div>

			{errors.price && (<p className='add-form-error-message'>{errors.price?.message}</p>)}

			<div>
				<label>آخرین قیمت خرید: </label>
				<input className='stock-add-form-input' placeholder='آخرین قیمت خرید...' type='number' {...register("lastPrice")} />
			</div>

			{errors.lastPrice && (<p className='add-form-error-message'>{errors.lastPrice?.message}</p>)}

			<div>
				<label>صنعت: </label>
				<input className='stock-add-form-input' placeholder='صنعت...' type='text' {...register("industry")} />
			</div>

			{errors.industry && (<p className='add-form-error-message'>{errors.industry?.message}</p>)}

			<div>
				<label>ارزش بنیادی: </label>
				<input className='stock-add-form-input' placeholder='ارزش بنیادی...' type='number' {...register("value")} />
			</div>

			{errors.value && (<p className='add-form-error-message'>{errors.value?.message}</p>)}

			<input className='stock-add-form-submit' type="submit" value="ثبت" />

		</form>
	)
}
