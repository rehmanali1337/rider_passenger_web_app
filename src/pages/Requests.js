import { Typography, makeStyles } from '@material-ui/core'
import React, { useState, useEffect } from 'react'
import MainContainer from '../components/MainContainer'
import RequestCard from '../components/Request'
import { getAllRidesRequest } from '../utils/requests'


const useStyles = makeStyles({
	header: {
		marginTop: '5vh',
		marginBottom: '3vh'
	}
})

export const Requests = () => {
	const [allRides, setAllRides] = useState([])
	const [loading, setLoading] = useState(false)
	const classes = useStyles()
	useEffect(() => {
		setLoading(true)
		getAllRidesRequest().then((response) => {
			setAllRides(response.rides)
			setLoading(false)
		})
	}, [])

	if (loading) {
		return <div>Loading rides data ....</div>
	}

	if (!loading && allRides.length === 0) {
		return (
			<div>No rides available</div>
		)
	}
	const rides = allRides.map((ride) => {
		return <RequestCard key={ride.ride_id.toString()} ride={ride} />
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
