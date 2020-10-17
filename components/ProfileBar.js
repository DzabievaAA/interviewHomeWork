import {
	Avatar,
	Typography,
	Button,
	Grid,
	Hidden
} from '@material-ui/core'

import EditIcon from '@material-ui/icons/Create';
import CancelEditIcon from '@material-ui/icons/Close';

import { makeStyles } from '@material-ui/core/styles'

export default function ProfileBar ( {nameSurname, onClick, isEditing} ) {

const useStyles = makeStyles( (theme) => ({
	container: {
		backgroundColor: '#1A78C2',
		height: 71,
		marginTop: 10,
		color: "white",
		marginLeft: 10,
		borderRadius: 10,
		[theme.breakpoints.up('sm')]:{
			height: 128
		}
	},
	avatar: {
		color: "white",
		width: 40,
		height: 40,
		marginLeft: 10,
		[theme.breakpoints.up('sm')]:{
			width: 80,
			height: 80,
			marginLeft: 30,
		}
	},
	nameSurname: {
		fontSize: 14,
		marginLeft: 10,
		[theme.breakpoints.up('sm')]:{
			fontSize: 30,
			marginLeft: 45
		}
	},
	penEdit: {
		width: 18,
		height: 18,
		color: "white",
		padding: "0 0 0 0"
	},
	crossEdit: {
		color: "white"
	},
	editDescrip: {
		fontSize: 14,
	}
}));
const classes = useStyles()

	return( 
		<Grid
		    className={classes.container}
			container 
			direction="row"
			alignItems="center"
		>
			<Grid item xs={2} sm={1} >
				<Avatar className={classes.avatar} src="/avatar.png"/>	
			</Grid>

			<Grid item xs={8} sm={9}>
				<Typography className={classes.nameSurname}> {nameSurname} </Typography>
			</Grid>

			<Grid item xs={2} sm={2}>
				<Grid container 
					direction="row"
					justify="flex-end"
					alignItems="center">
					
					<Hidden xsDown>
						<Typography className={classes.editDescrip}>
							РЕДАКТИРОВАТЬ
						</Typography>
					</Hidden>
				<Button onClick={onClick}>
					{
						isEditing ? 
							<CancelEditIcon className={classes.crossEdit}/>
							:
							<EditIcon className={classes.penEdit}/>
					}
				</Button>
				</Grid>
			</Grid>
		</Grid>
	)
}
