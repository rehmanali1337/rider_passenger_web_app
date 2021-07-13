
import React, { useState } from 'react';
import {
	ThemeProvider,
	makeStyles,
	createMuiTheme,
} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { green } from '@material-ui/core/colors';
import { Typography } from '@material-ui/core';
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router'
import CircularIndeterminate from '../components/CircularProgress'
import { notify_error, notify_success } from '../utils/utils';
import { PageButton } from './Buttons'
import { CheckboxLabels } from './Checkbox'
import { DateAndTimePickers } from './DateTimePicker'
import { SimpleSelect } from './Select'
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import { addOfferedRide } from '../utils/requests'



const useStyles = makeStyles((theme) => ({
	root: {
		// display: 'flex',
		// flexWrap: 'wrap',
		height: '90%',
		marginBottom: '20%'
	},
	heading: {
		marginTop: '6vh',
		marginBottom: '4vh'
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
	},
	checkBoxWrapper: {
		textAlign: 'center'
	},
	inputWrapper: {
		marginTop: '2vh'
	}
}));

const theme = createMuiTheme({
	palette: {
		primary: green,
	},
});



export function OfferRideForm() {
	const classes = useStyles();
	const locations = [
		"Boro Park",
		"Flatbush",
		"Williamsburg",
		"Manhattan",
		"Staten Island",
		"Crown Heights",
		"Monsey",
		"Monroe",
		"Lakewood",
		"Jersey City",
		"Swan Lake",
		"Monticello",
		"Liberty",
		"South Fallsburg",
		"Woodridge",
		"Woodbourne",
		"White Lake",
		"Bloomingburg",
		"Montreal",
		"Baltimore"
	]
	const [postingRide, setPostingRide] = useState(false)
	const [ridePosted, setRidePosted] = useState(false)
	const [details, setDetails] = useState(null)
	const [srcLocation, setSrcLocation] = useState('')
	const [destLocation, setDestLocation] = useState('')
	const [numberOfPassengers, setNumberOfPassengers] = useState(1)
	const [payed, setPayed] = useState(false)
	const [numberOfPackages, setNumberOfPackages] = useState(0)
	const [money, setMoney] = useState(0)
	const [pickupTime, setPickupTime] = useState('2021-05-24T10:30')
	const [gender, setGender] = useState('Male')
	const [call, setCall] = useState(false)
	const [text, setText] = useState(false)
	const [phone, setPhone] = useState(0)


	const passengersArray = Array.from({ length: 5 }, (x, i) => i + 1);
	const packagesArray = Array.from({ length: 11 }, (x, i) => i);

	const genders = ['Male', 'Female']

	const loggedIn = useSelector((state) => {
		return state.loggedIn
	})
	const accessToken = useSelector((state) => {
		return state.accessToken
	})


	const handleFormSubmit = async (data) => {
		data.preventDefault();
		if (details === null || srcLocation === '' || destLocation === '') {
			return
		}
		setPostingRide(true)
		const response = await addOfferedRide(accessToken, details, srcLocation, destLocation,
			numberOfPassengers, setNumberOfPackages, payed, pickupTime,
			gender, call, text, money, phone)
		// console.log(response)
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
		return <Redirect to="/offered_rides" />
	}



	return (
		<form className={
			classes.root
		} noValidate onSubmit={handleFormSubmit} >
			<ThemeProvider theme={theme}>
				<Typography className={classes.heading} variant='h3'>Offer a Ride to Someone</Typography>
				<SimpleSelect
					inputLabel="Pickup Location"
					values={locations}
					onChange={(e) => {
						setSrcLocation(e.target.value)
					}}
					value={srcLocation}
					label="Pickup Location" />
				<SimpleSelect
					inputLabel="Destination Location"
					values={locations}
					onChange={(e) => {
						setDestLocation(e.target.value)
					}}
					value={destLocation}
					label="Destination Location" />
				<SimpleSelect
					inputLabel="Max Number of Passengers"
					values={passengersArray}
					onChange={(e) => {
						setNumberOfPassengers(e.target.value)
					}}
					value={numberOfPassengers}
					label="Max Number of Passengers" />
				<SimpleSelect
					inputLabel="Max Number of Packages"
					values={packagesArray}
					onChange={(e) => {
						setNumberOfPackages(e.target.value)
					}}
					value={numberOfPackages}
					label="Max Number of Packages" />
				{/* Gender select */}
				<SimpleSelect
					inputLabel="Your Gender"
					values={genders}
					onChange={(e) => {
						setGender(e.target.value)
					}}
					value={gender}
					label="Your Gender" />
				<div className={classes.checkBoxWrapper}>
					<CheckboxLabels boxLabel="I want to charge money"
						checked={payed}
						onChange={(e) => {
							setPayed(!payed)
							// console.log(e.target.checked)
						}} />
				</div>
				<div className={classes.inputWrapper}>

					<InputLabel htmlFor="amount">Amount</InputLabel>
					<OutlinedInput disabled={!payed}
						id="amount"
						value={money}
						onChange={(e) => {
							setMoney(e.target.value)
						}}
						startAdornment={<InputAdornment position="start">$</InputAdornment>}
						labelWidth={60}
					/>
				</div>

				<div className={classes.inputWrapper}>
					<InputLabel htmlFor="phone">Phone</InputLabel>
					<OutlinedInput
						id="phone"
						value={phone}
						onChange={(e) => {
							setPhone(e.target.value)
						}}
						startAdornment={<InputAdornment position="start">+</InputAdornment>}
						labelWidth={60}
					/>
				</div>

				<div className={classes.checkBoxWrapper}>
					<CheckboxLabels boxLabel="Call"
						checked={call}
						onChange={(e) => {
							setCall(!call)
						}} />
					<CheckboxLabels boxLabel="Text"
						checked={text}
						onChange={(e) => {
							setText(!text)
						}} />
				</div>


				<DateAndTimePickers
					handleChange={(e) => {
						setPickupTime(e.target.value)
					}} />
				<TextField
					className={classes.margin}
					label="Ride Details"
					multiline
					fullWidth
					rows={10}
					type="text"
					variant="outlined"
					onChange={(e => { setDetails(e.target.value) })}
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
