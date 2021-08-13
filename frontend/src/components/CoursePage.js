import React, { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';

import Button from '@material-ui/core/Button';

import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import MenuItem from '@material-ui/core/MenuItem';

import '../static/css/main.css';


function CoursePage() {
    const [courseList, setCourseList] = useState([]);

    const [open, setOpen] = useState(false);

    const [course_name, setCourseName] = useState(null)
    const [par, setPar] = useState(null)
    const [slopevalue, setSlopevalue] = useState(null)
    const [coursevalue, setCoursevalue] = useState(null)

    async function setAllCourses() {
        const courses = await axios.get('http://localhost:8000/api-courses/');
        setCourseList(courses.data);
    }

    useEffect( () => {
        setAllCourses();
    }, []);

    async function addNewCourse() {
        handleClose();

        let newCourse = {
            "course_name": course_name,
            "par": par,
            "slopevalue": slopevalue, 
            "coursevalue": coursevalue
        };

        await axios.post('http://localhost:8000/api-courses/', newCourse);

        setAllCourses();
    }

    const handleClickOpen = () => {
        setOpen(true);
    };
    
    const handleClose = () => {
        setOpen(false);
    };

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
            minWidth: 1000,
        }, 
        tablecontainer: {
            width: 'fit-content',
            padding: '30px'
        }
    });

    const classes = useStyles();

    return (
        <div className="page-container">
            <div className={classes.tablecontainer}>
                <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="customized table">
                        <TableHead>
                            <TableRow>
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
                                        <StyledTableCell>{course.course_name}</StyledTableCell>
                                        <StyledTableCell>{course.par}</StyledTableCell>
                                        <StyledTableCell>{course.slopevalue}</StyledTableCell>
                                        <StyledTableCell>{course.coursevalue}</StyledTableCell>
                                    </TableRow>
                                )
                            })}
                        </TableBody>
                    </Table >
                </TableContainer>
            </div>
            <div>
                <Button variant="contained" color="primary" onClick={handleClickOpen}>
                    Add new course
                </Button>

                <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Add course</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            To add a new course, please type in the fields below.
                        </DialogContentText>

                        <TextField 
                            onChange={event => setCourseName(event.target.value)}
                            autoFocus
                            margin="dense"
                            id="course_name"
                            label="Course"
                            type="text"
                            fullWidth
                        />

                        <TextField 
                            onChange={event => setPar(event.target.value)}
                            margin="dense"
                            id="par"
                            label="Par"
                            type="number"
                            fullWidth
                        />

                        <TextField 
                            onChange={event => setSlopevalue(event.target.value)} 
                            margin="dense"
                            id="slopevalue"
                            label="Slopevalue"
                            type="number"
                            fullWidth
                        />

                        <TextField 
                        onChange={event => setCoursevalue(event.target.value)}
                            margin="dense"
                            id="coursevalue"
                            label="Coursevalue"
                            type="number"
                            fullWidth
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} color="primary">
                            Cancel
                        </Button>
                        <Button onClick={addNewCourse} color="primary">
                            Add course
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        </div>

    );
}
  
export default CoursePage;