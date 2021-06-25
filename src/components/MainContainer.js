import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import HideAppBar from '../components/AppBar'

export default function MainContainer({ children }) {
	return (
		<React.Fragment>
			<CssBaseline />
			<Container maxWidth="md">
				<HideAppBar />
				{children}
				{/* <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} /> */}
			</Container>
		</React.Fragment>
	);
}
