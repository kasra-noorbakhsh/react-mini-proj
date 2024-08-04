import StockCard from '../StockCard/StockCard'
import { useNavigate } from 'react-router-dom'

import './StockCardList.css'

const StockCardList = ({ stocks }) => {
    const navigate = useNavigate()

    const loadViewStockPage = (stockId) => {
        const url = `/stock/${stockId}`
        navigate(url)
    }

    return (
        <div className='stock-card-container'>
            {stocks.map(stock => <StockCard key={stock.id} symbol={stock.symbol} companyName={stock.companyName} industry={stock.industry} id={stock.id}
                onClickProcess={loadViewStockPage} />)}
        </div>
    )
}

export default StockCardList
