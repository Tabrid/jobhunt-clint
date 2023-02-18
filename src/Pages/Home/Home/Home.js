import React, { useEffect } from 'react';
import FresherJob from '../FresherJob/FresherJob';
import Toggle from '../Toggle/Toggle';
import AOS from 'aos';

import 'aos/dist/aos.css'
import TopIt from '../TopIt/TopIt';
import ExpriencedJob from '../ExpriencedJob/ExpriencedJob';
import BangladeshiIt from '../TopIt/BangladeshiIt';

const Home = () => {
 useEffect( ()=>{
        AOS.init({duration:2000});
 },[]);

    return (
        <div>
            <Toggle></Toggle>
            <FresherJob data-aos="fade-zoom-in" ></FresherJob>
            <ExpriencedJob></ExpriencedJob>
            <TopIt data-aos="flip-left"></TopIt>
            <BangladeshiIt></BangladeshiIt>

        </div>
    );
};

export default Home;