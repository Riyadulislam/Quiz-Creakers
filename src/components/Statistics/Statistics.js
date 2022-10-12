import { useLoaderData } from 'react-router-dom';
import React, { PureComponent } from 'react';
import { ResponsiveContainer, PieChart, Pie, Legend } from 'recharts';



const Statistics = () => {
   
     const loaders=useLoaderData()
     
     const data=loaders.data
   
    
    return (
        <div>
                 <div style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer>
          <PieChart>
            <Pie dataKey="total" data={data} fill="#8884d8" label />
          </PieChart>
        </ResponsiveContainer>
      </div>
        
        </div>
    );
};

export default Statistics;