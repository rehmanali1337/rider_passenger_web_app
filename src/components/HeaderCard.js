import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { PageButton } from './Buttons'
import { useSelector } from 'react-redux'

const useStyles = makeStyles({
	root: {
		minWidth: '100%',
		textAlign: 'center',
		justifyContent: 'center',
		borderRadius: '1em',
		marginTop: '2vh'
	},
	title: {
		fontSize: '4em',
		marginTop: '0.5rem',
		fontFamily: 'cursive'
	},
	quote: {
		padding: '2em'
	}
});

export default function HeaderCard() {
	const classes = useStyles();
	const loggedIn = useSelector((state) => {
		return state.loggedIn
	})

	return (
		<Card className={classes.root} variant="outlined">
			<CardContent className={classes}>
				<Typography className={classes.title} variant='h1'>
					YID Ride
				</Typography>
				<Typography className={classes.quote}>
					"When one door of happiness closes, another opens; but often we look so long
					in disappointment and bitterness at
					the closed door that we do not expectantly look for and therefore see
					with pleasure and gratitude the one which has been opened for us."
				</Typography>
			</CardContent>
			<CardActions className={classes.root}>
				{!loggedIn &&
					<>
						<PageButton href="/login">Login</PageButton>
						<PageButton href="/signup">Signup</PageButton>
					</>
				}
			</CardActions>
		</Card >
	);
}
