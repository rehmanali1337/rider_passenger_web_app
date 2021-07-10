import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
	container: {
		display: 'block',
		flexWrap: 'wrap',
	},
	textField: {
		marginTop: '2vh',
		marginLeft: theme.spacing(1),
		marginRight: theme.spacing(1),
		width: '40vw',
	},
}));

export function DateAndTimePickers({ handleChange }) {
	const classes = useStyles();


	return (
		<form className={classes.container} noValidate>
			<TextField
				id="datetime-local"
				onChange={handleChange}
				label="Pickup Time"
				type="datetime-local"
				defaultValue="2021-05-24T10:30"
				className={classes.textField}
				InputLabelProps={{
					shrink: true,
				}}
			/>
		</form>
	);
}
