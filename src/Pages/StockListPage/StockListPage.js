import { useState } from "react"
import StockCardList from "../../Components/StockCardList/StockCardList"
import StockFilterForm from "../../Components/StockFilterForm/StockFilterForm"
import { setStocksAsync } from "./stockListPageLogic"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './stockListPageLogic'

const StockListPage = () => {

    const [stocks, setStocks] = useState([])

    const submitForm = () => {
        setStocksAsync(setStocks)
    }

    return (
        <div className="stock-page">
            <ToastContainer />
            <StockFilterForm onSubmit={submitForm} />
            <StockCardList initialStocks={stocks} />
        </div>
    )

}

export default StockListPage
