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
import { notify_success, notify_error } from '../utils/utils'
import { loginRequest } from '../utils/requests'
import { PageButton } from './Buttons'


const useStyles = makeStyles((theme) => ({
	root: {
		// display: 'flex',
		flexWrap: 'wrap',
	},
	margin: {
		margin: theme.spacing(2),
	},
	box: {
		marginTop: '5vh',
		paddingTop: '5vh',
		paddingBottom: '5vh',
		margin: 'auto',
		width: '70vw'
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



export default function LoginForm() {
	const classes = useStyles();
	const [username, setUsername] = useState(null)
	const [password, setPassword] = useState(null)
	const [checkingLogin, setCheckingLogin] = useState(false)
	const dispatch = useDispatch()
	const loggedIn = useSelector((state) => {
		return state.loggedIn
	})


	const handleFormSubmit = async (data) => {
		data.preventDefault();
		if (username === null || password === null) {
			return
		}
		setCheckingLogin(true)
		const response = await loginRequest(username, password)
		if ('access_token' in response) {
			const payload = {
				accessToken: response.access_token
			}
			dispatch({ type: types.LOGIN, payload: payload })
			notify_success('Login successfull')
		} else {
			notify_error('Invalid Username/Password')
		}
		setCheckingLogin(false)
	}

	if (loggedIn) {
		return <Redirect to="/" />
	}

	return (
		<form className={
			classes.root
		} noValidate onSubmit={handleFormSubmit} >
			<Box className={classes.box} m={4} border={1} borderRadius={5}>
				<Typography variant='h5'>Log-in</Typography>
				<ThemeProvider theme={theme}>
					<TextField
						className={classes.margin}
						label="Email"
						variant="outlined"
						id="email-input"
						onChange={(e => { setUsername(e.target.value) })}
					/>
					<br />
					<TextField
						className={classes.margin}
						label="Password"
						type="password"
						variant="outlined"
						id="pass-input"
						onChange={(e => { setPassword(e.target.value) })}
					/>
					<br />
					<PageButton disabled={checkingLogin} type='submit'>{checkingLogin ? 'Logging in ..' : 'Login'}</PageButton>
					{checkingLogin &&
						<CircularIndeterminate />
					}
				</ThemeProvider>
			</Box>
		</form >
	);
}
