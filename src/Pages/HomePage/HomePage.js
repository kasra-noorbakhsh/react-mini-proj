import { Link } from "react-router-dom"

import './HomePage.css'

const HomePage = () =>{
    return(
        <div className="home-page">
            <Link to="/stock-list">مشاهده سهام ها</Link>
            <Link to="/add-stock">اضافه کردن سهام</Link>
            <Link to="/user-list">مشاهده کاربران</Link>
        </div>
    )
}

export default HomePage