import { Link, useLocation } from "react-router-dom"

import { isNotFound, compareUrls, } from "../../url"
import Url from "../../url"

import './Header.css'

const Header = () => {
	const { pathname: url } = useLocation()

	if (isNotFound(url)) return <></>;

	return (
		<div className="header">
			<Link to={Url.home} className="header-link">بازگشت به صفحه اول</Link>

			{compareUrls(Url.stockTemplate, url) && <Link to={Url.stockList}
				className="header-link header-back-link">بازگشت به صفحه نمایش سهام ها</Link>}

			{compareUrls(Url.userTemplate, url) && <Link to={Url.userList}
				className="header-link header-back-link">بازگشت به صفحه نمایش کاربران</Link>}
		</div>
	)
}

export default Header
