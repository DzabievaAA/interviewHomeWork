import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import {
	Grid,
	Avatar,
	Typography
} from '@material-ui/core'

export default function HeaderInfo (props){
	return(
	<>
		<Grid container 
			  direction="row-reverse"
			  alignItems="center"
		>
			<Typography> UserName </Typography>
			<Avatar src="/public/favicon.ico"/>
			<NotificationsNoneIcon/>
		</Grid>

		<Grid container
			  direction="column"
		>
			<Typography> Личный профиль </Typography>
			<Typography> Главная/Личный профиль </Typography>
		</Grid>
	</>
	)
}
