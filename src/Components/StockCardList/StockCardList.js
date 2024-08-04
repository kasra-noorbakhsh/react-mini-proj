import StockCard from '../StockCard/StockCard'
import { useNavigate } from 'react-router-dom'
import { deleteStockAsync } from './stockCardListLogic'
import { ToastContainer } from 'react-toastify'

import './StockCardList.css'

const StockCardList = ({ stocks }) => {
    const navigate = useNavigate()

    const loadViewStockPage = (stockId) => {
        const url = `/stock/${stockId}`
        navigate(url)
    }

    const deleteStock = (stockId) => {
        deleteStockAsync(stockId)
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
