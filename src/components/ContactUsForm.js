import React, { useState } from 'react';
import {
	ThemeProvider,
	makeStyles,
	createMuiTheme,
} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { green } from '@material-ui/core/colors';
import { Typography } from '@material-ui/core';
import { Redirect } from 'react-router'
import CircularIndeterminate from '../components/CircularProgress'
import { PageButton } from './Buttons'
import { notify_success } from '../utils/utils';



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
	}
}));

const theme = createMuiTheme({
	palette: {
		primary: green,
	},
});



export function ContactUsForm() {
	const classes = useStyles();
	const [sending, setSending] = useState(false)
	const [sendingComplete, setSendingComplete] = useState(false)
	const [name, setName] = useState(null)
	const [email, setEmail] = useState(null)
	const [message, setMessage] = useState(null)
	const [phone, setPhone] = useState(null)

	const handleFormSubmit = async (data) => {
		data.preventDefault();
		if (name === null || email === null || message === null) {
			return
		}
		notify_success("Message sent!")
	}


	if (sendingComplete) {
		return <Redirect to="/" />
	}

	return (
		<form className={
			classes.root
		} noValidate onSubmit={handleFormSubmit} >
			<ThemeProvider theme={theme}>
				<Typography className={classes.heading} variant='h3'>Get In Touch</Typography>
				<TextField
					className={classes.margin}
					label="Full Name (required)"
					fullWidth
					rows={10}
					type="text"
					variant="outlined"
					onChange={(e => { setName(e.target.value) })}
				/>
				<TextField
					className={classes.margin}
					label="Email (required)"
					fullWidth
					rows={10}
					type="email"
					variant="outlined"
					onChange={(e => { setEmail(e.target.value) })}
				/>
				<TextField
					className={classes.margin}
					label="Phone Number"
					fullWidth
					rows={10}
					type="phone"
					variant="outlined"
					onChange={(e => { setPhone(e.target.value) })}
				/>
				<TextField
					className={classes.margin}
					label="Message (required)"
					multiline
					fullWidth
					rows={10}
					type="text"
					variant="outlined"
					onChange={(e => { setMessage(e.target.value) })}
				/>
				<br />
				<PageButton disabled={sending} type='submit'>Send</PageButton>
				{sending &&
					<CircularIndeterminate />
				}
			</ThemeProvider>
			{/* </Box> */}
		</form >
	);
}
