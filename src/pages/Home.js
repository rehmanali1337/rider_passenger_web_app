import React from 'react'
import { makeStyles, Grid } from '@material-ui/core'
import MainContainer from '../components/MainContainer'
import HeaderCard from '../components/HeaderCard'
import ServiceCard from '../components/ServiceCard'
import { Typography, Card } from '@material-ui/core'

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
						<Grid item xs={12} sm={6} md={4}>
							<ServiceCard title='24/7' content='We are available 24/7'></ServiceCard>
						</Grid>
						<Grid item xs={12} sm={6} md={4}>
							<ServiceCard title='Secure Riders' content='Our riders are 100% secure.'></ServiceCard>
						</Grid>
						<Grid item xs={12} sm={12} md={4}>
							<ServiceCard title='Support' content='We are here to support you.'></ServiceCard>
						</Grid>
					</Grid>
				</Grid>
				<div className={classes.empty}></div>
			</MainContainer>
		</div>
	)
}
