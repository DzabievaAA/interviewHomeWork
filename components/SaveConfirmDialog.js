import {Grid,
        Button,
        DialogTitle,
        Dialog,
        DialogActions} from '@material-ui/core'

export default function SaveConfirmDialog ( props) {
    return (
<>
    <Grid container
          direction="column">
      <Dialog open={true}
          keepMounted
        >
        <DialogTitle>
            {"Сохранить изменения?"}
        </DialogTitle>

        <DialogActions>
            <Button  color="primary">
              Сохранить
            </Button>
            <Button  color="primary">
              Не сохранять
            </Button>
        </DialogActions>
      </Dialog>
    </Grid>
</>
    )
}