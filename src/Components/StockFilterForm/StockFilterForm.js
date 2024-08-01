import { useReducer } from "react"
import { formReducer,  formInitialState, updateStateOnChange, updateStateOnBlur, FieldNamesEnum} from "./stockFilterFormLogic"

const StockFilterForm = ({onSubmit}) => {

    const [state, dispatch] = useReducer(formReducer, formInitialState)

    const submit = () => {
        onSubmit()
    }

    const onChangeProcess = (event) => {
        updateStateOnChange(state, event.target.name, event.target.value, dispatch)
    }

    const blockNonNumericOnKeyDown = (event) => {
        if (!/[0-9]/.test(event.key) && event.key !== 'Backspace' && event.key !== 'Tab') {
            event.preventDefault();
        }
    }

    const onBlurProcess = (event) => {
        updateStateOnBlur(state, event.target.name, dispatch);
    }

    return(
        <form onSubmit={submit}>
            <input type="text" placeholder="نماد..." name={FieldNamesEnum.symbol} onChange={onChangeProcess} onBlur={onBlurProcess}/>
            {state.symbol.error.hasAny && <p> {state.symbol.error.message}</p>}
            <input type="text" placeholder="نام شرکت..." name={FieldNamesEnum.companyName} onChange={onChangeProcess} onBlur={onBlurProcess}/>
            <input type="number" placeholder="حداکثر قیمت خرید..." name={FieldNamesEnum.maxPrice} onChange={onChangeProcess} onBlur={onBlurProcess} onKeyDown={blockNonNumericOnKeyDown}/>
            <input type="number" placeholder="حداقل قیمت خرید..." name={FieldNamesEnum.minPrice} onChange={onChangeProcess} onBlur={onBlurProcess} onKeyDown={blockNonNumericOnKeyDown}/>
            {state.minPrice.error.hasAny && <p> {state.minPrice.error.message}</p>}
            <input type="text" placeholder="حوزه صنعتی..." name={FieldNamesEnum.industry} onChange={onChangeProcess} onBlur={onBlurProcess}/>
            <input type="submit" value="ثبت"/>
        </form>
    )
}

export default StockFilterForm