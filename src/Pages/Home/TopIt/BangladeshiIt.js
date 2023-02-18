import React, { useEffect, useState } from 'react';
import BangladeshiItCard from './BangladeshiItCard';

const BangladeshiIt = () => {

    const [companys, setCompany] = useState([]);

    //  console.log(product);
        useEffect(() => {
            fetch('https://server-psi-puce.vercel.app/topit')
                .then((response) => response.json())
                .then((data) => setCompany(data));
        }, [])
    return (
        <div className='mt-10'>
             <div className="card-actions justify-center">
      <h1 className='card-title'> Top Bangladeshi IT Company</h1>
    </div>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6'>
            {

                companys.slice(3,6).map(company => <BangladeshiItCard
                    key={company._id}
                    company={company}
                ></BangladeshiItCard>)
            }

        </div>
        </div>
    );
};

export default BangladeshiIt;