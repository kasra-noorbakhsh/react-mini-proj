import { useState, useEffect } from "react"
import UserCardList from "../../Components/UserCardList/UserCardList"
import { setUsersAsync } from "./usersPageLogic"

import './usersPageLogic'

import './UsersPage.css'

const UsersPage = () =>{

    const [users, setUsers] = useState([])

    useEffect(() =>{
        setUsersAsync(setUsers)
    }, [])

    return(
        <div className="users-page">
            <UserCardList users={users}/>
        </div>
    )
}

export default UsersPage