
import { Typography, makeStyles } from '@material-ui/core'
import React, { useState, useEffect } from 'react'
import MainContainer from '../components/MainContainer'
import { MyRideCard } from '../components/MyRideCard'
import { getMyRidesRequest } from '../utils/requests'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router'


const useStyles = makeStyles({
	header: {
		marginTop: '5vh',
		marginBottom: '3vh'
	}
})

export const MyRides = () => {
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
		setLoading(true)
		getMyRidesRequest(accessToken).then((response) => {
			setAllRides(response.rides)
			setLoading(false)
		})
	}, [loggedIn, accessToken])

	if (!loggedIn) {
		<Redirect to="/login" />
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
		return <MyRideCard key={ride.ride_id.toString()} ride={ride} />
	})
	return (
		<MainContainer>
			<Typography className={classes.header} variant="h4">
				My Rides
			</Typography>
			{rides}
		</MainContainer>
	)
}
