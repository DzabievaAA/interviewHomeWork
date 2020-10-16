import {
	TextField,
	Grid,
	Button
} from '@material-ui/core'

export default function UserInfoEditor (props) {
	return (
	<>
	<Grid container 
		direction="column"
	>
		<TextField label="Фамилия и Имя" 
			variant="outlined"
			defaultValue="Укажите Вашу Фамилию и Имя"/>

		<TextField label="E-mail" 
			variant="outlined"
			defaultValue="Ivanova@mail.ru"/>

		<TextField label="Номер телефона" 
			variant="outlined"
			defaultValue="Укажите Ваш номер телефона"/>

		<Button> Сохранить изменения </Button>
	</Grid>
	</>
	)
}
