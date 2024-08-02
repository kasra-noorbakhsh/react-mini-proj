import  {useEffect, useState} from 'react'
import {useParams, Link} from "react-router-dom"
import {setStockAsync} from "./stockPageLogic";

import "./StockPage.css"

const StockPage = () => {
    const {stockId} = useParams()

    const [stock, setStock] = useState({})


    useEffect(() => {
        setStockAsync(setStock, stockId)
    }, []);

    return (
        <div>
            <p>{stock.id}</p>
            <p>{stock.companyName}</p>
            <p>{stock.symbol}</p>
            <p>{stock.industry}</p>
            <p>{stock.purchase}</p>
            <p>{stock.lastDiv}</p>
        </div>
    )
}

export default StockPage