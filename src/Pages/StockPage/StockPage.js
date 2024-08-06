import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import { ToastContainer } from "react-toastify";

import CommentCreatorPopup from '../../Components/CommentCreatorPopup/CommentCreatorPopup';
import CommentCardList from "../../Components/ComentCardList/CommentCardList";
import { setStockAsync } from "./stockPageLogic";
import { postCommentAsync } from "./stockPageLogic";

import "./StockPage.css"

const StockPage = () => {
	const { stockId } = useParams()
	const [showCommentPopup, setShowCommentPopup] = useState(false);
	const [stock, setStock] = useState([])

	useEffect(() => {
		setStockAsync(setStock, stockId)
	}, []);

	const openCommentPopup = () => {
		setShowCommentPopup(true);
	}

	const closeCommentPopup = () => {
		setShowCommentPopup(false);
	}

	const addCommentProcess = async (comment) => {
		postCommentAsync(comment, stockId, setStock);
	}

	return (
		<div>
			<ToastContainer />
			<CommentCreatorPopup show={showCommentPopup} closeFunc={closeCommentPopup} stockId={stockId} onSubmitFunc={addCommentProcess} />
			<div className="comment-info-box">
				<img src="../aks.jpg" alt="Avatar" className="comment-info-box-image" />
				<div className="comment-info-box-content">
					<h2 className="comment-info-box-title">مشخصات سهام</h2>
					<ul className="comment-info-list">
						<li className='comment-info-list-items'>شماره سهام: {stock.id}</li>
						<li className='comment-info-list-items'>نام شرکت: {stock.companyName}</li>
						<li className='comment-info-list-items'>نماد: {stock.symbol}</li>
						<li className='comment-info-list-items'>صنعت: {stock.industry}</li>
						<li className='comment-info-list-items'>آخرین قیمت خرید: {stock.lastDiv}</li>
						<li className='comment-info-list-items'>قیمت خرید: {stock.purchase}</li>
					</ul>
				</div>
			</div>
			<div>
				<CommentCardList comments={stock.comments} />
			</div>
			<button className="stock-page-add-comment-btn" onClick={openCommentPopup}>اضافه کردن دیدگاه</button>
		</div>
	)
}

export default StockPage
