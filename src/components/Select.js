import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
	formControl: {
		margin: theme.spacing(1),
		minWidth: '60vw',
		maxWidth: '70vw'
	},
	selectEmpty: {
		marginTop: theme.spacing(2)
	}
}));

export function SimpleSelect({ values, inputLabel, ...props }) {
	const classes = useStyles();


	return (
		<div>
			<FormControl variant="outlined" className={classes.formControl}>
				<InputLabel id="demo-simple-select-outlined-label">{inputLabel}</InputLabel>
				<Select
					{...props}
				>
					{values.map((value, index) => {
						return <MenuItem key={value} value={value}>{value}</MenuItem>
					})}
				</Select>
			</FormControl>
		</div>
	);
}
