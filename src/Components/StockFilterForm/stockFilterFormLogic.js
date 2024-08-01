
import { object } from "yup";

// yup.addMethod(yup.number, "compareMinMax", function(errorMassege) {
//     return this.test("compareMinMax", errorMassege, function(val) {
//         const { path, createError } = this;
//         const max = this.resolve(yup.ref("maxPrice"));
//         return (max < 0) || val < max || createError({ path, message: errorMassege || "min max validation failed" });
//     });
// });


// export const schema = yup.object().shape({
//     symbol: yup.string().transform((value, originalValue) => {
//         return (originalValue === "") ? null: value
//     }).min(3, "حداقل طول نماد رعایت نشده است").max(6, "حداکثر طول نماد رعایت نشده است").nullable(true),

//     company: yup.string(),

//     maxPrice: yup.number().transform((value, originalValue) => {
//         return (originalValue === "") ? Infinity: value
//     }).min(0, "عدد وارد شده منفی است").nullable(true),

//     minPrice: yup.number().min(0, "عدد وارد شده منفی است").transform((value, originalValue) => {
//         return (originalValue === "") ? 0: value
//     }).compareMinMax("حداقل قیمت از حداکثر قیمت بیشتر است").nullable(true),

//     industry: yup.string()
// })

export const FieldNamesEnum = Object.freeze({
    symbol: "symbol",
    companyName: "companyName",
    maxPrice: "maxPrice",
    minPrice: "minPrice",
    industry: "industry"
})

export const formInitialState = {
    [FieldNamesEnum.symbol]: {
        value: "",
        focusOnce: false,
        error: {
            hasAny: false,
            message: "",
        }
    },
    [FieldNamesEnum.companyName]: {
        value: "",
        focusOnce: false,
    },
    [FieldNamesEnum.maxPrice]: {
        value: "",
        focusOnce: false,
        error: {
            hasAny: false,
            message: ""
        }
    },
    [FieldNamesEnum.minPrice]: {
        value: "",
        focusOnce: false,
        error: {
            hasAny: false,
            message: ""
        }
    },
    [FieldNamesEnum.industry]: {
        value: "",
        focusOnce: false,
    }
} 

export const formReducer = (state, {newState}) => {
    validateAllFields(newState);
    return newState;
}

export const updateStateOnChange = (currentState, fieldName, newValue, dispatcher) => {
    const targetField = currentState[fieldName];
    const changedField = {...targetField, value: newValue};
    let tempState = {...currentState, [fieldName]: changedField};
    dispatcher({newState: tempState});
}

export const updateStateOnBlur = (currentState, fieldName, dispatcher) => {
    const targetField = currentState[fieldName];
    const changedField = {...targetField, focusOnce: true};
    let tempState = {...currentState, [fieldName]: changedField};
    dispatcher({newState: tempState});
}

const validateAllFields  = (state) => {
    validateSymbol(state.symbol);
    validateMinPrice(state.minPrice, state.maxPrice);
}

const validateMinPrice = (minPrice, maxPrice) => {
    if (minPrice.value === "" || minPrice.focusOnce === false ||
        maxPrice.value === "" || maxPrice.focusOnce === false) {
            clearErrorObject(minPrice.error);
            return;
    }

    if (Number(minPrice.value) > Number(maxPrice.value)) {
        minPrice.error.hasAny = true;
        minPrice.error.message = "حداقل قیمت از حداکثر قیمت بیشتر است";
    }
    else {
        clearErrorObject(minPrice.error);
    }
}

const validateSymbol = (symbol) => {
    if (symbol.value === "" || symbol.focusOnce === false) {
        clearErrorObject(symbol.error);
        return;
    }

    if (symbol.value.length > 6) {
        symbol.error.hasAny = true;
        symbol.error.message = "حداکثر طول نماد رعایت نشده است";
    }
    else if (symbol.value.length < 3) {
        symbol.error.hasAny = true;
        symbol.error.message = "حداقل طول نماد رعایت نشده است";
    }
    else {
        clearErrorObject(symbol.error);
    }
}

const clearErrorObject = (error) => {
    error.hasAny = false;
    error.message = "";
} 
