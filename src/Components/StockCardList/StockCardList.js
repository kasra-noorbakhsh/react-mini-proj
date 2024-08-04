import StockCard from '../StockCard/StockCard'
import { useNavigate } from 'react-router-dom'
import { deleteStockAsync } from './stockCardListLogic'
import { ToastContainer } from 'react-toastify'
import { useState, useEffect } from 'react';

import './StockCardList.css'

const StockCardList = ({ initialStocks }) => {
    const [stocks, setStocks] = useState(initialStocks);
    const navigate = useNavigate()

    useEffect(() => {
        setStocks(initialStocks);
    }, [initialStocks]);

    const loadViewStockPage = (stockId) => {
        const url = `/stock/${stockId}`
        navigate(url)
    }

    const deleteStock = async (stockId) => {
        const success = await deleteStockAsync(stockId);
        if (success) {
            setStocks(stocks.filter(stock => stock.id !== stockId));
        }
    }

    return (
        <div className='stock-card-container'>
            <ToastContainer />
            {stocks.map(stock => <StockCard key={stock.id} symbol={stock.symbol} companyName={stock.companyName} industry={stock.industry} id={stock.id}
                onClickProcess={loadViewStockPage} deleteStockProcess={deleteStock} />)}
        </div>
    )
}

export default StockCardList
