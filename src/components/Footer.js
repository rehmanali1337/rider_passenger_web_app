import React from 'react'
import { Typography, Grid, makeStyles, Link } from '@material-ui/core'



export const Footer = () => {
	const useStyles = makeStyles({
		root: {
			position: 'sticky',
			bottom: 0,
			paddingTop: '1rem',
			backgroundColor: '#f9f9f9',
			maxHeight: '20%',
			// borderTop: '1px solid',
			textAlign: 'left'
		},
		bordered: {
			borderLeft: 'solid',
			borderLeftWidth: '2px'
		},
		copyright: {
			marginTop: '0.5rem',
			marginBottom: '0.5rem',
			textAlign: 'center'
		},
		link: {
			marginRight: '3rem'
		},
		linksSec: {
			// marginBottom: '1rem',
			marginLeft: '2rem',
			// textAlign: 'center',
			// justifyContent: 'center'
		},
		about: {
			marginLeft: '2rem'
		}
	})
	const classes = useStyles()
	return (
		<div className={classes.root}>
			<Grid container className={classes.root}>
				<Grid item container xs={12} spacing={4}>
					{/* <Grid item xs={1}>
					</Grid> */}

					<Grid item xs={12} sm={5} className={classes.about}>

						<Typography variant="h5">About Us</Typography>
						<Typography variant="body2">YidInfo – the most prime, accurate, and punctual up-to-the-minute news within the Jewish world, providing a combination of local and world news to keep you updated when it happens, as it happens.

We pride ourselves in bringing you the best news written directly to our readers from the best writers out there.</Typography>
					</Grid>
					<Grid item xs={12} sm={3} className={classes.linksSec}>
						<Typography variant="h5">Contact Details</Typography>
						<Typography variant="body1">office@yidinfo.net <br />
													718-313-6501</Typography>
					</Grid>
					<Grid item xs={12} sm={3} clasName={classes.linksSec}>
						<div className={classes.linksSec}>
							<Typography variant="h5">Links</Typography>
							<Link component="button" href="/" className={classes.link}>Home</Link>
							<Link component="button" href="/about" className={classes.link}>About Us</Link>
							<br />
							<Link component="button" href="/login" className={classes.link}>Login</Link>
							<Link component="button" href="/signup" className={classes.link}>Sign Up</Link>
							<br />
							<Link component="button" href="/contact_us" className={classes.link}>Contact Us!</Link>
							<br />
							<Link component="button" href="/terms" className={classes.link}>Terms and Conditions</Link>
							<br />
						</div>
					</Grid>
				</Grid>
				<Grid item xs={12} className={classes.copyright}>
					<Typography variant="body1">
						Copyright 2021
					</Typography>
				</Grid>
			</Grid>

		</div>
	)
}
