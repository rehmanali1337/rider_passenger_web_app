
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
		margin: '1rem',
		display: 'relative',
		textAlign: 'center',
		justifyContent: 'center',
		borderRadius: '1em',
		marginTop: '2vh',
		minHeight: '20rem',
		maxHeight: '20rem'
	},
	title: {
		fontSize: '3em',
		marginTop: '0.5rem',
		fontFamily: 'cursive'
	},
	actions: {
		justifyContent: 'center',
	}
});

export default function ServiceCard({ title, content }) {
	const classes = useStyles();
	const loggedIn = useSelector((state) => {
		return state.loggedIn
	})

	return (
		<Card className={classes.root} variant="outlined">
			<CardContent >
				<Typography className={classes.title} variant='h4'>
					{title}
				</Typography>
				<Typography>
					{content}
				</Typography>
			</CardContent>
			<CardActions className={classes.actions}>
				{!loggedIn &&
					<PageButton href="/signup" >Signup</PageButton>
				}
			</CardActions>
		</Card>
	);
}
