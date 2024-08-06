export const FieldNamesEnum = Object.freeze({
	symbol: "symbol",
	companyName: "companyName",
	industry: "industry",
	maxPrice: "maxPrice",
	minPrice: "minPrice",
})

export const formInitialStateCreator = () => {
	return {
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
}

export const formReducer = (state, { newState }) => {
	validateAllFields(newState);
	return newState;
}

export const updateStateOnChange = (currentState, fieldName, newValue, dispatcher) => {
	const targetField = currentState[fieldName];
	const changedField = { ...targetField, value: newValue };
	let tempState = { ...currentState, [fieldName]: changedField };
	dispatcher({ newState: tempState });
}

export const updateStateOnBlur = (currentState, fieldName, dispatcher) => {
	const targetField = currentState[fieldName];
	const changedField = { ...targetField, focusOnce: true };
	let tempState = { ...currentState, [fieldName]: changedField };
	dispatcher({ newState: tempState });
}

export const canSubmit = (state) => {
	for (let field in state) {
		if (state[field].error?.hasAny) return false;
	}
	return true;
}



const validateAllFields = (state) => {
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
