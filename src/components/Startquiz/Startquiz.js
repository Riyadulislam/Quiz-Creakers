import React from 'react';
import Option from '../Option/Option';

const Startquiz = ({quiz}) => {
     const {question,options,correctAnswer}=quiz
  
    return (
        <div class="border border-blue-600 mx-80 m-10 p-10">



           <h1>{question}</h1> 
       
           {
            options.map((option,idx)=><Option  key={idx}option={option} correctAnswer={correctAnswer}></Option>)
           }
        </div>
    );
};

export default Startquiz;