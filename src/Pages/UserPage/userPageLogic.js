const fetchUserAsync = async (url) => {
    const response = await fetch(url, {
        method: "get",
        headers: { "Content-Type": "application/json" }
    })

    const data = await response.json()
    return data
}

export const setUserAsync = async (setUser, id) => {
    const url = `http://localhost:5206/api/user/${id}/with-portfolio`
    const data = await fetchUserAsync(url)

    const tempUser = data.map((data) => {
        return ({
            id: data.id,
            name: data.name,
            portfolio: data.portfolio
        })
    })
    setUser(tempUser[0])
}
