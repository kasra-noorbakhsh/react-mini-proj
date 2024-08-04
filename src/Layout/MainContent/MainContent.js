import { Routes, Route } from "react-router-dom"

import HomePage from "../../Pages/HomePage/HomePage"
import StockListPage from "../../Pages/StockListPage/StockListPage"
import AddStockPage from "../../Pages/AddStockPage/AddStockPage"
import UsersPage from "../../Pages/UsersPage/UsersPage"
import UserPage from "../../Pages/UserPage/UserPage"
import StockPage from "../../Pages/StockPage/StockPage"

const MainContent = () => {

    return (
        <Routes>

            <Route path='/' element={<HomePage />}></Route>
            <Route path='/stock-list' element={<StockListPage />}></Route>
            <Route path='/add-stock' element={<AddStockPage />}></Route>
            <Route path='/user-list' element={<UsersPage />}></Route>
            <Route path="/user/:userId" element={<UserPage />}></Route>
            <Route path="/stock/:stockId" element={<StockPage />}></Route>

        </Routes>
    )

}

export default MainContent
