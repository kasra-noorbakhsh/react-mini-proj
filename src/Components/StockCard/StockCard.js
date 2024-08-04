import './StockCard.css'

const StockCard = ({ symbol, companyName, industry, id, onClickProcess: viewStockPage, deleteStockProcess }) => {
    return (
        <div className="stock-card">
            <img src="../aks.jpg" alt='Avatar' />
            <div>
                <p>نماد: {symbol}</p>
                <p>نام شرکت: {companyName}</p>
                <p>حوزه صنعت: {industry}</p>
            </div>
            <div>
                <button className='view-stock-page-btn stock-card-btn' onClick={() => viewStockPage(id)}>مشاهده سهام</button>
                <button className='delete-stock-btn stock-card-btn' onClick={() => deleteStockProcess(id)}>حذف سهام</button>
            </div>
        </div>
    )
}

export default StockCard
