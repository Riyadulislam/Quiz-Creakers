import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Topic = ({data}) => {
    const {id,name,logo}=data
    return (
        <div>
             <div class="border border-gray-900 m-5 p-7 bg-gray-900">
            <img src={logo} alt="" />
            <div class="flex justify-between mt-2">
            <h1 class="text-gray-100">{name}</h1>
            <button class="border p-1 text-gray-100">
                <Link to={`/course/${id}`}>Start Prectise   <FontAwesomeIcon icon={faArrowRight} /></Link>
            </button>
            </div>
           
       
        </div>
            
            
        </div>
    );
};

export default Topic;