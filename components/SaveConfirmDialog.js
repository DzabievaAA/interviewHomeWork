import {Grid,
        Button,
        DialogTitle,
        Dialog,
        DialogActions} from '@material-ui/core'

export default function SaveConfirmDialog ( { isOpen, onConfirm, onCancel } ) {
    return (
<>
    <Grid container
          direction="column">
      <Dialog open={isOpen}
          keepMounted
        >
        <DialogTitle>
            {"Сохранить изменения?"}
        </DialogTitle>

        <DialogActions>
            <Button onClick={()=>{ onConfirm() }}  color="primary">
              Сохранить
            </Button>
            <Button onClick={() => onCancel()} color="primary">
              Не сохранять
            </Button>
        </DialogActions>
      </Dialog>
    </Grid>
</>
    )
}