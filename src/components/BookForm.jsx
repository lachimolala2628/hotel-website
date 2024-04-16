import React, { useContext } from 'react';
import CheckIn from '../components/CheckIn';
import AdultsDropDown from '../components/AdultsDropDown';
import KidsDropdown from '../components/KidsDropdown';
import CheckOut from '../components/CheckOut';
import { RoomContext } from '../context/RoomContext';

const BookForm = () => {

    const { handleClick } = useContext(RoomContext);

    return (
        <>
            <form className='w-full h-[200px] md:h-[70px]'>
                <div className='flex w-full h-full flex-col lg:flex-row'>
                    <div className='flex-1 border-r'>
                        <CheckIn />
                    </div>
                    <div className='flex-1 border-r'>
                        <CheckOut />
                    </div>
                    <div className='flex-1 border-r'>
                        <AdultsDropDown />
                    </div>
                    <div className='flex-1 border-r'>
                        <KidsDropdown />
                    </div>
                    <button onClick={(e) => handleClick(e)} type='submit' className='btn btn-primary'>Check now</button>
                </div>
            </form>
        </>
    )
}

export default BookForm