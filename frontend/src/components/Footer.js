import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';

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
    }
}));

function Footer() {

    const classes = useStyles();

    return (
        <div className={classes.footercontainer}>
            <AppBar position="static" color="primary">
                <Container>
                    <Toolbar>
                        <Typography variant="body1" color="inherit">
                            © 2021 Archaeopteryx
                        </Typography>
                    </Toolbar>
                </Container>
            </AppBar>
        </div>
    )
}

export default Footer;