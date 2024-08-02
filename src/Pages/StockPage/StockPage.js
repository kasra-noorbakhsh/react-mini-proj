import React from 'react';
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
<React.Fragment>
        <div className="info-box">
            <img src="../aks.jpg" alt="Stock Image" className="info-box-image"/>
            <div className="info-box-content">
                <h2 className="info-box-title">مشخصات سهام</h2>
                <ul className="info-list">
                    <li><strong>شماره سهام:</strong> {stock.id}</li>
                    <li><strong>نام شرکت:</strong> {stock.companyName}</li>
                    <li><strong>نماد:</strong> {stock.symbol}</li>
                    <li><strong>حوزه کاری:</strong> {stock.industry}</li>
                    <li><strong>خرید:</strong> {stock.purchase}</li>
                    <li><strong>آخرین سود سهام:</strong> {stock.lastDiv}</li>
                </ul>
            </div>
        </div>
        <div>
            <Link to="/stock-list" className="stock-list-page-link">بازگشت به صفحه نمایش کاربران</Link>
        </div>
</React.Fragment>
    )
}

export default StockPage