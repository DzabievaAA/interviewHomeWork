import {
	TextField,
	Grid,
	Button
} from '@material-ui/core'

import { useRef } from 'react';

export default function UserInfoEditor ({nameSurname, 
										email, 
										cellphone, 
										setEditing, 
										setCellphone,
										setNameSurname,
										setEmail }) {

const refNameSurname = useRef(null);
const refEmail = useRef(null);
const refCellphone = useRef(null);										
	return (
	<>
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

		<Button onClick={() => {
			setEditing(false)
			setCellphone(refCellphone.current.value)
			setNameSurname(refNameSurname.current.value)
			setEmail(refEmail.current.value)			
		}
			}> Сохранить изменения </Button>
	</Grid>
	</>
	)
}
