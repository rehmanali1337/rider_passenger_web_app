import { Typography, makeStyles } from '@material-ui/core'
import React, { useState, useEffect } from 'react'
import MainContainer from '../components/MainContainer'
import RequestCard from '../components/Request'
import { getAllRidesRequest } from '../utils/requests'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router'


const useStyles = makeStyles({
	header: {
		marginTop: '5vh',
		marginBottom: '3vh'
	}
})

export const Requests = () => {
	const [allRides, setAllRides] = useState([])
	const [loading, setLoading] = useState(false)
	const loggedIn = useSelector((state) => {
		return state.loggedIn
	})
	const accessToken = useSelector((state) => {
		return state.accessToken
	})
	const classes = useStyles()
	useEffect(() => {
		if (loggedIn) {
			setLoading(true)
			getAllRidesRequest(accessToken).then((response) => {
				// console.log(response)
				let filteredRides = response.rides.filter((ride) => {
					if (ride.reply === null) {
						return true
					} else {
						return false
					}
				})
				setAllRides(filteredRides)
				setLoading(false)
			})
		}
	}, [loggedIn, accessToken])

	if (!loggedIn) {
		<Redirect to="/" />
	}

	// return (<MainContainer>
	// 	<div>Working</div>
	// </MainContainer>)

	if (loading) {
		return (
			<MainContainer>
				<div>Loading rides data ....</div>
			</MainContainer>
		)
	}

	if (!loading && allRides.length === 0) {
		return (
			<MainContainer>
				<div>No rides available</div>
			</MainContainer>
		)
	}
	const rides = allRides.map((ride) => {
		return <RequestCard key={ride.ride_id.toString()} ride={ride} replyBox={false} />
	})
	return (
		<MainContainer>
			<Typography className={classes.header} variant="h4">
				Ride Requests
			</Typography>
			{rides}
		</MainContainer>
	)
}
