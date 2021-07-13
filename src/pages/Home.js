import React from 'react'
import { makeStyles, Grid } from '@material-ui/core'
import MainContainer from '../components/MainContainer'
import HeaderCard from '../components/HeaderCard'
import ServiceCard from '../components/ServiceCard'
import { Typography, Card } from '@material-ui/core'
import requestImage from '../images/request.jpg'
import offerImage from '../images/offer.jpg'
import availableImage from '../images/ride.jpg'
import supportImage from '../images/support.jpg'

export const Home = () => {
	const useStyles = makeStyles({
		serviceHeading: {
			marginTop: '6vh'
		},
		container: {
			textAlign: 'center',
			justifyContent: 'center',
			// marginLeft: 'auto',
			// marginRight: 'auto'
		},
		empty: {
			minHeight: '20vh'
		}
	})
	const classes = useStyles()
	return (
		<div>
			<MainContainer>
				<Grid container className={classes.container}>
					<Grid item container>
						<Grid item xs={1} sm={2}></Grid>
						<Grid item xs={10} sm={8}>
							<HeaderCard />
						</Grid>
						<Grid item xs={1} sm={2}></Grid>
					</Grid>
					<Grid xs={12} item>
						<Card className={classes.serviceHeading}>
							<Typography variant='h2'>Services</Typography>
						</Card>
					</Grid>
					<Grid item container spacing={1}>
						<Grid item xs={0} sm={1} md={3}></Grid>
						<Grid item xs={12} sm={10} md={6}>
							<ServiceCard text="Request A Ride" image={requestImage}></ServiceCard>
						</Grid>
						<Grid item xs={0} sm={1} md={3}></Grid>
					</Grid>
					<Grid item container spacing={1}>
						<Grid item xs={0} sm={1} md={3}></Grid>
						<Grid item xs={12} sm={10} md={6}>
							<ServiceCard text="Offer A Ride" image={offerImage}></ServiceCard>
						</Grid>
						<Grid item xs={0} sm={1} md={3}></Grid>
					</Grid>
					<Grid item container spacing={1}>
						<Grid item xs={0} sm={1} md={3}></Grid>
						<Grid item xs={12} sm={10} md={6}>
							<ServiceCard text="View Available Rides" image={availableImage}></ServiceCard>
						</Grid>
						<Grid item xs={0} sm={1} md={3}></Grid>
					</Grid>
					<Grid item container spacing={1}>
						<Grid item xs={0} sm={1} md={3}></Grid>
						<Grid item xs={12} sm={10} md={6}>
							<ServiceCard text="Contact Us" image={supportImage}></ServiceCard>
						</Grid>
						<Grid item xs={0} sm={1} md={3}></Grid>
					</Grid>
				</Grid>
				<div className={classes.empty}></div>
			</MainContainer>
		</div>
	)
}
