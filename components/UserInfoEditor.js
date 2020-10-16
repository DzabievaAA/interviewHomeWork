import {
	TextField,
	Grid,
	Button
} from '@material-ui/core'

export default function UserInfoEditor ({nameSurname, email, cellphone }) {
	return (
	<>
	<Grid container 
		direction="column"
	>
		<TextField label="Фамилия и Имя" 
			variant="outlined"
			defaultValue={nameSurname}/>

		<TextField label="E-mail" 
			variant="outlined"
			defaultValue={email}/>

		<TextField label="Номер телефона" 
			variant="outlined"
			defaultValue={cellphone}/>

		<Button> Сохранить изменения </Button>
	</Grid>
	</>
	)
}
