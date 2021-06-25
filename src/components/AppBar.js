import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Slide from '@material-ui/core/Slide';
import { Button, makeStyles } from '@material-ui/core'
import { mainStore } from '../store/store'
import { useSelector, useDispatch } from 'react-redux';
import { types } from '../store/variables';

function HideOnScroll(props) {
	const { children, window } = props;
	// Note that you normally won't need to set the window ref as useScrollTrigger
	// will default to window.
	// This is only being set here because the demo is in an iframe.
	const trigger = useScrollTrigger({ target: window ? window() : undefined });

	return (
		<Slide appear={false} direction="down" in={!trigger}>
			{children}
		</Slide>
	);
}

const useStyles = makeStyles({
	headerButtonDiv: {
		marginRight: 'auto',
		marginLeft: 'auto'
	},
	headerButton: {
		marginRight: '2vw'
	},
	loginButton: {
		marginRight: '1vw'
	}
})

HideOnScroll.propTypes = {
	children: PropTypes.element.isRequired,
	/**
	 * Injected by the documentation to work in an iframe.
	 * You won't need it on your project.
	 */
	window: PropTypes.func,
};



export default function HideAppBar(props) {
	const loggedIn = useSelector((state) => {
		return state.loggedIn
	})
	const dispatch = useDispatch()

	const handleLogout = () => {
		console.log('Logging out ...')
		dispatch({ type: types.LOGOUT })
	}
	console.log(loggedIn)
	const classes = useStyles()
	return (
		<React.Fragment>
			<CssBaseline />
			<HideOnScroll {...props}>
				<AppBar>
					<Toolbar>
						<div className={classes.headerButtonDiv}>
							<Button className={classes.headerButton} href='/' variant='outlined' color='inherit'>Home</Button>
							<Button href='/requests' variant='outlined' color='inherit'>Requests</Button>
						</div>
						{
							!loggedIn &&
							<Button className={classes.loginButton} href='/signup' variant='outlined' color='inherit'>Sign Up</Button>
						}
						{loggedIn ?
							<Button variant='outlined' color='inherit' onClick={handleLogout}>Logout</Button>
							:
							<Button className={classes.loginButton} href='/login' variant='outlined' color='inherit'>Login</Button>
						}
					</Toolbar>
				</AppBar>
			</HideOnScroll>
			<Toolbar />
			<Container>
				<Box my={2}>
					{props.children}
				</Box>
			</Container>
		</React.Fragment>
	);
}
