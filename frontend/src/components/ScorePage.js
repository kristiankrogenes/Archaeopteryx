import React, { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';

import Button from '@material-ui/core/Button';

import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import MenuItem from '@material-ui/core/MenuItem';


function ScorePage() {

    const [scoreList, setScoreList] = useState([]);

    const [open, setOpen] = useState(false);

    const [users, setUsers] = useState([]);
    const [courses, setCourses] = useState([]);

    const [score, setScore] = useState(null);
    const [player, setPlayer] = useState(null);
    const [course, setClub] = useState(null);

    async function setAllScores() {
        const scores = await axios.get('http://localhost:8000/api-scores/');
        setScoreList(scores.data);
    }

    async function setAllUsers() {
        let user_data = [];
        const reg_users = await axios.get('http://localhost:8000/api-users/');
        reg_users.data.forEach(user => {
            console.log(user);
            user_data.push({
                value: user.id,
                label: user.firstname
            });
        });
        setUsers(user_data);
    }

    async function setAllCourses() {
        let course_data = [];
        const reg_courses = await axios.get('http://localhost:8000/api-courses/');
        reg_courses.data.forEach(course => {
            console.log(course);
            course_data.push({
                value: course.id,
                label: course.course_name
            });
        });
        setCourses(course_data);
    }

    useEffect( () => {
        setAllScores();
        setAllUsers();
        setAllCourses();
    }, []);
      
    async function addNewScore() {
        handleClose();

        let newScore = {
            "score": score,
            "player": player,
            "course": course
        };

        await axios.post('http://localhost:8000/api-scores/', newScore);

        setAllScores();
    }

    const handleClickOpen = () => {
        setOpen(true);
    };
    
    const handleClose = () => {
        setOpen(false);
    };

    const handlePlayerChange = (event) => {
        setPlayer(event.target.value);
    };
    const handleCourseChange = (event) => {
        setClub(event.target.value);
    };
    const handleScoreChange = (event) => {
        setScore(event.target.value);
    };

    return (
        <div>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>SCORE</th>
                            <th>DATE</th>
                            <th>PLAYER</th>
                            <th>COURSE</th>
                        </tr>
                    </thead>
                    <tbody>
                    {scoreList.map(score => {
                        return(
                        <tr>
                            <th>{score.id}</th>
                            <th>{score.score}</th>
                            <th>{score.date}</th>
                            <th>{score.player}</th>
                            <th>{score.course}</th>

                        </tr>
                        )
                    })}
                    </tbody>
                </table>
            </div>

            <div>
                <Button variant="contained" color="primary" onClick={handleClickOpen}>
                    ADD SCORE
                </Button>
                <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Add new score</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Enter your score here.
                        </DialogContentText>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="score"
                            label="Score"
                            type="score"
                            variant="outlined"
                            fullWidth
                            value={score}
                            onChange={handleScoreChange}
                        />
                        <TextField
                            id="select-user"
                            select
                            label="User"
                            value={player}
                            onChange={handlePlayerChange}
                            helperText="Please select player"
                            fullwidth
                        >
                            {users.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>

                        <TextField
                            id="select-course"
                            select
                            label="Course"
                            value={course}
                            onChange={handleCourseChange}
                            helperText="Please select course"
                            fullwidth
                        >
                            {courses.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} color="primary">
                            Cancel
                        </Button>
                        <Button onClick={addNewScore} color="primary">
                            Add
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        </div>
    );
}
  
export default ScorePage;