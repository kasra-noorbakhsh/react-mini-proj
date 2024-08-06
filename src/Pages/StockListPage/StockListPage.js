import { useState } from "react"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import StockCardList from "../../Components/StockCardList/StockCardList"
import StockFilterForm from "../../Components/StockFilterForm/StockFilterForm"

import { setStocksAsync } from "./stockListPageLogic"

const StockListPage = () => {
	const [stocks, setStocks] = useState([])

	const submitForm = () => {
		setStocksAsync(setStocks)
	}

	return (
		<div>
			<ToastContainer />
			<StockFilterForm onSubmit={submitForm} />
			<StockCardList initialStocks={stocks} />
		</div>
	)
}

export default StockListPage
