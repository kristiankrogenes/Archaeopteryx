import React, { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';

import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

function UserPage() {

  const [userList, setUserList] = useState([]);

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
    },
  });

  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>#</StyledTableCell>
            <StyledTableCell>NAME</StyledTableCell>
            <StyledTableCell>HOMECOURSE</StyledTableCell>
            <StyledTableCell>HCP</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {userList.map(user => {
            return(
              <TableRow>
                <StyledTableCell>{user.id}</StyledTableCell>
                <StyledTableCell>{user.firstname + " " + user.surname}</StyledTableCell>
                <StyledTableCell>{user.homecourse}</StyledTableCell>
                <StyledTableCell>{user.hcp}</StyledTableCell>
                {/* <th><Button onClick={handleDelete} id={animal.id}>DELETE</Button></th> */}
              </TableRow>
            )
          })}
        </TableBody>
      </Table >
    </TableContainer>
  );
}

export default UserPage;


