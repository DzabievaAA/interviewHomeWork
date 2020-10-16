import {
	List,
	ListItem,
	ListItemAvatar,
	ListItemText,
	Avatar
} from '@material-ui/core'

import { makeStyles } from '@material-ui/core/styles'

import AlternativeEmailIcon from '@material-ui/icons/AlternateEmail'
import PhoneIcon from '@material-ui/icons/Phone'

export default function UserInfoList ( {email, cellphone} ){
const useStyles = makeStyles({
	containList: {
		boxShadow: "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);",
		marginLeft: 10,
		marginTop: 10,
		borderRadius: 10,
	},
});
const classes = useStyles()
	return(
	<List className={classes.containList}>
		<ListItem>
			<ListItemAvatar>
				<AlternativeEmailIcon/>
			</ListItemAvatar>
			<ListItemText>
				{email}
			</ListItemText>
		</ListItem>
		<hr/>
		<ListItem>
			<ListItemAvatar>
				<PhoneIcon/>
			</ListItemAvatar>
			<ListItemText>
				{cellphone}
			</ListItemText>
		</ListItem>

	</List>
	)
}
