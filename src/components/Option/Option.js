import React from 'react';

const Option = ({option}) => {
    return (
        <div class="border border-blue-600 m-4 p-4">
            <li>{option}</li>
        </div>
    );
};

export default Option;