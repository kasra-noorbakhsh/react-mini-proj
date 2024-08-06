import StockCard from '../StockCard/StockCard'
import { useNavigate } from 'react-router-dom'
import { deleteStockAsync } from './stockCardListLogic'
import { ToastContainer } from 'react-toastify'
import { useState, useEffect } from 'react';
import Url from "../../url"

import './StockCardList.css'

const StockCardList = ({ initialStocks, hasNavigate=true, hasDelete=true }) => {
    const [stocks, setStocks] = useState(initialStocks);
    const navigate = useNavigate()

    useEffect(() => {
        setStocks(initialStocks);
    }, [initialStocks]);

    const viewStockPage = (stockId) => {
        if (!hasNavigate) return;

        const url = Url.stock(stockId)
        navigate(url)
    }

    const deleteStock = (stockId) => {
        if (!hasDelete) return;
        
        deleteStockAsync(stockId, stocks, setStocks);
    }

    return (
        <div className='stock-card-container'>
            <ToastContainer />
            { stocks.map(stock => <StockCard key={stock.id} stockData={stock} viewStockPage={viewStockPage} 
              deleteStockProcess={deleteStock} hasDeleteBtn={hasDelete} hasNavigateBtn={hasNavigate} />)}
        </div>
    )
}

export default StockCardList
