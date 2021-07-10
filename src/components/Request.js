import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import CardActions from '@material-ui/core/CardActions';
import { PageButton } from './Buttons';
import { Grid } from '@material-ui/core'
import { TextField } from '@material-ui/core'
import CircularIndeterminate from '../components/CircularProgress'
import { useSelector } from 'react-redux'
import { addRideOfferRequest } from '../utils/requests'
import { notify_success, notify_error } from '../utils/utils'
import { Redirect } from 'react-router'
import { convertToDate } from '../utils/utils'
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';


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
	}
}));


export default function RequestCard({ ride, replyBox }) {
	const classes = useStyles();
	const datetime = convertToDate(ride.timestamp)
	const [replyText, setReplyText] = React.useState(null)
	const [sendingOffer, setSendingOffer] = React.useState(false)
	const [offerSent, setOfferSent] = React.useState(false)
	const [money, setMoney] = React.useState(0)
	const accessToken = useSelector((state) => {
		return state.accessToken
	})


	const handleSendOffer = async () => {
		setSendingOffer(true)
		addRideOfferRequest(accessToken, ride.ride_id, replyText, money).then((response) => {
			// console.log(response)
			if (response.status === 200) {
				setOfferSent(true)
				notify_success('Offer Sent!')
				setSendingOffer(false)
			} else {
				notify_error('Offer Not sent!')
				setSendingOffer(false)
			}
		})
	}

	if (offerSent) {
		return <Redirect to="/requests" />
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
							<Typography variant="h6">Willing to pay</Typography>
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
				</Grid>
				<Typography variant="h5">Message</Typography>
				<Typography paragraph>
					{ride.request_text}
				</Typography>
			</CardContent>
			{replyBox &&

				<div className={classes.replyBoxWrapper}>
					<div className={classes.inputWrapper}>

						<InputLabel htmlFor="amount">Amount</InputLabel>
						<OutlinedInput
							id="amount"
							value={money}
							onChange={(e) => {
								setMoney(e.target.value)
							}}
							startAdornment={<InputAdornment position="start">$</InputAdornment>}
							labelWidth={60}
						/>
					</div>
					<Typography variant="h5" className={classes.replyHeading}>Reply</Typography>
					<TextField
						className={classes.margin}
						label="Reply Text"
						multiline
						fullWidth
						rows={10}
						type="text"
						variant="outlined"
						onChange={(e => { setReplyText(e.target.value) })}
					/>
				</div>
			}
			<CardActions disableSpacing className={classes.cardActions}>
				{replyBox ?
					<>
						<PageButton disabled={sendingOffer} onClick={handleSendOffer}>{sendingOffer ? 'Sending Offer' : 'Send Offer'}</PageButton>
						{sendingOffer &&
							<CircularIndeterminate />
						}
					</>
					:
					<PageButton href={`/offer_ride?ride_id=${ride.ride_id}`}>Offer Ride</PageButton>
				}
			</CardActions>
		</Card>
	);
}
