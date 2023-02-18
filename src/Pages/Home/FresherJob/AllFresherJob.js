import React, { useEffect, useState } from 'react';

import FresherJobCard from './FresherJobCard';

const AllFresherJob = () => {
    const [jobs, setJob] = useState([]);

    //  console.log(product);
        useEffect(() => {
            fetch('https://server-psi-puce.vercel.app/fresherjob')
                .then((response) => response.json())
                .then((data) => setJob(data));
        }, [])
    return (
        <div>
        <div className="card-actions justify-center">
    </div>
        <div className=' grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6'>
            {

                jobs.map(job => <FresherJobCard
                    key={job._id}
                    job={job}
                ></FresherJobCard>)
            }
                
        </div>
        </div>
    );
};

export default AllFresherJob;