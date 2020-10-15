import {
	AppBar, 
	Avatar,
	Typography,
	Button,
	Grid
} from '@material-ui/core'

export default function ProfileBar ( props ) {
	return( 
	<AppBar> 
		<Grid 
			container 
			direction="row"
			justify="center"
			alignItems="center"
		>
			<Grid item xs={2}>
				<Avatar src="/public/favicon.ico"/>	
			</Grid>

			<Grid item xs={8}>
				<Typography> Name Surname Otchestvo </Typography>
			</Grid>

			<Grid item xs={2}>
				<Button> Press ME! </Button>
			</Grid>
		</Grid>
	</AppBar>
	)
}
