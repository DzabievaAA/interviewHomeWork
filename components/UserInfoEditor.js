import {
	TextField,
	Grid,
	Button
} from '@material-ui/core'

import { makeStyles } from '@material-ui/core/styles'

import { useRef, useState } from 'react';

import SaveConfirmDialog from './SaveConfirmDialog';

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

const useStyles = makeStyles({
	textField: {
		marginLeft: 23,
		marginRight: 23,
		marginTop: 26,
	},
	containerForFields: {
		boxShadow: "0 14px 28px rgba(0,0,0,0.15), 0 10px 10px rgba(0,0,0,0.15);",
		marginLeft: 10,
		marginTop: 10,
		borderRadius: 10,
		marginRight: 10,
	},
	buttonFull: {
		backgroundColor: "#01BDA7",
		width: 212,
		height: 49,
		borderRadius: 36,
		color: "white",
		marginTop: 26,
		marginBottom: 17,
	}
});
const classes = useStyles()
	return (
		
	<>
	<SaveConfirmDialog isOpen={modalIsOpen}
		onConfirm={ ()=>{
			setModalIsOpen(false)
			setCellphone(refCellphone.current.value)
			setNameSurname( refNameSurname.current.value)
			setEmail( refEmail.current.value )
			setEditing( false )
		}}
		onCancel={ ()=>{
			setModalIsOpen(false)
			setEditing( false );
		}}
	/>
	<Grid container 
		direction="column"
		alignItems="center"
		className={classes.containerForFields}
	>
		<TextField className={classes.textField} label="Фамилия и Имя" 
			variant="outlined"
			defaultValue={nameSurname}
			inputRef={refNameSurname}
			error={!nameIsValid}
			onChange={( event ) => setNameIsValid( validateName(event.target.value))}
			/>

		<TextField className={classes.textField} label="E-mail" 
			variant="outlined"
			defaultValue={email}
			inputRef={refEmail}
			error={!emailIsValid}
			onChange={( event ) => setEmailIsValid( validateEmail(event.target.value))}
			/>
			

		<TextField className={classes.textField} label="Номер телефона" 
			variant="outlined"
			defaultValue={cellphone}
			inputRef={refCellphone}
			error={!phoneIsValid}
			onChange={( event ) => setPhoneIsValid( validatePhone(event.target.value))}
			/>

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
	debugger
	return /^\+?\d{11}$/.test( cleanNumber )
}