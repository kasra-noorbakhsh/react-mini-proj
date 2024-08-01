import { Link } from "react-router-dom"

import './Header.css'

const Header = () => {
    return(
        <div className="header">
            <Link to="/" className="home-page-link">بازگشت به صفحه اول</Link>
        </div>
    )
}

export default Header