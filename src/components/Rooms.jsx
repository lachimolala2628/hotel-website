import React, { useContext } from 'react';
import { RoomContext } from '../context/RoomContext';
import Room from '../components/Room'
import { SpinnerDotted } from 'spinners-react'

const Rooms = () => {

    const { rooms, loading } = useContext(RoomContext);

    return (
        <>
            <section className='py-24'>
            {
                loading && (
                    <div className='h-screen fixed bottom-0 top-0 bg-black/90 w-full z-50 flex justify-center items-center'>
                        <SpinnerDotted color='white' />
                    </div>
                )
            }
                <div className="conatiner mx-auto lg:px-24 smi:mt-[120px] sma:mt-[120px]">
                    <div className='text-center'>
                        <div className='font-tertiary uppercase text-[16px] tracking-[6px]'>
                            Hotel & Spa Adina
                        </div>
                        <h2 className='text-primary text-[45px] mb-4'>Room & Suites</h2>
                    </div>
                    <div className='grid grid-cols-1 max-w-sm mx-auto gap-[30px] lg:grid-cols-3 lg:max-w-none lg:mx-0'>
                        {
                            rooms.map((room) => {
                                return <Room room={room} key={room.id} />
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default Rooms