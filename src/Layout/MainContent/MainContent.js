import { Routes, Route } from "react-router-dom"

import HomePage from "../../Pages/HomePage/HomePage"
import StockPage from "../../Pages/StockPage/StockPage"
import AddStockPage from "../../Pages/AddStockPage/AddStockPage"
import UserPage from "../../Pages/UserPage/UserPage"

const MainContent = () =>{
    return(
        <Routes>

        <Route path='/' element={<HomePage />}></Route>
        <Route path='/stock-list' element={<StockPage />}></Route>
        <Route path='/add-stock' element={<AddStockPage />}></Route>
        <Route path='/user-list' element={<UserPage />}></Route>

        </Routes>
    )
}

export default MainContent