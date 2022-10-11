import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Course = ({course}) => {
  
    const {id,name,logo}=course
    return (
        <div class="border border-gray-900 m-5 p-7 bg-gray-600">
            <img src={logo} alt="" />
            <div class="flex justify-between mt-2">
            <h1>{name}</h1>
            <button class="border bg-zinc-900 p-1">
                <Link to={`/course/${id}`}>Start Prectise</Link>
            </button>
            </div>
           
       
        </div>
    );
};

export default Course;