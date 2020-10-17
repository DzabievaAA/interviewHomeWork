import {Grid,
        Button,
        DialogTitle,
        Dialog
      } from '@material-ui/core'

import { makeStyles } from '@material-ui/core/styles'

import CloseIcon from '@material-ui/icons/Close';
import useMediaQuery from '@material-ui/core/useMediaQuery';

export default function SaveConfirmDialog ( { isOpen, onConfirm, onCancel } ) {
 
  const desktop = useMediaQuery('(min-width:600px)'); 

  const useStyles = makeStyles( (theme) => ({
    
    buttonFull: {
      backgroundColor: theme.mainColor,
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
      color: theme.mainColor,
      marginTop: 28,
      marginBottom: 17,
      border: `1px solid ${theme.mainColor}`,
      boxSizing: "border-box",
    },
    closeIcon: {
      marginLeft: "auto",
      marginTop: 25,
      marginRight: 25
    },
    dialog: {
      marginTop: 142,
      [theme.breakpoints.up('sm')]:{
        marginTop: 0,
        }
    }
  }));
  const classes = useStyles()
  
  return (
  <>
    <Dialog open={isOpen}
      fullScreen={desktop? false : true}
      maxWidth="sm"
      fullWidth={true}
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