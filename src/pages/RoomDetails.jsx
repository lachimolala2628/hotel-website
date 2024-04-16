import React from 'react';
import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import AdultsDropDown from '../components/AdultsDropDown';
import KidsDropDown from '../components/KidsDropdown';
import CheckIn from '../components/CheckIn';
import CheckOut from '../components/CheckOut';
import { RoomContext } from '../context/RoomContext';
import ScrollToTop from '../components/ScrollToTop';
import { FaCheck } from 'react-icons/fa';


const RoomDetails = () => {

    const { rooms } = useContext(RoomContext);
    const { id } = useParams();

    const room = rooms.find(room => {
        return room.id === Number(id);
    });
    console.log(room);

    const { name, description, facilities, imageLg, price } = room

    return (
        <>
            <ScrollToTop />
            <section>
                <div className='bg-room bg-cover bg-center bg-no-repeat h-[700px] relative flex justify-center items-center'>
                    <div className='absolute w-full h-full bg-black/70'></div>
                    <h1 className='text-7xl text-white font-primary text-center z-20'>{name} Details</h1>
                </div>
                <div className="container mx-auto">
                    <div className="flex flex-col lg:flex-row h-full py-24">
                        <div className="h-full lg:w-[60%] px-6">
                            <h2 className='h2'>{name}</h2>
                            <p className='mb-8'>{description}</p>
                            <img className='mb-8' src={imageLg} alt={name} />
                            <div className='mt-12'>
                                <h3 className='h3'>Room Facilities</h3>
                                <p className='mb-12'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident molestias similique earum. Esse ex, eum alias quidem delectus, sed minima, iusto veniam iure magnam assumenda. Lorem ipsum dolor sit amet consectetur adipisicing elit. A, molestias!
                                </p>
                                <div className='grid grid-cols-3 gap-7 mb-12'>
                                    {
                                        facilities.map((item, index) => {
                                            const { name, icon } = item;
                                            return (
                                                <div key={index} className='flex items-center gap-x-3'>
                                                    <div className='text-3xl text-accent'>{icon}</div>
                                                    <div className='text-base text-accent'>{name}</div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="h-full lg:w-[40%]">
                            <div className='py-8 px-6 bg-accent/20 mb-12'>
                                <div className='flex flex-col space-y-4 mb-4'>
                                    <h3 className='h3'>
                                        Your Reservation
                                    </h3>
                                    <div className='h-[70px]'>
                                        <CheckIn />
                                    </div>
                                    <div className='h-[70px]'>
                                        <CheckOut />
                                    </div>
                                    <div className='h-[70px]'>
                                        <AdultsDropDown />
                                    </div>
                                    <div className='h-[70px]'>
                                        <KidsDropDown />
                                    </div>
                                    <button className='btn btn-lg btn-primary w-full py-5'>Book Now for $ {price}</button>
                                </div>
                            </div>
                            <div>
                                <h3 className='h3'>
                                    Hotel Rules
                                </h3>
                                <p className='mb-6'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, suscipit aliquid, animi eligendi beatae pariatur facere optio, repellat eaque ducimus harum. Possimus omnis delectus quas.
                                </p>
                                <ul className='flex flex-col gap-y-4'>
                                    <li className='flex items-center gap-x-4'>
                                        <FaCheck className='text-accent' />
                                        Check-In : 3:00PM - 9:00PM
                                    </li>
                                    <li className='flex items-center gap-x-4'>
                                        <FaCheck className='text-accent' />
                                        Check-Out : 10:30AM
                                    </li>
                                    <li className='flex items-center gap-x-4'>
                                        <FaCheck className='text-accent' />
                                        No Pets
                                    </li>
                                    <li className='flex items-center gap-x-4'>
                                        <FaCheck className='text-accent' />
                                        No Smoking
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default RoomDetails