import React from 'react'
import MainContainer from '../components/MainContainer'
import { Typography, makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
	about: {
		padding: '10vh'
	}
})


export const About = () => {
	const classes = useStyles()
	return (
		<div>
			<MainContainer>
				<Typography variant="h1">
					About Us!
				</Typography>
				<Typography className={classes.about}>
					YidInfo – the most prime, accurate, and punctual up-to-the-minute news within the Jewish world, providing a combination of local and world news to keep you updated when it happens, as it happens.
					We pride ourselves in bringing you the best news written directly to our readers from the best writers out there.
				</Typography>

			</MainContainer>

		</div>
	)
}
