import { getUsers } from "../../urls"

const fetchUsersAsync = async () => {
    const response = await fetch(getUsers, {
        method: "get",
        headers: { "Content-Type": "application/json" }
    })

    const data = await response.json()

    return data
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
