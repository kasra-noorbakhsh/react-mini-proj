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

    const deleteStock = async (stockId) => {
        if (!hasDelete) return;
        
        const success = await deleteStockAsync(stockId);
        if (success) {
            setStocks(stocks.filter(stock => stock.id !== stockId));
        }
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
