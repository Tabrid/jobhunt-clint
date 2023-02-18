import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import FresherJobCard from './FresherJobCard';

const FresherJob = () => {
    const [jobs, setJob] = useState([]);

    //  console.log(product);
        useEffect(() => {
            fetch('https://server-psi-puce.vercel.app/fresherjob')
                .then((response) => response.json())
                .then((data) => setJob(data));
        }, [])
    return (
        <div className='mt-10'>
        <div className="card-actions justify-center">
      <h1 className='card-title'>Fresher Job Post</h1>
    </div>
        <div className=' grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6'>
            {

                jobs.map(job => <FresherJobCard
                    key={job._id}
                    job={job}
                ></FresherJobCard>)
            }
                
        </div>
        <div className="card-actions justify-center mt-10">
      <Link to="/allfresherjob"><button className="btn">View ALL</button></Link>
    </div>
        </div>
    );
};

export default FresherJob;