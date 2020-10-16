import {
	Avatar,
	Typography,
	Button,
	Grid
} from '@material-ui/core'

import EditIcon from '@material-ui/icons/Create';
import CancelEditIcon from '@material-ui/icons/Close';

import { makeStyles } from '@material-ui/core/styles'

export default function ProfileBar ( {nameSurname, onClick, isEditing} ) {

const useStyles = makeStyles({
	avatar: {
		color: "white",
		width: 40,
		height: 40,
		marginLeft: 10,
		marginRight: 10,
	},
	container: {
		backgroundColor: '#1A78C2',
		height: 71,
		marginTop: 10,
		color: "white",
		marginLeft: 10,
		marginRight: 10,
		borderRadius: 10,
	},
	nameSurname: {
		marginleft: 10,
	},
	penEdit: {
		width: 18,
		height: 18,
		color: "white",
		padding: "0 0 0 0"
	}
});
const classes = useStyles()

	return( 
		<Grid
		    className={classes.container}
			container 
			direction="row"
			justify="center"
			alignItems="center"
		>
			<Grid item xs={2}>
				<Avatar className={classes.avatar} src="/public/avatar"/>	
			</Grid>

			<Grid item xs={8}>
				<Typography className={classes.nameSurname}> {nameSurname} </Typography>
			</Grid>

			<Grid item xs={2}>
				<Button onClick={onClick}>
					{
						isEditing ? 
							<CancelEditIcon/>
							:
							<EditIcon className={classes.penEdit}/>
					}
				</Button>
			</Grid>
		</Grid>
	)
}
