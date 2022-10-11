import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Course from '../Course/Course';
import './Home.css'

const Home = () => {
    const background='https://www.learningrevolution.net/wp-content/uploads/2017/06/online-course-failure-47805990_m.jpg'
     const loaderData =useLoaderData()
     const courses=loaderData.data
    
    
    return (
        <div>
          
          <div
             class="bg_image"
            >
                <h1>This is online Quiz Course.Through This Course You Justify Your Knowledge</h1>
                <div class="flex items-center justify-center mt-20">
               {
                courses.map(course=><Course key={course.id} course={course}></Course>)
              
               }
               </div>
          </div>
         
        </div>
    );
};

export default Home;