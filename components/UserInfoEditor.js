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

const useStyles = makeStyles({
	textField: {
		marginLeft: 23,
		marginRight: 23,
		marginTop: 26,
	},
	containerForFields: {
		boxShadow: "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);",
		marginLeft: 10,
		marginTop: 10,
		borderRadius: 10,
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
		className={classes.containerForFields}
	>
		<TextField className={classes.textField} label="Фамилия и Имя" 
			variant="outlined"
			defaultValue={nameSurname}
			inputRef={refNameSurname}
			/>

		<TextField className={classes.textField} label="E-mail" 
			variant="outlined"
			defaultValue={email}
			inputRef={refEmail}/>

		<TextField className={classes.textField} label="Номер телефона" 
			variant="outlined"
			defaultValue={cellphone}
			inputRef={refCellphone}/>

		<Button onClick={() => setModalIsOpen(true)}> Сохранить изменения </Button>
	</Grid>
	</>
	)
}
