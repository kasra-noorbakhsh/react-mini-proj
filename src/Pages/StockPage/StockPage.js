import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import { setStockAsync } from "./stockPageLogic";
import CommentCreatorPopup from '../../Components/CommentCreatorPopup/CommentCreatorPopup';
import CommentCardList from "../../Components/ComentCardList/CommentCardList";
import {ToastContainer} from "react-toastify";
import {CommentCreatorPopupAsync} from "./stockPageLogic";

import "./StockPage.css"

const StockPage = () => {
    const { stockId } = useParams()
    const [showCommentPopup, setShowCommentPopup] = useState(false);

    const [stock, setStock] = useState([])

    useEffect(() => {
        setStockAsync(setStock, stockId)
    }, []);

    const opentCommentPopup = () => {
        setShowCommentPopup(true);
    }

    const closeCommentPopup = () => {
        setShowCommentPopup(false);
    }

    const AddCommentProcess = async (comment)  => {
        const success = await CommentCreatorPopupAsync(comment, stockId);
         if (success)
         {setStockAsync(setStock, stockId);}
    }

    return (
        <div>
            <ToastContainer />
            <CommentCreatorPopup show={showCommentPopup} closeFunc={closeCommentPopup} stockId={stockId} onSubmitFunc={AddCommentProcess} />
            <div className="info-box">
                <img src="../aks.jpg" alt="Avatar" className="info-box-image" />
                <div className="info-box-content">
                    <h2 className="info-box-title">مشخصات سهام</h2>
                    <ul className="info-list">
                        <li><strong>شماره سهام:</strong> {stock.id}</li>
                        <li><strong>نام شرکت:</strong> {stock.companyName}</li>
                        <li><strong>نماد:</strong> {stock.symbol}</li>
                        <li><strong>صنعت:</strong> {stock.industry}</li>
                        <li><strong>قیمت خرید:</strong> {stock.purchase}</li>
                        <li><strong>آخرین قیمت خرید:</strong> {stock.lastDiv}</li>
                    </ul>
                </div>
            </div>
            <div>
                <CommentCardList comments={stock.comments || []} />
            </div>
            <button className="stock-page-add-comment-btn" onClick={opentCommentPopup}>اضافه کردن دیدگاه</button>
        </div>
    )
}

export default StockPage
