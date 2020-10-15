import {
	List,
	ListItem,
	ListItemAvatar,
	ListItemText,
	Avatar
} from '@material-ui/core'

import AlternativeEmailIcon from '@material-ui/icons/AlternateEmail'
import PhoneIcon from '@material-ui/icons/Phone'

export default function UserInfoList ( props ){
	return(
	<List>
		<ListItem>
			<ListItemAvatar>
				<AlternativeEmailIcon/>
			</ListItemAvatar>
			<ListItemText>
				test@mail.eu
			</ListItemText>
		</ListItem>

		<ListItem>
			<ListItemAvatar>
				<PhoneIcon/>
			</ListItemAvatar>
			<ListItemText>
				Укажите номер телефона
			</ListItemText>
		</ListItem>

	</List>
	)
}
