import React from 'react';
//import backgroundImg from '../../../assets/images/appointment.png'

const ConnectUs = () => {
    return (
        <div className="card w-100 bg-base-100 shadow-xl image-full">
            
            <div className="card-body">
                
                <div className=' flex justify-center items-center'>
                    
                    <form>
                        <div className='form-control'>
                            
                            <input className='w-100 p-6 h-12 rounded-lg	mt-5' type="email" name="email" required placeholder='enter your email' />

                        </div>
                        <div className='form-control'>
                           
                            <input className='w-100 p-6 h-12 rounded-lg	mt-5' type="text" name="text" required placeholder='Subject' />
                        </div>
                        <div className='form-control'>
                           
                            <input className='w-100 p-6 h-32 rounded-lg	mt-5' type="text" name="text" required placeholder='Your massage' />
                        </div >
                        <input className='btn-submit btn mt-5 ' type='submit' value='Submit' />
                    </form>
                </div>

            </div>
        </div>
    );
};

export default ConnectUs;