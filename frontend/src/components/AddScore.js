import React, { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';

function addScore() {

    const [scoreList, setScoreList] = useState([]);

    async function getScores() {
        const scores = await axios.get('http://localhost:8000/api-scores/');
        setScoreList(scores.data);
    }

    

}