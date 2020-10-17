import {
	List,
	ListItem,
	ListItemAvatar,
	ListItemText,
	Avatar,
	ThemeProvider,
	Typography
} from '@material-ui/core'

import { makeStyles } from '@material-ui/core/styles'

import AlternativeEmailIcon from '@material-ui/icons/AlternateEmail'
import PhoneIcon from '@material-ui/icons/Phone'

export default function UserInfoList ( {email, cellphone} ){
const useStyles = makeStyles( (theme) => ({
	containList: {
		boxShadow: "0 14px 28px rgba(0,0,0,0.15), 0 10px 10px rgba(0,0,0,0.15);",
		backgroundColor: "white",
		marginTop: 10,
		borderRadius: 10,
		[theme.breakpoints.up('sm')]:{
			marginTop: 24,
		  }
	},
	icon:{
		fill: theme.mainColor,
		width: 20,
		height: 20,
		[theme.breakpoints.up('sm')]:{
			width: 30,
			height: 30,
		  }
	},
	text:{
		fontSize: 14,
		[theme.breakpoints.up('sm')]:{
			fontSize: 18,
		  }
	}
}));
const classes = useStyles()
	return(
	<List className={classes.containList}>
		<ListItem>
			<ListItemAvatar>
				<AlternativeEmailIcon className={classes.icon}/>
			</ListItemAvatar>
			<ListItemText >
				<Typography className={classes.text}>
					{email}
				</Typography>
			</ListItemText>
		</ListItem>
		<hr/>
		<ListItem>
			<ListItemAvatar>
				<PhoneIcon className={classes.icon}/>
			</ListItemAvatar>
			<ListItemText>
				<Typography className={classes.text}>
					{cellphone}	
				</Typography>
			</ListItemText>
		</ListItem>

	</List>
	)
}
