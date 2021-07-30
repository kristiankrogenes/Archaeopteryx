import React, { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';

import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

import Button from '@material-ui/core/Button';


function ScorePage() {

    const [scoreList, setScoreList] = useState([]);
    const [user, setuser] = useState(getUser());
    const [course, setCourse] = useState(getCourse());

    async function getScores() {
        const scores = await axios.get('http://localhost:8000/api-scores/');
        setScoreList(scores.data);
    }

    async function getUser() {
        const users = await axios.get('http://localhost:8000/api-users/');
        console.log(user.data[0]);
        console.log(typeof user.data[0]);
        return users.data[0];
    }

    async function getCourse() {
        const users = await axios.get('http://localhost:8000/api-courses/');
        console.log(course.data[0]);
        console.log(typeof course.data[0]);
        return course.data[0];
    }

    useEffect( () => {
        getScores();
    }, []);

    let newScore = {
        "score": 100,
        "date": null, 
        "player": user,
        "course": course
      };

    async function addNewScore() {
        console.log("NEW SCORE ADDED");
        await axios.post('http://localhost:8000/api-scores/', newScore);
    }

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
                <Button variant="contained" color="primary" onClick={addNewScore}>ADD SCORE</Button>
            </div> 
        </div>
    );
}
  
export default ScorePage;