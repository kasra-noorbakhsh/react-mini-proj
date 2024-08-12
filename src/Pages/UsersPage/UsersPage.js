import { useState, useEffect } from "react"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import UserCardList from "../../Components/UserCardList/UserCardList"

import { setUsersAsync } from "./usersPageLogic"

const UsersPage = () => {
	const [users, setUsers] = useState([])

	useEffect(() => {
		setUsersAsync(setUsers)
	}, [])

	return (
		<div>
			<ToastContainer />
			<UserCardList users={users} />
		</div>
	)
}

export default UsersPage
