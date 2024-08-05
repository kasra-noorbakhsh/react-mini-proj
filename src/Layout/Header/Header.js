import { Link, useLocation } from "react-router-dom"

import { isNotFound, compareUrls, } from "../../urls"
// TODO: use compareUrls for showing back link btn in header


import './Header.css'

const Header = () => {
    const { pathname: url } = useLocation()

    if (isNotFound(url)) return <></>;

    return (
        <div className="header">
            <Link to="/" className="header-link">بازگشت به صفحه اول</Link>
            {url.startsWith("/stock/") && <Link to="/stock-list" className="header-link header-back-link">بازگشت به صفحه نمایش سهام ها</Link>}
            {url.startsWith("/user/") && <Link to="/user-list" className="header-link header-back-link">بازگشت به صفحه نمایش کاربران</Link>}
        </div>
    )
}

export default Header
