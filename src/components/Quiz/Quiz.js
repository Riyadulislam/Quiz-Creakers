import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Startquiz from '../Startquiz/Startquiz';

const Quiz = () => {
    const loader=useLoaderData()
   
    const quizs=loader.data.questions
       
    
    return (
        <div>
            <h1 class="text-gray-900 font-bold mt-12">Quiz Of   {loader.data.name}</h1>
            <div>
               
            {
                quizs.map(quiz=><Startquiz  key={quiz.id}quiz={quiz}></Startquiz>)
                
            }
          
            </div>
        </div>
    );
};

export default Quiz;