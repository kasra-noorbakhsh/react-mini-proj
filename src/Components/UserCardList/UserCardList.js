import { useNavigate } from 'react-router-dom'

import UserCard from '../UserCard/UserCard'
import Url from "../../url"

import './UserCardList.css'

const UserCardList = ({ users }) => {
	const navigate = useNavigate()

	const viewUserPage = (userId) => {
		const url = Url.user(userId)
		navigate(url)
	}

	return (
		<div className='user-card-container'>
			{users.map(user => <UserCard key={user.id} userData={user} onClickProcess={viewUserPage} />)}
		</div>
	)
}

export default UserCardList
