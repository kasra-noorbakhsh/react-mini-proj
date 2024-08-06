import { useState, useEffect } from "react"

import UserCardList from "../../Components/UserCardList/UserCardList"

import { setUsersAsync } from "./usersPageLogic"

const UsersPage = () => {
	const [users, setUsers] = useState([])

	useEffect(() => {
		setUsersAsync(setUsers)
	}, [])

	return (
		<div>
			<UserCardList users={users} />
		</div>
	)
}

export default UsersPage
