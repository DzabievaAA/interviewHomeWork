import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';

import { makeStyles } from '@material-ui/core/styles'

import {
	Grid,
	Avatar,
	Typography
} from '@material-ui/core'


export default function HeaderInfo (props){
	const useStyles = makeStyles({
		ring: {
		  color: "white",
		  width: 24,
		  height: 24,
		  marginRight: 14,
		},
		avatar: {
		  marginLeft: 10,
		  width: 24,
		  height: 24,
		},
		profileName: {
			color: "white",
			fontSize: 14,
		},
		pathProfile: {
			color: "white",
			fontSize: 12,
		},
		typographyBlock: {
			marginLeft: 10,
			marginTop: 20,
		},
		containRingAndAvatar: {
			marginTop: 17,
		}
	  });
	const classes = useStyles()
	return(
	<>
		<Grid container 
			  direction="row-reverse"
			  alignItems="center"
			  className={classes.containRingAndAvatar}
		>
			{/* <Typography> UserName </Typography> */}
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
			<Typography className={classes.profileName}> Личный профиль </Typography>
			<Typography className={classes.pathProfile}> Главная/Личный профиль </Typography>
		</Grid>
	</>
	)
}
