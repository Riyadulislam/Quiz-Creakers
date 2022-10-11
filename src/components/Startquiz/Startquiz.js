import React from 'react';
import Option from '../Option/Option';
import toast from  'react-hot-toast'

const Startquiz = ({quiz}) => {
     const {question,options,correctAnswer}=quiz
     const showingAnswer=(correctAnswer)=>{
        toast.success(correctAnswer);
     }
  
    return (
        <div class="border border-blue-600 mx-80 m-10 p-10">


            <div class="flex justify-between">
           <h1>{question}</h1>  
           <button class=' hover:bg-violet-600 bg-blue-300' onClick={()=>showingAnswer(correctAnswer)}>correct Answer</button>
           </div>
         
       
           {
            options.map((option,idx)=><Option  key={idx}option={option} correctAnswer={correctAnswer}></Option>)
           }
        </div>
    );
};

export default Startquiz;