import React from 'react';
import Banner from '../components/Banner/Banner';
import Books from '../components/Books/Books';

const Home = () => {
    return (
        <div className='w-[95%] mx-auto transition-all duration-1000'>
                <Banner></Banner>
                <Books></Books>
        </div>
    );
};

export default Home;