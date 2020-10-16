import {
	Avatar,
	Typography,
	Button,
	Grid
} from '@material-ui/core'

export default function ProfileBar ( {nameSurname, onClick} ) {
	return( 
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
				<Typography> {nameSurname} </Typography>
			</Grid>

			<Grid item xs={2}>
				<Button onClick={onClick}> Press ME! </Button>
			</Grid>
		</Grid>
	)
}
