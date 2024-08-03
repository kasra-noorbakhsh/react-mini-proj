import { Link, useLocation } from "react-router-dom"

import './Header.css'

const Header = () => {
    const { pathname: url} = useLocation()

    return(
        <div className="header">
            <Link to="/" className="header-link">بازگشت به صفحه اول</Link>
            {url.startsWith("/stock/") && <Link to="/stock-list" className="header-link header-back-link">بازگشت به صفحه نمایش سهام ها</Link>}
            {url.startsWith("/user/") && <Link to="/user-list" className="header-link header-back-link">بازگشت به صفحه نمایش کاربران</Link>}
        </div>
    )
}

export default Header