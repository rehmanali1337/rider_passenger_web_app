import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { getRideById } from '../utils/requests'
import MainContainer from '../components/MainContainer'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router'
import CircularIndeterminate from '../components/CircularProgress'
import RequestCard from '../components/Request'


export const OfferRide = () => {
	const search = useLocation().search;
	const rideId = new URLSearchParams(search).get('ride_id')
	const [ride, setRide] = useState(null)
	// console.log(ride)
	const [loadingRide, setLoadingRide] = useState(false)
	const loggedIn = useSelector((state) => {
		return state.loggedIn
	})
	const accessToken = useSelector((state) => {
		return state.accessToken
	})

	useEffect(() => {
		setLoadingRide(true)
		getRideById(accessToken, rideId).then((response) => {
			if (response.status === 200) {
				setLoadingRide(false)
				setRide(response.ride)
			}
		})
	}, [accessToken, rideId])

	if (!loggedIn) {
		<Redirect to="/login" />
	}

	if (loadingRide || ride === null) {
		return (
			<MainContainer>
				<CircularIndeterminate /> Loading Ride ...
			</MainContainer>
		)
	}

	return (
		<MainContainer>
			<RequestCard ride={ride} disableButton={true} replyBox={true} />
		</MainContainer>
	)
}
