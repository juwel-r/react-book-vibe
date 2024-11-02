import React from 'react';
import bannerBook from '../../assets/bannerBook.png'

const Banner = () => {
    return (
        <div className='bg-gray-200 grid md:grid-cols-[3fr_2fr] place-items-center p-8 gap-8 md:gap-4 md:p-16 rounded-3xl'>
            
            <div className='justify-self-center text-center md:text-left md:order-1 order-2'>
                <h1 className='lg:text-5xl md:text-4xl text-3xl  mb-6 md:mb-12 font-bold'>Books to freshen up your bookshelf</h1>
                <button className='btn bg-primary text-white text-xl font-bold px-6 py-4 h-full border-2 border-transparent hover:bg-transparent hover:text-primary transition-all duration-500 hover:border-primary'>View The List</button>
            </div>
            <div className='order-1 md:order-2'> 
                <img src={bannerBook} alt="" />
            </div>
        </div>
    );
};

export default Banner;