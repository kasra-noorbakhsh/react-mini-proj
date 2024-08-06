import API from '../../api'

const fetchUserAsync = async (url) => {
	const response = await fetch(url, {
		method: "get",
		headers: { "Content-Type": "application/json" }
	})

	const data = await response.json()
	return data
}

export const setUserAsync = async (setUser, id) => {
	const url = API.getUserIncludePortfolio(id)
	const data = await fetchUserAsync(url)

	const tempUser = data.map((data) => {
		return ({
			id: data.id,
			name: data.name,
			portfolio: data.portfolio
		})
	})
	// TODO: fix the format of data that comes from back
	setUser(tempUser[0])
}
