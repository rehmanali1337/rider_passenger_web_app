import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import { GlobalContext } from '../context/GlobalContext'


export default function CircularIndeterminate() {
	const AppContext = useContext(GlobalContext)
	const useStyles = makeStyles((theme) => ({
		root: {
			// display: 'flex',
			'& > * + *': {
				margin: 'auto',
			},
		},
		colorPrimary: {
			color: AppContext.Colors.loadingCircleColor
		}
	}));
	const classes = useStyles();

	return (
		<div >
			<CircularProgress classes={{ root: classes.root, colorPrimary: classes.colorPrimary }} color="primary" />
		</div >
	);
}
