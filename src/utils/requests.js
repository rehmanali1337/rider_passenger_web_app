
export const registrationRequest = async (firstName, lastName, email, password) => {
	const URL = 'http://localhost:8000/register_user'
	const params = {
		first_name: firstName,
		last_name: lastName,
		password: password,
		email: email,

	}
	const options = {
		mode: 'cors',
		method: 'POST',
		body: JSON.stringify(params),
		headers: new Headers({
			"Content-Type": "application/json",
			"accept": "application/json"
		})
	}
	return await (await fetch(URL, options)).json()
}


export const loginRequest = async (username, password) => {
	URL = 'http://localhost:8000/token'
	const form = new FormData()
	form.append('username', username)
	form.append('password', password)
	const options = {
		mode: 'cors',
		method: 'POST',
		body: form
	}
	return await (await fetch(URL, options)).json()
}


export const getAllRidesRequest = async () => {
	URL = 'http://localhost:8000/get_all_rides'
	return await (await fetch(URL)).json()
}



export const addRideRequest = async (requestText, accessToken) => {
	const URL = 'http://localhost:8000/add_ride'
	const params = {
		request_text: requestText
	}
	const options = {
		mode: 'cors',
		method: 'POST',
		body: JSON.stringify(params),
		headers: new Headers({
			"Content-Type": "application/json",
			"accept": "application/json",
			"Authorization": `Bearer ${accessToken}`
		})
	}
	return await (await fetch(URL, options)).json()
}