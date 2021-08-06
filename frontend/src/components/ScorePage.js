import React, { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';


function ScorePage() {

    const [scoreList, setScoreList] = useState([]);

  async function getScores() {
    const scores = await axios.get('http://localhost:8000/api-scores/');
    setScoreList(scores.data);
  }

  useEffect( () => {
    getScores();
  }, []);
  return (
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
                
                {/* <th><Button onClick={handleDelete} id={animal.id}>DELETE</Button></th> */}
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  );
  }
  
  export default ScorePage;