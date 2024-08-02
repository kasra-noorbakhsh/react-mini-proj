import { Routes, Route } from "react-router-dom"

import HomePage from "../../Pages/HomePage/HomePage"
import StockListPage from "../../Pages/StockListPage/StockListPage"
import AddStockPage from "../../Pages/AddStockPage/AddStockPage"
import UsersPage from "../../Pages/UsersPage/UsersPage"
import UserPage from "../../Pages/UserPage/UserPage"

const MainContent = () =>{
    return(
        <Routes>

        <Route path='/' element={<HomePage />}></Route>
        <Route path='/stock-list' element={<StockListPage />}></Route>
        <Route path='/add-stock' element={<AddStockPage />}></Route>
        <Route path='/user-list' element={<UsersPage />}></Route>
        <Route path="/user/:userId" element={<UserPage />} />

        </Routes>
    )
}

export default MainContent