import StockCard from '../StockCard/StockCard'

import './StockCardList.css'

const StockCardList = ( { stocks } ) => {
    return(
        <div className='stock-card-container'>
            {stocks.map(stock => <StockCard key={stock.id} symbol={stock.symbol} companyName={stock.companyName} industry={stock.industry} id={stock.id}/>)}
        </div>
    )
}

export default StockCardList