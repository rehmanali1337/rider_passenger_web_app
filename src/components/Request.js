import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { ContactsOutlined } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
	root: {
		maxWidth: '80vw',
		marginTop: '1vh',
		textAlign: 'left',
		marginLeft: 'auto',
		marginRight: 'auto'
	},
	media: {
		height: 0,
		paddingTop: '56.25%', // 16:9
	},
	expand: {
		transform: 'rotate(0deg)',
		marginLeft: 'auto',
		transition: theme.transitions.create('transform', {
			duration: theme.transitions.duration.shortest,
		}),
	},
	expandOpen: {
		transform: 'rotate(180deg)',
	},
	avatar: {
		backgroundColor: red[500],
	},
	content: {
		// marginLeft: '5vw',
		paddingLeft: '5vw'
	}
}));

const convertToDate = (timestamp) => {
	const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
	const dateTime = new Date(timestamp * 1000)
	const year = dateTime.getFullYear()
	const month = months[dateTime.getMonth()]
	const day = dateTime.getDate()
	const hour = dateTime.getHours()
	const minutes = dateTime.getMinutes()
	const seconds = dateTime.getSeconds()
	const date = `${day}-${month}-${year} ${hour}:${minutes}`
	return date
}

export default function RequestCard({ ride }) {
	const classes = useStyles();
	const [expanded, setExpanded] = React.useState(false);
	const datetime = convertToDate(ride.timestamp)
	const fullName = ride.owner_first_name + ride.owner_last_name

	const handleExpandClick = () => {
		return
		setExpanded(!expanded);
	};

	return (
		<Card className={classes.root}>
			<CardHeader
				avatar={
					<Avatar aria-label="recipe" className={classes.avatar}>
						{ride.owner_first_name.slice(0, 1)}
					</Avatar>
				}
				action={
					<IconButton aria-label="settings">
						<MoreVertIcon />
					</IconButton>
				}
				title={fullName}
				subheader={datetime}
			/>
			<CardContent className={classes.content}>
				<Typography paragraph>
					{ride.request_text}
				</Typography>
			</CardContent>
			<CardActions disableSpacing>
				{/* <IconButton
					className={clsx(classes.expand, {
						[classes.expandOpen]: expanded,
					})}
					onClick={handleExpandClick}
					aria-expanded={expanded}
					aria-label="show more"
				>
					<ExpandMoreIcon />
				</IconButton> */}
			</CardActions>
			<Collapse in={expanded} timeout="auto" unmountOnExit>
				<CardContent>
					<Typography paragraph>Method:</Typography>
					<Typography paragraph>
						Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
						minutes.
					</Typography>
				</CardContent>
			</Collapse>
		</Card>
	);
}
