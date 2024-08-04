import { useNavigate } from 'react-router-dom'
import UserCard from '../UserCard/UserCard'

import './UserCardList.css'

const UserCardList = ({ users }) => {
    const navigate = useNavigate()

    const onClickProcess = (userId) => {
        const url = `/user/${userId}`
        navigate(url)
    }

    return (
        <div className='user-card-container'>
            {users.map(user => <UserCard key={user.id} name={user.name} id={user.id} onClickProcess={onClickProcess} />)}
        </div>
    )
}

export default UserCardList
