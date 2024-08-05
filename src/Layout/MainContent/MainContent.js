import { Routes, Route } from "react-router-dom"

import UrlEnum from "../../urls"

import HomePage from "../../Pages/HomePage/HomePage"
import StockListPage from "../../Pages/StockListPage/StockListPage"
import AddStockPage from "../../Pages/AddStockPage/AddStockPage"
import UsersPage from "../../Pages/UsersPage/UsersPage"
import UserPage from "../../Pages/UserPage/UserPage"
import StockPage from "../../Pages/StockPage/StockPage"

const MainContent = () => {

	return (
		<Routes>
			<Route path={UrlEnum.home} element={<HomePage />} />
			<Route path={UrlEnum.stockList} element={<StockListPage />} />
			<Route path={UrlEnum.addStock} element={<AddStockPage />} />
			<Route path={UrlEnum.userList} element={<UsersPage />} />
			<Route path={UrlEnum.user} element={<UserPage />} />
			<Route path={UrlEnum.stock} element={<StockPage />} />
			<Route path="*" element={<div>404</div>} />
		</Routes>
	)
}

export default MainContent
