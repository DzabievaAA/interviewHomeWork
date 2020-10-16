import {Grid,
        Button,
        DialogTitle,
        Dialog
      } from '@material-ui/core'

import { makeStyles } from '@material-ui/core/styles'

import CloseIcon from '@material-ui/icons/Close';

export default function SaveConfirmDialog ( { isOpen, onConfirm, onCancel } ) {
 
const useStyles = makeStyles({
  buttonFull: {
    backgroundColor: "#01BDA7",
    width: 212,
    height: 49,
    borderRadius: 36,
    color: "white",
    marginTop: 26,
  },
  buttonEmpty: {
    width: 212,
    height: 49,
    borderRadius: 36,
    color: "#01BDA7",
    marginTop: 28,
    marginBottom: 17,
    border: "1px solid #00BFA5",
    boxSizing: "border-box",
  },
  closeIcon: {
    marginLeft: "auto",
    marginTop: 25,
    marginRight: 25
  },
  dialog: {
    marginTop: 142
  }
});
const classes = useStyles()
 
 return (
<>
  <Dialog open={isOpen}
    fullScreen={true}
    className={classes.dialog}
  >
    <CloseIcon onClick={()=>onCancel()} 
        className={classes.closeIcon}/>

    <Grid container
      direction="column"
      alignItems="center"
    >
      <DialogTitle>
        {"Сохранить изменения?"}
      </DialogTitle>

      <Button className={classes.buttonFull} onClick={()=>{ onConfirm() }}  color="primary">
        Сохранить
      </Button>

      <Button className={classes.buttonEmpty} onClick={() => onCancel()} color="primary">
        Не сохранять
      </Button>
    </Grid>
  </Dialog>
</>
    )
}