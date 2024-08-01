import './UserCard.css'

const UserCard = ({ name, id, onClickProcess }) => {
    return(
        <div className="user-card" onClick={() => {onClickProcess(id)}}>
            <img src="./aks.jpg" alt='Avatar'/>
            <div>
                <p>نام کاربری: {name}</p>
            </div>
        </div>
    )
}

export default UserCard