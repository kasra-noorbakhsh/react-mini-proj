import { useReducer } from "react"
import { formReducer,  formInitialState, updateStateOnChange, updateStateOnBlur, FieldNames} from "./stockFilterFormLogic"

const StockFilterForm = ({onSubmit}) => {

    const [state, dispatch] = useReducer(formReducer, formInitialState)

    const submit = () => {
        onSubmit()
    }

    const onChangeProcess = (event) => {
        updateStateOnChange(state, event.target.name, event.target.value, dispatch)
    }

    const blockNonNumericOnKeyDown = (event) => {
        if (!/[0-9]/.test(event.key) && event.key !== 'Backspace') {
            event.preventDefault();
        }
    }

    const onBlurProcess = (event) => {
        updateStateOnBlur(state, event.target.name, dispatch);
    }

    return(
        <form onSubmit={submit}>
            <input type="text" placeholder="نماد..." name={FieldNames.symbol} onChange={onChangeProcess} onBlur={onBlurProcess}/>
            {/* {errors.symbol && <p> {errors.symbol.message}</p>} */}
            <input type="text" placeholder="نام شرکت..." name={FieldNames.companyName} onChange={onChangeProcess} onBlur={onBlurProcess}/>
            <input type="number" placeholder="حداکثر قیمت خرید..." name={FieldNames.maxPrice} onChange={onChangeProcess} onBlur={onBlurProcess} onKeyDown={blockNonNumericOnKeyDown}/>
            {/* {errors.maxPrice && <p> {errors.maxPrice.message}</p>} */}
            <input type="number" placeholder="حداقل قیمت خرید..." name={FieldNames.minPrice} onChange={onChangeProcess} onBlur={onBlurProcess} onKeyDown={blockNonNumericOnKeyDown}/>
            {/* {errors.minPrice && <p> {errors.minPrice.message}</p>} */}
            <input type="text" placeholder="حوزه صنعتی..." name={FieldNames.industry} onChange={onChangeProcess} onBlur={onBlurProcess}/>
            <input type="submit" value="ثبت"/>
        </form>
    )
}

export default StockFilterForm