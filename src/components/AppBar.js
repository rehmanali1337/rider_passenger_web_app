import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Slide from '@material-ui/core/Slide';
import { Button, makeStyles } from '@material-ui/core'
import { useSelector, useDispatch } from 'react-redux';
import { types } from '../store/variables';
import { TopMenuButton } from './Buttons'
import { GlobalContext } from '../context/GlobalContext'

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


HideOnScroll.propTypes = {
	children: PropTypes.element.isRequired,
	/**
	 * Injected by the documentation to work in an iframe.
	 * You won't need it on your project.
	 */
	window: PropTypes.func,
};



export default function HideAppBar(props) {
	const AppContext = useContext(GlobalContext)

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
		},
		appbar: {
			backgroundColor: AppContext.Colors.header.headerBackground
		},
		toolbar: {
			margin: 0,
			padding: 0
		}
	})

	const loggedIn = useSelector((state) => {
		return state.loggedIn
	})
	const dispatch = useDispatch()

	const handleLogout = () => {
		dispatch({ type: types.LOGOUT })
	}
	const classes = useStyles()
	return (
		<React.Fragment>
			<CssBaseline />
			<HideOnScroll {...props}>
				<AppBar className={classes.appbar}>
					<Toolbar>
						<div className={classes.headerButtonDiv}>
							<TopMenuButton href="/">Home</TopMenuButton>
							<TopMenuButton href="/requests">Ride Requests</TopMenuButton>
							{loggedIn &&
								<TopMenuButton href="/post_request">Post Request</TopMenuButton>
							}
							{
								!loggedIn &&
								<TopMenuButton href="/signup">SignUp</TopMenuButton>
							}
							{loggedIn ?
								<TopMenuButton onClick={handleLogout}>Logout</TopMenuButton>
								:
								<TopMenuButton href="/login">Login</TopMenuButton>
							}
						</div>
					</Toolbar>
				</AppBar>
			</HideOnScroll>
			<Toolbar variant='dense' />
			<Container>
				<Box my={2}>
					{props.children}
				</Box>
			</Container>
		</React.Fragment>
	);
}
