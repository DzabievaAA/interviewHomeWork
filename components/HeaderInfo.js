import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';

import { makeStyles } from '@material-ui/core/styles'

import {
	Grid,
	Avatar,
	Typography,
	Hidden
} from '@material-ui/core'


export default function HeaderInfo ({userName}){

	let shortName = ""
	if( typeof userName === "string" && userName.length > 0){
		let nameParts = userName.trim().replace(/ {2,}/g,' ').split(' ');
		shortName += nameParts.shift();
		if( nameParts.length > 0){
			shortName += " " + nameParts[0][0].toUpperCase() + '.'
		}
	}
	
	const useStyles = makeStyles( (theme) => ({
		ring: {
		  color: "white",
		  width: 24,
		  height: 24,
		  marginRight: 14,
		  [theme.breakpoints.up('sm')]:{
			width: 40,
			height: 40,
		  }
		},
		avatar: {
		  marginLeft: 10,
		  width: 24,
		  height: 24,
		  [theme.breakpoints.up('sm')]:{
			width: 40,
			height: 40,
		  }
		},
		shortName:{
			color: "white",
			fontSize: 14,
			marginLeft: 20,
			marginRight: 26
		},
		personalProfileLabel: {
			color: "white",
			fontSize: 14,
			[theme.breakpoints.up('sm')]:{
				fontSize: 18,
			  },
		},
		pathProfile: {
			color: "white",
			fontSize: 12,
			marginTop: 10,
			[theme.breakpoints.up('sm')]:{
				fontSize: 14,
			  },
		},
		typographyBlock: {
			marginLeft: 10,
			marginTop: 20,
		},
		containRingAndAvatar: {
			marginTop: 17,
		}
	  }));
	const classes = useStyles()
	return(
	<>
		<Grid container 
			  direction="row-reverse"
			  alignItems="center"
			  className={classes.containRingAndAvatar}
		>
			<Hidden xsDown>
				<Typography className={classes.shortName}> {shortName} </Typography>
			</Hidden>
			<Avatar className={classes.avatar} src="/avatar.png"/>
			<svg width="1" height="24" viewBox="0 0 1 24" fill="none" xmlns="http://www.w3.org/2000/svg">
				<line x1="0.5" y1="2.18557e-08" x2="0.499999" y2="24" stroke="white"/>
			</svg>

			<NotificationsNoneIcon className={classes.ring}/>
		</Grid>

		<Grid container
			  direction="column"
			  className={classes.typographyBlock}
		>
			<Typography className={classes.personalProfileLabel}> Личный профиль </Typography>
			<Typography className={classes.pathProfile}> Главная/Личный профиль </Typography>
		</Grid>
	</>
	)
}
