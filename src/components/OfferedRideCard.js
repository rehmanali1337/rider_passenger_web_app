import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import { Grid } from '@material-ui/core'
import { convertToDate } from '../utils/utils'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router';


const useStyles = makeStyles((theme) => ({
	root: {
		maxWidth: '80vw',
		marginTop: '1vh',
		textAlign: 'left',
		marginLeft: 'auto',
		marginRight: 'auto',
		// justifyContent: 'center'
	},
	media: {
		height: 0,
		paddingTop: '56.25%', // 16:9
	},
	expand: {
		transform: 'rotate(0deg)',
		marginLeft: 'auto',
		transition: theme.transitions.create('transform', {
			duration: theme.transitions.duration.shortest,
		}),
	},
	expandOpen: {
		transform: 'rotate(180deg)',
	},
	avatar: {
		backgroundColor: red[500],
	},
	content: {
		// marginLeft: '5vw',
		paddingLeft: '5vw'
	},
	margin: {
		width: '80%'
	},
	replyBoxWrapper: {
		// marginLeft: 'auto',
		// marginRight: 'auto',
		textAlignLast: 'center'
	},
	cardActions: {
		justifyContent: 'center'
	},
	replyHeading: {
		// marginTop: '2rem',
		marginBottom: '2rem'
	},
	collapse: {
		paddingLeft: '3rem',
		paddingRight: '3rem',
		paddningBottom: '5rem',
		marginBottom: '2rem'
	}
}));


export function OfferedRideCard({ ride }) {
	const classes = useStyles();
	const datetime = convertToDate(ride.timestamp)
	// const [expanded, setExpanded] = React.useState(false);
	// const [deletingRide, setDeletingRide] = useState(false)
	// const [rideDeleted, setRideDeleted] = useState(false)
	// const accessToken = useSelector((state) => {
	// 	return state.accessToken
	// })
	const loggedIn = useSelector((state) => {
		return state.loggedIn
	})

	// const handleExpandClick = () => {
	// 	setExpanded(!expanded);
	// };

	// const handleDeleteRide = () => {
	// 	setDeletingRide(true)
	// 	deleteRideRequest(accessToken, ride.ride_id).then((resp) => {
	// 		if (resp.status === 200) {
	// 			notify_success("Deleted ride")
	// 			setRideDeleted(true)
	// 		}
	// 	}, (error) => {
	// 		notify_error("Could not delete the ride")
	// 		// console.log(error)
	// 	})

	// }

	if (!loggedIn) {
		return <Redirect to="/login" />
	}


	return (
		<Card className={classes.root}>
			<CardHeader
				avatar={
					<Avatar aria-label="recipe" className={classes.avatar}>
						{ride.owner_name.slice(0, 1)}
					</Avatar>
				}
				title={ride.owner_name}
				subheader={datetime}
			/>
			<CardContent className={classes.content}>
				<Grid container>
					<Grid container item>
						<Grid item xs={12} sm={6}>
							<Typography variant="h6">Pickup Location</Typography>
							<Typography color="textSecondary">{ride.pickup_location}</Typography>
						</Grid>
						<Grid item xs={12} sm={6}>
							<Typography variant="h6">Destination Location</Typography>
							<Typography color="textSecondary">{ride.destination_location}</Typography>
						</Grid>
					</Grid>
					<Grid container item>
						<Grid item xs={12} sm={6}>
							<Typography variant="h6">Number of Passengers</Typography>
							<Typography color="textSecondary">{ride.passengers}</Typography>
						</Grid>
						<Grid item xs={12} sm={6}>
							<Typography variant="h6">Number of Packages</Typography>
							<Typography color="textSecondary">{ride.packages}</Typography>
						</Grid>
					</Grid>
					<Grid container item>
						<Grid item xs={12} sm={6}>
							<Typography variant="h6">Pickip Time</Typography>
							<Typography color="textSecondary">{convertToDate(ride.pickup_time)}</Typography>
						</Grid>
						<Grid item xs={12} sm={6}>
							<Typography variant="h6">Ride Type</Typography>
							<Typography color="textSecondary">{ride.payed ? 'Payed' : 'Not-Payed'}</Typography>
						</Grid>
					</Grid>
					<Grid container item>
						<Grid item xs={12} sm={6}>
							<Typography variant="h6">Expected Amount</Typography>
							<Typography color="textSecondary">${ride.amount}</Typography>
						</Grid>
						<Grid item xs={12} sm={6}>
							<Typography variant="h6">Phone Number</Typography>
							<Typography color="textSecondary">+{ride.phone}</Typography>
						</Grid>
					</Grid>
					<Grid container item>
						<Grid item xs={12} sm={6}>
							<Typography variant="h6">Text</Typography>
							<Typography color="textSecondary">{ride.text ? 'Available' : 'Not-Available'}</Typography>
						</Grid>
						<Grid item xs={12} sm={6}>
							<Typography variant="h6">Call</Typography>
							<Typography color="textSecondary">{ride.call ? 'Available' : 'Not-Available'}</Typography>
						</Grid>
					</Grid>
					{/* </Grid> */}
				</Grid>
				<Typography variant="h5">Offer Details</Typography>
				<Typography paragraph>
					{ride.offer_text}
				</Typography>
			</CardContent>
			{/* <CardActions disableSpacing className={classes.cardActions}>
				<PageButton disabled={deletingRide} onClick={handleExpandClick}>View Offer</PageButton>
				<PageButton disabled={deletingRide} onClick={handleDeleteRide}>Delete Ride</PageButton>
			</CardActions> */}
			{/* <Collapse in={expanded} timeout="auto" unmountOnExit className={classes.collapse}>
				<CardContent>
					{ride.reply === null ?
						'No Offer yet!'
						:
						<>
							<Typography variant="h5">{ride.reply.owner_name}</Typography>
							<Typography variant="h6">Offered Amount</Typography>
							<Typography color="textSecondary">${ride.reply.offered_amount}</Typography>
							<Typography>
								{ride.reply.reply_text}
							</Typography>
						</>
					}
				</CardContent>
			</Collapse> */}
		</Card >
	);
}
