import React from 'react';

const TopItCard = ({company}) => {
    return (
        <div className="card  bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={company.picture} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
            <h2 className="card-title">{company.name}</h2>
            <p>{company.address}</p>
            <p>{company.website}</p>
            
            
            <button className="btn btn-sm">Small</button>
                
            </div>
        </div>
    );
};

export default TopItCard;


