import React, { useEffect, useState } from 'react';
import ExoriencedJobCard from './ExoriencedJobCard';

const AllExpriencedJob = () => {
    const [jobs, setJob] = useState([]);

    //  console.log(product);
        useEffect(() => {
            fetch('https://server-psi-puce.vercel.app/expriencedjob')
                .then((response) => response.json())
                .then((data) => setJob(data));
        }, [])
    return (
        <div className='mt-10'>
        <div className=' grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6'>
            {

                jobs.map(job => <ExoriencedJobCard
                    key={job._id}
                    job={job}
                ></ExoriencedJobCard>)
            }
                
        </div>
        </div>
    );
};

export default AllExpriencedJob;