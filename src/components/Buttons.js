import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { GlobalContext } from '../context/GlobalContext'


export function TopMenuButton({ children, ...props }) {
	const AppContext = useContext(GlobalContext)
	const useStyles = makeStyles({
		button: {
			backgroundColor: AppContext.Colors.header.buttonBackground,
			color: AppContext.Colors.header.buttonText,
			borderColor: AppContext.Colors.header.buttonBorder,
			marginRight: '2vw',
			'&:hover': {
				backgroundColor: AppContext.Colors.header.buttonBackgroundHover,
				color: AppContext.Colors.header.buttonTextHover,
				borderColor: AppContext.Colors.header.buttonBorderHover,
			}
		}
	});
	const classes = useStyles();

	return (
		<Button {...props} className={classes.button} variant="outlined">{children}</Button>
	);
}

export function PageButton({ children, ...props }) {
	const AppContext = useContext(GlobalContext)
	const useStyles = makeStyles({
		button: {
			backgroundColor: AppContext.Colors.pageButton.buttonBackground,
			color: AppContext.Colors.pageButton.buttonText,
			borderColor: AppContext.Colors.pageButton.buttonBorder,
			margin: '3vh',
			'&:hover': {
				backgroundColor: AppContext.Colors.pageButton.buttonBackgroundHover,
				color: AppContext.Colors.pageButton.buttonTextHover,
				borderColor: AppContext.Colors.pageButton.buttonBorderHover,
			}
		}
	});
	const classes = useStyles();

	return (
		<Button {...props} className={classes.button} variant="outlined">{children}</Button>
	);
}