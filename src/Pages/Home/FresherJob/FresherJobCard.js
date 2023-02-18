import React from 'react';

const FresherJobCard = ({job}) => {
    return (
        <div className="card mt-10 bg-base-100 shadow-xl">   
        <div className="card-body items-center text-center">
            <h2 className="card-title">{job.positionName}</h2>   
        </div>
        <div className='flex justify-between'>
        <div className="avatar m-4 ">
            <div className="w-11 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={job.logos} alt="Shoes" className="rounded-xl" />
            </div>
         </div>
         <div className='mt-3'>
         <h2 >{job.companyName}</h2>
         <h4>{job.joblocation}</h4>
         </div>
         <div className='mt-8 mr-4'><button className="btn btn-xs">Apply Now</button></div>
        </div>
    </div>
    );
};

export default FresherJobCard;
