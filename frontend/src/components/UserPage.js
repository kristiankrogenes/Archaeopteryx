import React, { useEffect } from 'react';
import { useState}  from 'react';
import axios from 'axios';

import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';



function UserPage() {

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const [userList, setUserList] = useState([]);
    const [firstname, setFirstName] = useState('')
    const [surname, setSurName] = useState('')
    const [hcp, setHcp] = useState('')
    const [homecourse, setHomeCourse] = useState('')

    async function addUser(){
        const newUser = {
            firstname: firstname,
            surname: surname,
            homecourse: homecourse,
            hcp: hcp
        };
        await axios.post('http://localhost:8000/api-users/', newUser);
        setOpen(false);
        getUsers();
    }

    async function getUsers() {
        const users = await axios.get('http://localhost:8000/api-users/');
        setUserList(users.data);
    }

    useEffect( () => {
        getUsers();
    }, []);

    const StyledTableCell = withStyles((theme) => ({
        head: {
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white,
        },
        body: {
            fontSize: 14,
        },
    }))(TableCell);
  
    const StyledTableRow = withStyles((theme) => ({
        root: {
            '&:nth-of-type(odd)': {
                backgroundColor: theme.palette.action.hover,
            },
        },
    }))(TableRow);

    const useStyles = makeStyles({
        table: {
            minWidth: 700,
        }
    });

    const classes = useStyles();
    
    const tableStyle = {
        width: 'fit-content',
        margin: '40px'
    }

    const container = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center', 
    }

    return (
        <div style={container}>
            <div style={tableStyle}>
                <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>NAME</StyledTableCell>
                                <StyledTableCell>HOMECOURSE</StyledTableCell>
                                <StyledTableCell>HCP</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {userList.map(user => {
                                return(
                                <TableRow>
                                    <StyledTableCell>{user.firstname + " " + user.surname}</StyledTableCell>
                                    <StyledTableCell>{user.homecourse}</StyledTableCell>
                                    <StyledTableCell>{user.hcp}</StyledTableCell>
                                </TableRow>
                                )
                            })}
                        </TableBody>
                    </Table >
                </TableContainer>
            </div>

            <div>
                <Button variant="contained" color="primary" onClick={handleClickOpen}>
                    Add new user
                </Button>

                <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Add user</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            To add a new user, please type in the fields below.
                        </DialogContentText>

                        <TextField onChange={event => setFirstName(event.target.value)}
                            autoFocus
                            margin="dense"
                            id="first_name"
                            label="Firstname"
                            type="text"
                            fullWidth
                        />

                        <TextField onChange={event => setSurName(event.target.value)}
                            margin="dense"
                            id="sur_name"
                            label="Surname"
                            type="text"
                            fullWidth
                        />

                        <TextField onChange={event => setHcp(event.target.value)} type="double"
                            margin="dense"
                            id="hcp"
                            label="Hcp"
                            type="double"
                            fullWidth
                        />

                        <TextField onChange={event => setHomeCourse(event.target.value)} type="text"
                            margin="dense"
                            id="homecourse"
                            label="Homecourse"
                            type="text"
                            fullWidth
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} color="primary">
                            Cancel
                        </Button>
                        <Button onClick={addUser} color="primary">
                            Add user
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        </div>
    );
}

export default UserPage;


