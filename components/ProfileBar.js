import {
	Avatar,
	Typography,
	Button,
	Grid
} from '@material-ui/core'

import EditIcon from '@material-ui/icons/Create';
import CancelEditIcon from '@material-ui/icons/Close';


export default function ProfileBar ( {nameSurname, onClick, isEditing} ) {
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
				<Button onClick={onClick}>
					{
						isEditing ? 
							<CancelEditIcon/>
							:
							<EditIcon/>
					}
				</Button>
			</Grid>
		</Grid>
	)
}
