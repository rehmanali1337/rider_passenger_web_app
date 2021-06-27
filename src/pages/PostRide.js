import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router'
import PostRideForm from '../components/RidePostForm'
import MainContainer from '../components/MainContainer'

export const PostRide = () => {
	const loggedIn = useSelector((state) => {
		return state.loggedIn
	})

	if (!loggedIn) {
		return <Redirect to="/" />
	}
	return (
		<MainContainer>
			<PostRideForm />
		</MainContainer>
	)
}
