import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Button } from '@material-ui/core'
import { Redirect } from 'react-router';

const useStyles = makeStyles((theme) => ({
	root: {
		'& .MuiTextField-root': {
			margin: theme.spacing(1),
			width: '60%',
		},
	},
	withFull: {
		width: '100%'
	},
	box: {
		paddingTop: '5vh',
		paddingBottom: '5vh',
		width: '70vw',
		marginLeft: 'auto',
		marginRight: 'auto'
	},
	signupButton: {
		marginTop: '2vh'
	}
}));

export default function SingupForm() {
	const classes = useStyles();
	const [signing, setSigning] = useState(false)
	const [firstName, setFirstName] = useState(null)
	const [lastName, setLastName] = useState(null)
	const [email, setEmail] = useState(null)
	const [password, setPassword] = useState(null)
	const [signupSuccess, setSignupSuccess] = useState(null)

	const handleFormSubmit = (e) => {
		e.preventDefault()
		if (firstName === null ||
			lastName === null ||
			email === null ||
			password === null) {
			return
		}
		setSigning(true)
		setTimeout(() => {
			setSigning(false)
			setSignupSuccess(true)
		}, 2000)
	}

	if (signupSuccess) {
		return <Redirect to="/login" />
	}

	return (
		<Box border={1} className={classes.box}>
			<form className={classes.root} autoComplete="off" onSubmit={handleFormSubmit}>
				<div>
					<TextField
						label="First Name"
						type="text"
						variant="outlined"
						required={true}
						onChange={(e) => setFirstName(e.target.value)}
					/>
					<TextField
						label="Last Name"
						type="text"
						variant="outlined"
						onChange={(e) => setLastName(e.target.value)}
					/>
					<br />
					<TextField
						label="Email Address"
						type="email"
						variant="outlined"
						required={true}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<TextField
						label="Password"
						type="password"
						variant="outlined"
						required={true}
						onChange={(e) => setPassword(e.target.value)}
					/>
					<br />
					<Button className={classes.signupButton} type='submit' variant='contained' disabled={signing}>{signing ? 'Signing Up...' : 'Sign Up'}</Button>
				</div>
			</form>
		</Box>
	);
}
