import React from 'react'
import MainContainer from '../components/MainContainer'
import AppBarHide from '../components/AppBar'
import { makeStyles, Typography, Chip, Avatar } from '@material-ui/core'
import OutlinedCard from '../components/Card'

export const Home = () => {
	const useStyles = makeStyles({
		chip: {
			margin: 0,
			borderRadius: 0,
			zIndex: 1,
		},
		space: {
			margin: 0
		},
		header: {
			// background: 'linear-gradient(to right bottom, #fff, #ff7600)',
			// zIndex: 5,
			// width: '100vw',
			// height: '50vh',
			// marginTop: '10vh'

		}

	})
	const classes = useStyles()
	return (
		<div>
			<MainContainer>
				<OutlinedCard />
			</MainContainer>
		</div>
	)
}
