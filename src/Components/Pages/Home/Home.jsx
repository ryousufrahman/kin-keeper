import React from 'react';
import Banner from './Home-componensts/Banner';
import Count from './Home-componensts/Count';

const Home = () => {
    return (
        <div className='max-w-[1200px] mx-auto'>
            <Banner></Banner>
            <Count></Count>
        </div>
    );
};

export default Home;