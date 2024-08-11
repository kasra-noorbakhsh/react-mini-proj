import './UserCard.css'

const UserCard = ({ userData, onClickProcess }) => {
	return (
		<div className="user-card" onClick={() => { onClickProcess(userData.id) }}>
			<img className='user-card-img' src="../aks.jpg" alt='Avatar' />
			<div>
				<p data-testid="userName">نام کاربری: {userData.name}</p>
			</div>
		</div>
	)
}

export default UserCard
