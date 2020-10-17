import {Dialog,
    DialogTitle,
    Typography,
    Button,
    Box,
    Grid,
    Hidden} from '@material-ui/core'

import useMediaQuery from '@material-ui/core/useMediaQuery';
import { makeStyles } from '@material-ui/core/styles'

export default function SuccessfullOperationDialog( {isOpen, close} ){

    const desktop = useMediaQuery('(min-width:600px)');

    React.useEffect(()=>{
        if( isOpen && !desktop){
            setTimeout(()=> close(), 3000)
        }
    }, [desktop, isOpen] )

    const useStyles = makeStyles( (theme) => ({
        dialog: {
            marginTop: "90vh",
            [theme.breakpoints.up('sm')]:{
              marginTop: 0,
              }
        },

        container:{
            [theme.breakpoints.up('sm')]:{
                marginTop: 84,
            }
        },

        button: {
          backgroundColor: theme.mainColor,
          width: 212,
          height: 49,
          borderRadius: 36,
          color: "white",
          marginTop: 26,
          marginBottom: 109,
        },
        
      }));
      const classes = useStyles()

    return (
    <>
        <Dialog open={isOpen}
            maxWidth="sm"
            fullWidth={true}
            fullScreen={desktop? false : true}
            className={classes.dialog}>
            <Box className={classes.container}>
                <Grid container
                    direction="column"
                    alignItems="center"
                >
                    <DialogTitle>
                        Данные успешно сохранены
                    </DialogTitle>

                    <Hidden xsDown>
                        <Button onClick={()=>close()} className={classes.button}>
                            <Typography>
                                Хорошо
                            </Typography>
                        </Button>
                    </Hidden>
                </Grid>
            </Box>
        </Dialog>
    </>
    )

}