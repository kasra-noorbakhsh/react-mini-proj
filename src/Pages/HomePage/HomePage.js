import { Link } from "react-router-dom"

import Url from "../../url"

import './HomePage.css'

const HomePage = () => {
	return (
		<div className="home-page">
			<Link className="home-page-link" to={Url.stockList}>مشاهده سهام ها</Link>
			<Link className="home-page-link" to={Url.addStock}>اضافه کردن سهام</Link>
			<Link className="home-page-link" to={Url.userList}>مشاهده کاربران</Link>
		</div>
	)
}

export default HomePage
