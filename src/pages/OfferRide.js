import React from 'react'
import MainContainer from '../components/MainContainer'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router'
import { OfferRideForm } from '../components/OfferRideForm'


export const OfferRide = () => {
	const loggedIn = useSelector((state) => {
		return state.loggedIn
	})


	if (!loggedIn) {
		<Redirect to="/login" />
	}


	return (
		<MainContainer>
			<OfferRideForm />
		</MainContainer>
	)
}
