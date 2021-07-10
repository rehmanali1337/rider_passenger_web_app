import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";


const useStyles = makeStyles({
	label: {
		display: 'block'
	}
})


const GreenCheckbox = withStyles({
	root: {
		// marginLeft: 'auto',
		// marginRight: 'auto',
		justifyContent: 'center',
		color: "#ff700",
		"&$checked": {
			color: "#ff7600",
		}
	},
	checked: {}
})((props) => <Checkbox color="default" {...props} />);

export function CheckboxLabels({ boxLabel, ...props }) {
	const classes = useStyles();


	return (
		<FormGroup>
			<FormControlLabel className={classes.label}
				control={
					<GreenCheckbox
						{...props}
						name="payMoney"
					/>
				}
				label={boxLabel}
			/>
		</FormGroup>
	);
}
