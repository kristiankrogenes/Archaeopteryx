import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Link from '@material-ui/core/Link';
import { grey } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    footercontainer: {
        position: 'absolute',
        left: 0,
        bottom: 0,
        width: '100%',
        minHeight: '5vh',
        color: 'white'
    }, 
    footer: {
        backgroundColor: theme.palette.primary.main,
        padding: theme.spacing(6),
    },
}));

function Footer() {

    const classes = useStyles();

    return (
        // <div className={classes.footercontainer}>
        //     <AppBar position="static" color="primary">
        //         <Container>
        //             <Toolbar>
        //                 <Typography variant="body1" color="inherit">
        //                     © 2021 Archaeopteryx
        //                 </Typography>
        //             </Toolbar>
        //         </Container>
        //     </AppBar> 
        // </div>
        <footer className={classes.footer}>
            <Typography variant="h6" align="center" gutterBottom>
                Archaeopteryx
            </Typography>
            <Typography variant="subtitle1" align="center" color="initial   " component="p">
                Kristian Walseth Krøgenes | Jens Hovem Leonhardsen
            </Typography>
            {/* <Copyright /> */}
            <Typography variant="body2" color="initial" align="center">
                {'Copyright © '}
                <Link color="inherit" href="https://material-ui.com/">
                    Archaeopteryx
                </Link>{' '}
                {new Date().getFullYear()}
                {'.'}
            </Typography>
        </footer>
    )
}

export default Footer;