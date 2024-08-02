import './StockCard.css'

const StockCard = ({ symbol, companyName, industry, id, onClickProcess }) => {
    return(
        <div className="stock-card" onClick={() => onClickProcess(id)}>
            <img src="./aks.jpg" alt='Avatar'/>
            <div>
                <p>نماد: {symbol}</p>
                <p>نام شرکت: {companyName}</p>
                <p>حوزه صنعت: {industry}</p>
            </div>
        </div>
    )
}

export default StockCard