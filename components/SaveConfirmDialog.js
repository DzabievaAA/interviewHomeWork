import {Grid,
        Button,
        DialogTitle,
        Dialog,
        DialogActions} from '@material-ui/core'

import { makeStyles } from '@material-ui/core/styles'        


export default function SaveConfirmDialog ( { isOpen, onConfirm, onCancel } ) {
 
const useStyles = makeStyles({
  buttonFull: {
    backgroundColor: "#01BDA7",
    width: 212,
    height: 49,
    borderRadius: 36,
    color: "white",
    marginTop: 26,
    marginBottom: 17,
  },
  buttonEmpty: {
    width: 212,
    height: 49,
    borderRadius: 36,
    color: "#01BDA7",
    marginTop: 26,
    marginBottom: 17,
    border: "1px solid #00BFA5",
    boxSizing: "border-box",
    bordeRadius: 41,
  },
});
const classes = useStyles()
 
 return (
<>
    <Grid container
          direction="column"
          >
      <Dialog open={isOpen}
          keepMounted
        >
        <DialogTitle>
            {"Сохранить изменения?"}
        </DialogTitle>

        <DialogActions>
            <Button className={classes.buttonFull} onClick={()=>{ onConfirm() }}  color="primary">
              Сохранить
            </Button>
            <Button className={classes.buttonEmpty} onClick={() => onCancel()} color="primary">
              Не сохранять
            </Button>
        </DialogActions>
      </Dialog>
    </Grid>
</>
    )
}