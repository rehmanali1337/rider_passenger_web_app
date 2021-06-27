import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import HideAppBar from '../components/AppBar'
import { makeStyles } from '@material-ui/core'

export default function MainContainer({ children }) {
	const useStyles = makeStyles({
		root: {
			height: '100vh',
			padding: 0,
			margin: 0
		}
	})
	const classes = useStyles()
	return (
		<React.Fragment>
			<CssBaseline />
			<Container maxWidth="lg" className={classes.root}>
				<HideAppBar />
				{children}
			</Container>
		</React.Fragment>
	);
}
