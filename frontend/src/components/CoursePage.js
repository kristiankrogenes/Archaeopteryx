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


function CoursePage() {
    const [courseList, setCourseList] = useState([]);

  async function getCourses() {
    const courses = await axios.get('http://localhost:8000/api-courses/');
    setCourseList(courses.data);
  }

  useEffect( () => {
    getCourses();
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
            <StyledTableCell>COURSENAME</StyledTableCell>
            <StyledTableCell>PAR</StyledTableCell>
            <StyledTableCell>SLOPEVALUE</StyledTableCell>
            <StyledTableCell>COURSEVALUE</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {courseList.map(course=> {
            return(
              <TableRow>
                <StyledTableCell>{course.id}</StyledTableCell>
                <StyledTableCell>{course.course_name}</StyledTableCell>
                <StyledTableCell>{course.par}</StyledTableCell>
                <StyledTableCell>{course.slopevalue}</StyledTableCell>
                <StyledTableCell>{course.coursevalue}</StyledTableCell>
                {/* <th><Button onClick={handleDelete} id={animal.id}>DELETE</Button></th> */}
              </TableRow>
            )
          })}
        </TableBody>
      </Table >
    </TableContainer>
  );

  }
  
  export default CoursePage;