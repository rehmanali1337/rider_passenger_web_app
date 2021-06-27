
import React, { useState } from 'react';
import {
	ThemeProvider,
	makeStyles,
	createMuiTheme,
} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { green } from '@material-ui/core/colors';
import { Box, Button, Typography } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux'
import { types } from '../store/variables'
import { Redirect } from 'react-router'
import CircularIndeterminate from '../components/CircularProgress'
import { addRideRequest } from '../utils/requests'
import { notify_error, notify_success } from '../utils/utils';
import { PageButton } from './Buttons'


const useStyles = makeStyles((theme) => ({
	root: {
		// display: 'flex',
		// flexWrap: 'wrap',
		height: '90vh'
	},
	heading: {
		marginTop: '6vh'
	},
	margin: {
		marginTop: '5vh',
		width: '70vw'
	},
	box: {
		marginTop: '5vh',
		paddingTop: '5vh',
		paddingBottom: '5vh',
		margin: 'auto',
	},
	loginButton: {
		margin: '2%'
	}
}));

const theme = createMuiTheme({
	palette: {
		primary: green,
	},
});



export default function PostRideForm() {
	const classes = useStyles();
	const [postingRide, setPostingRide] = useState(false)
	const [ridePosted, setRidePosted] = useState(false)
	const [request, setRequest] = useState(null)
	const dispatch = useDispatch()
	const loggedIn = useSelector((state) => {
		return state.loggedIn
	})
	const accessToken = useSelector((state) => {
		return state.accessToken
	})


	const handleFormSubmit = async (data) => {
		data.preventDefault();
		if (request === null) {
			return
		}
		setPostingRide(true)
		const response = await addRideRequest(request, accessToken)
		if (response.status === 200) {
			notify_success('Ride Posted')
			setPostingRide(false)
			setRidePosted(true)
		} else {
			notify_error(
				'Could not post ride'
			)
			setPostingRide(false)
		}
	}

	if (!loggedIn) {
		return <Redirect to="/" />
	}
	if (ridePosted) {
		return <Redirect to="/requests" />
	}

	return (
		<form className={
			classes.root
		} noValidate onSubmit={handleFormSubmit} >
			{/* <Box className={classes.box} m={4} border={1} borderRadius={5}> */}
			<Typography className={classes.heading} variant='h5'>Post a Ride Request</Typography>
			<ThemeProvider theme={theme}>
				<TextField
					className={classes.margin}
					label="Ride Details"
					multiline
					// fullWidth
					rows={10}
					type="text"
					variant="outlined"
					onChange={(e => { setRequest(e.target.value) })}
				/>
				<br />
				<PageButton disabled={postingRide} type='submit'>{postingRide ? 'Posting Ride ..' : 'Post Ride'}</PageButton>
				{postingRide &&
					<CircularIndeterminate />
				}
			</ThemeProvider>
			{/* </Box> */}
		</form >
	);
}
