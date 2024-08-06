import './StockCard.css'

const StockCard = ({ stockData, viewStockPage, deleteStockProcess, hasNavigateBtn = true, hasDeleteBtn = true }) => {
	return (
		<div className="stock-card">
			<img className='stock-card-img' src="../aks.jpg" alt='Avatar' />
			<div>
				<p>نماد: {stockData.symbol}</p>
				<p>نام شرکت: {stockData.companyName}</p>
				<p>حوزه صنعت: {stockData.industry}</p>
			</div>
			<div>
				{hasNavigateBtn && <button className='view-stock-page-btn stock-card-btn'
					onClick={() => viewStockPage(stockData.id)}>مشاهده سهام</button>}

				{hasDeleteBtn && <button className='delete-stock-btn stock-card-btn'
					onClick={() => deleteStockProcess(stockData.id)}>حذف سهام</button>}
			</div>
		</div>
	)
}

export default StockCard
