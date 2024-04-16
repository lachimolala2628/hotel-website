import React from 'react';
import Rooms from '../components/Rooms';
import BookForm from '../components/BookForm';
import HeroSlider from '../components/HeroSlider';

const Home = () => {
    return (
        <>
            <HeroSlider />
            <div className="container mx-auto relative">
                <div className='mt-4 shadow-xl absolute left-0 right-0 z-30 -top-12'>
                    <BookForm />
                </div>
            </div>
            <Rooms />
        </>
    )
}

export default Home