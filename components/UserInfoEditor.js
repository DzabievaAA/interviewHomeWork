import {
	TextField,
	Grid,
	Button
} from '@material-ui/core'

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
	>
		<TextField label="Фамилия и Имя" 
			variant="outlined"
			defaultValue={nameSurname}
			inputRef={refNameSurname}
			/>

		<TextField label="E-mail" 
			variant="outlined"
			defaultValue={email}
			inputRef={refEmail}/>

		<TextField label="Номер телефона" 
			variant="outlined"
			defaultValue={cellphone}
			inputRef={refCellphone}/>

		<Button onClick={() => setModalIsOpen(true)}> Сохранить изменения </Button>
	</Grid>
	</>
	)
}
