import {
	List,
	ListItem,
	ListItemAvatar,
	ListItemText,
	Avatar
} from '@material-ui/core'

import AlternativeEmailIcon from '@material-ui/icons/AlternateEmail'
import PhoneIcon from '@material-ui/icons/Phone'

export default function UserInfoList ( {email, cellphone} ){
	return(
	<List>
		<ListItem>
			<ListItemAvatar>
				<AlternativeEmailIcon/>
			</ListItemAvatar>
			<ListItemText>
				{email}
			</ListItemText>
		</ListItem>

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
