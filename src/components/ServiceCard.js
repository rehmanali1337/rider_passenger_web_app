import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		marginTop: '2rem',
		borderRadius: '1rem',
		border: '1px solid',
		minHeight: '300px',
		maxHeight: '300px'
	},
	details: {
		display: 'flex',
		flexDirection: 'column',
	},
	content: {
		flex: '1 0 auto',
		marginTop: '4rem',
		marginLeft: '1vw'
	},
	cover: {
		padding: '1rem',
		paddingLeft: '2vw',
		height: '100%',
		minHeight: '200px',
		minWidth: '200px',
		maxWidth: '200px'
	},
}));

export default function MediaControlCard({ text, image }) {
	const classes = useStyles();

	return (
		<Card className={classes.root}>

			<CardMedia
				className={classes.cover}
				component="img"
				image={image}
			/>

			<div className={classes.details}>

				<CardContent className={classes.content}>
					<Typography component="h3" variant="h3">
						{text}
					</Typography>
				</CardContent>
			</div>
		</Card>
	);
}
