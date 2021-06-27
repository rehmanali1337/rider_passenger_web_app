import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { PageButton } from './Buttons'
import { GlobalContext } from '../context/GlobalContext'



export default function OutlinedCard() {
	const AppContext = useContext(GlobalContext)
	const useStyles = makeStyles({
		root: {
			borderRadius: '2vh',
			textAlign: 'center',
			marginTop: '10vh',
			width: '70vw',
			height: '50vw',
			marginLeft: 'auto',
			marginRight: 'auto',
			backgroundColor: AppContext.Colors.homeCards.background
		},
		title: {
			marginTop: '5%',
			// fontSize: 14,
		},
		// cardActionButton: {
		// 	width: '100%',
		// 	textAlign: 'center',
		// 	marginRight: '20vw',
		// 	marginLeft: 'auto',
		// 	marginTop: '20vh',
		// },
		buttonWrapper: {
			textAlign: 'center',
			// marginTop: '20vh',
			width: '100%',
			margin: 'auto'
		},
		line: {
			marginTop: '10%'
		}
	});
	const classes = useStyles();
	const bull = <span className={classes.bullet}>•</span>;

	return (
		<Card className={classes.root} variant="outlined">
			<CardContent>
				<Typography className={classes.title} variant='h2'>YID Ride</Typography>
				<div className={classes.line}>
					<Typography variant='p' className={classes.line}>Here is the text of some.text, and UI controls, typically platext,
				and UI controls, typically placed at the bottom of the card.</Typography>
				</div>
			</CardContent>
			<CardActions className={classes.cardActionButton} >
				<div className={classes.buttonWrapper}>
					<PageButton>Signup</PageButton>
					<PageButton>Login</PageButton>
				</div>
			</CardActions>
		</Card>
	);
}
