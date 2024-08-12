import { toast } from 'react-toastify';

import API from "../../api"

const fetchUsersAsync = async () => {
	try {
		const response = await fetch(API.getUsers, {
			method: "get",
			headers: { "Content-Type": "application/json" }
		})

		const data = await response.json()
		return data

	}catch (error) {
		toast.error('خطا در مشاهده کاربران. لطفاً دوباره تلاش کنید', {
			position: 'top-left',
			autoClose: 5000,
		});
		return []
	}
}

export const setUsersAsync = async (setUsers) => {
	const data = await fetchUsersAsync()

	const tempUsers = data.map((data) => {
		return ({
			id: data.id,
			name: data.name
		})
	})

	setUsers(tempUsers)
}
