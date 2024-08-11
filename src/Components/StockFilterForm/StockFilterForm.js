import { useReducer } from "react"
import { formReducer, formInitialStateCreator, updateStateOnChange, updateStateOnBlur, canSubmit, FieldNamesEnum }
	from "./stockFilterFormLogic"

import "./StockFilterForm.css"

const StockFilterForm = ({ onSubmit }) => {
	const [state, dispatch] = useReducer(formReducer, formInitialStateCreator())

	const submit = (event) => {
		event.preventDefault();
		if (canSubmit(state)) {
			onSubmit();
		}
	}

	const onChangeProcess = (event) => {
		updateStateOnChange(state, event.target.name, event.target.value, dispatch);
	}

	const blockNonNumericOnKeyDown = (event) => {
		if (!/[0-9]/.test(event.key) && event.key !== 'Backspace' && event.key !== 'Tab') {
			event.preventDefault();
		}
	}

	const onBlurProcess = (event) => {
		updateStateOnBlur(state, event.target.name, dispatch);
	}

	return (
		<form onSubmit={submit} className="stock-filter-form">
			<div className="form-group">
				<label>نماد:</label>
				<input className="stock-filter-form-input" type="text" placeholder="نماد..."
					   name={FieldNamesEnum.symbol}
					   onChange={onChangeProcess} onBlur={onBlurProcess}/>
				{state.symbol.error.hasAny &&
					<p className="stock-filter-form-error-message">{state.symbol.error.message}</p>}
			</div>

			<div className="form-group">
				<label>نام شرکت:</label>
				<input className="stock-filter-form-input" type="text" placeholder="نام شرکت..."
					   name={FieldNamesEnum.companyName}
					   onChange={onChangeProcess} onBlur={onBlurProcess}/>
			</div>

			<div className="form-group">
				<label>حوزه صنعتی:</label>
				<input className="stock-filter-form-input" type="text" placeholder="حوزه صنعتی..."
					   name={FieldNamesEnum.industry}
					   onChange={onChangeProcess} onBlur={onBlurProcess}/>
			</div>

			<div className="form-group">
				<label>حداکثر قیمت خرید:</label>
				<input className="stock-filter-form-input" type="text" placeholder="حداکثر قیمت خرید..."
					   name={FieldNamesEnum.maxPrice}
					   onChange={onChangeProcess} onBlur={onBlurProcess} onKeyDown={blockNonNumericOnKeyDown}/>
			</div>

			<div className="form-group">
				<label>حداقل قیمت خرید:</label>
				<input className="stock-filter-form-input" type="text" placeholder="حداقل قیمت خرید..."
					   name={FieldNamesEnum.minPrice}
					   onChange={onChangeProcess} onBlur={onBlurProcess} onKeyDown={blockNonNumericOnKeyDown}/>
				{state.minPrice.error.hasAny &&
					<p className="stock-filter-form-error-message">{state.minPrice.error.message}</p>}
			</div>

			<input className="stock-filter-form-submit" type="submit" value="ثبت" disabled={!canSubmit(state)}/>
		</form>

	)
}

export default StockFilterForm
