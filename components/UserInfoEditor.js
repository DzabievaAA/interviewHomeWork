import {
	TextField,
	Grid,
	Button,
	Hidden
} from '@material-ui/core'

import { makeStyles } from '@material-ui/core/styles'

import { useRef, useState } from 'react';

import SaveConfirmDialog from './SaveConfirmDialog';

import useMediaQuery from '@material-ui/core/useMediaQuery';

import NameIcon from '@material-ui/icons/AssignmentInd';
import EmailIcon from '@material-ui/icons/AlternateEmail'
import PhoneIcon from '@material-ui/icons/Phone'

export default function UserInfoEditor ({nameSurname, 
										email, 
										cellphone, 
										setEditing, 
										setCellphone,
										setNameSurname,
										setEmail }) {

const [modalIsOpen, setModalIsOpen] = useState( false );

const refNameSurname = useRef(null);
const refEmail = useRef(null);
const refCellphone = useRef(null);

const [nameIsValid, setNameIsValid] = useState( true );
const [emailIsValid, setEmailIsValid] = useState( true );
const [phoneIsValid, setPhoneIsValid] = useState( true );

const desktop = useMediaQuery('(min-width:600px)');

const useStyles = makeStyles( (theme) => ({
	container: {
		backgroundColor: "white",
		boxShadow: "0 14px 28px rgba(0,0,0,0.15), 0 10px 10px rgba(0,0,0,0.15);",
		marginTop: 10,
		borderRadius: 10,
		marginRight: 10,
		[theme.breakpoints.up('sm')]:{
			marginTop: 24,
		  }
	},
	containerForFields: {
		marginTop: 10,
		[theme.breakpoints.up('sm')]:{
			marginTop: 24,
		  }
	},
	buttonFull: {
		backgroundColor: theme.mainColor,
		width: 212,
		height: 49,
		borderRadius: 36,
		color: "white",
		marginTop: 26,
		marginBottom: 17,
	},
	icon:{
		fill: theme.mainColor,
		width:20,
		height:20,
		[theme.breakpoints.up('sm')]:{
			width: 30,
			height: 30,
		  }
	}
}));
const classes = useStyles()
	return (
		
	<>
	<SaveConfirmDialog isOpen={modalIsOpen}
		onConfirm={ ()=>{
			setModalIsOpen(false)

			const phoneNumber = refCellphone.current.value
			setCellphone( phoneNumber )
			const name = refNameSurname.current.value
			setNameSurname( name )
			const email = refEmail.current.value
			setEmail( email )

			setEditing( false )

			fetch('/api/sendUserData', {
				method:"POST",
				body: JSON.stringify({ name : name, email:email, phoneNumber:phoneNumber}),
			})
		}}
		onCancel={ ()=>{
			setModalIsOpen(false)
			setEditing( false );
		}}
	/>

	<Grid container 
		direction="column"
		alignItems="center"
		className={classes.container}
	>
		<Grid container 
			direction= {desktop? "row": "column"}
			justify="space-evenly"
			alignItems="center"
			className={classes.containerForFields}
			xs={12}
			spacing={2}
		>
			{
				["Фамилия и Имя", null, "E-mail", null, "Номер телефона"].map( label => {
					if( label === null){
						return(
							<Hidden smDown>
								<svg width="1" height="97" viewBox="0 0 1 97" fill="none" xmlns="http://www.w3.org/2000/svg">
									<line x1="0.5" y1="2.18557e-08" x2="0.499996" y2="97" stroke="#CAE7FE"/>
								</svg>
							</Hidden>
						);
					}

					let icon, defaultValue, inputRef, error, onChange;
					switch( label ){
						case 'Фамилия и Имя':
							icon = <NameIcon className={classes.icon}/>
							defaultValue = nameSurname
							inputRef = refNameSurname
							error = !nameIsValid
							onChange = ( event ) => setNameIsValid( validateName(event.target.value))
							break;
						case 'E-mail':
							icon = <EmailIcon className={classes.icon}/>
							defaultValue = email
							inputRef = refEmail
							error = !emailIsValid
							onChange = ( event ) => setEmailIsValid( validateEmail(event.target.value))
							break;
						case 'Номер телефона':
							icon = <PhoneIcon className={classes.icon}/>
							defaultValue = cellphone
							inputRef = refCellphone
							error = !phoneIsValid
							onChange = ( event ) => setPhoneIsValid( validatePhone(event.target.value))
							break;
					}

					return(
					<Grid item xs={10} sm={3}>
						<Grid container alignItems="center" direction="row">
							<Grid item sm={2}>
								<Hidden smDown>
									{icon}
								</Hidden>
							</Grid>
							<Grid item xs={12} sm={10}>
								<TextField className={classes.textField} label={label} 
									variant="outlined"
									defaultValue={defaultValue}
									inputRef={inputRef}
									error={error}
									onChange={onChange}
									/>
								</Grid>
						</Grid>
					</Grid>
					)
				})
			}
		</Grid>
		<Button className={classes.buttonFull} onClick={() => setModalIsOpen(true)}> Сохранить изменения </Button>
	</Grid>
	</>
	)
}


function validateName( name ){
	return /^([a-zA-Zа-яА-Я]+ )([a-zA-Zа-яА-Я]+( [a-zA-Zа-яА-Я]+)?)$/.test( name );
}

function validateEmail( email ){
	return /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test( email )
}

function validatePhone( phoneNumber ){
	let cleanNumber = phoneNumber.replace(/[ \-\(\)]/g,"");
	return /^\+?\d{11}$/.test( cleanNumber )
}