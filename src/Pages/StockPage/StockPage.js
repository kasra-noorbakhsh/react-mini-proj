import { useState } from "react"
import StockCardList from "../../Components/StockCardList/StockCardList"
import StockFilterForm from "../../Components/StockFilterForm/StockFilterForm"
import { setStocksAsync } from "./stockPageLogic"

import './stockPageLogic'

import './StockPage.css'

const StockPage = () => {

    const [stocks, setStocks] = useState([])

    const submitForm = () => {
        setStocksAsync(setStocks)
    }

    return(
        <div className="stock-page">
            <StockFilterForm onSubmit={submitForm}/>
            <StockCardList stocks={stocks}/>
        </div>
    )

}

export default StockPage