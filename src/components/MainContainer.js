import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import HideAppBar from '../components/AppBar'
import { makeStyles, Box } from '@material-ui/core'
import MobileMenu from '../components/MobileMenu'
import { Footer } from '../components/Footer'

export default function MainContainer({ children }) {
	const useStyles = makeStyles({
		root: {
			height: '100vh',
			// width: '100vw',
			padding: 0,
			margin: 0,
		},
		empty: {
			minHeight: '20vh'
		}
	})
	const classes = useStyles()
	return (
		<React.Fragment>
			<CssBaseline />
			<Container maxWidth="xl" className={classes.root}>
				<Box display={{ xs: 'none', sm: 'none', md: 'block' }}>
					<HideAppBar />
					{children}
					{/* <div className={classes.empty}></div> */}
				</Box>
				<Box display={{ xs: 'block', sm: 'block', md: 'none' }}>
					<MobileMenu>
						{children}
					</MobileMenu>
				</Box>
				<div className={classes.empty}></div>
				<Footer />
			</Container>
		</React.Fragment>
	);
}
