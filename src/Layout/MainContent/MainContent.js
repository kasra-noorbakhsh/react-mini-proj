import { Routes, Route } from "react-router-dom"

import Url from "../../url"

import HomePage from "../../Pages/HomePage/HomePage"
import StockListPage from "../../Pages/StockListPage/StockListPage"
import AddStockPage from "../../Pages/AddStockPage/AddStockPage"
import UsersPage from "../../Pages/UsersPage/UsersPage"
import UserPage from "../../Pages/UserPage/UserPage"
import StockPage from "../../Pages/StockPage/StockPage"

const MainContent = () => {
	return (
		<Routes>
			<Route path={Url.home} element={<HomePage />} />
			<Route path={Url.stockList} element={<StockListPage />} />
			<Route path={Url.addStock} element={<AddStockPage />} />
			<Route path={Url.userList} element={<UsersPage />} />
			<Route path={Url.userTemplate} element={<UserPage />} />
			<Route path={Url.stockTemplate} element={<StockPage />} />
			<Route path="*" element={<div>404</div>} />
		</Routes>
	)
}

export default MainContent
