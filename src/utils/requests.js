

const BASE_URL = 'https://ciowlt.deta.dev'
// const BASE_URL = 'http://localhost:8000'

export const registrationRequest = async (firstName, lastName, email, password) => {
	let URL = `${BASE_URL}/register_user`
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
	let URL = `${BASE_URL}/token`
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



export const getRideById = async (accessToken, rideId) => {
	let URL = `${BASE_URL}/get_ride_by_id?ride_id=${rideId}`
	const options = {
		mode: 'cors',
		method: 'GET',
		headers: new Headers({
			"Content-Type": "application/json",
			"accept": "application/json",
			"Authorization": `Bearer ${accessToken}`
		})
	}
	return await (await fetch(URL, options)).json()
}


export const getMyRidesRequest = async (accessToken) => {
	let URL = `${BASE_URL}/get_my_rides`
	const options = {
		mode: 'cors',
		method: 'GET',
		headers: new Headers({
			"Content-Type": "application/json",
			"accept": "application/json",
			"Authorization": `Bearer ${accessToken}`
		})
	}
	return await (await fetch(URL, options)).json()
}
export const getAllRidesRequest = async (accessToken) => {
	let URL = `${BASE_URL}/get_all_rides`
	const options = {
		mode: 'cors',
		method: 'GET',
		headers: new Headers({
			"Content-Type": "application/json",
			"accept": "application/json",
			"Authorization": `Bearer ${accessToken}`
		})
	}
	return await (await fetch(URL, options)).json()
}



export const addRideRequest = async (accessToken, details, srcLocation, destLocation
	, passengers, packages, payed, pickupTime, gender, call, text, money, phone) => {
	const URL = `${BASE_URL}/add_ride`
	const params = {
		request_text: details,
		pickup_location: srcLocation,
		destination_location: destLocation,
		passengers: passengers,
		packages: packages,
		payed: payed,
		pickup_time: pickupTime,
		gender: gender,
		call: call,
		text: text,
		amount: money,
		phone: phone
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

export const addRideOfferRequest = async (accessToken, rideId, replyText, amount) => {
	const URL = `${BASE_URL}/add_ride_reply`
	const params = {
		ride_id: rideId,
		reply_text: replyText,
		amount: amount
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

export const deleteRideRequest = async (accessToken, rideId) => {
	const URL = `${BASE_URL}/delete_ride?ride_id=${rideId}`
	const options = {
		mode: 'cors',
		method: 'DELETE',
		headers: new Headers({
			"Content-Type": "application/json",
			"accept": "application/json",
			"Authorization": `Bearer ${accessToken}`
		})
	}
	return await (await fetch(URL, options)).json()
}