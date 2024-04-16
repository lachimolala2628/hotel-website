import React from 'react';
import { useContext } from 'react';
import { RoomContext } from '../context/RoomContext';
import { Menu } from '@headlessui/react';
import { BsChevronDown } from 'react-icons/bs'

const list = [
    { name: '1 Adult' },
    { name: '2 Adults' },
    { name: '3 Adults' },
    { name: '4 Adults' },
    { name: '5 Adults' }
]

const AdultsDropDown = () => {

    const { adults, setAdults } = useContext(RoomContext);

    return (
        <>
            <Menu as='div' className='w-full h-full bg-white relative'>
                <Menu.Button className='w-full h-full flex items-center justify-between px-8'>
                    {adults}
                    <BsChevronDown className='text-accent-hover text-base' />
                </Menu.Button>
                <Menu.Items
                    as='ul'
                    className='bg-white absolute w-full flex flex-col z-40'
                >
                    {
                        list.map((li, index) => {
                            return <Menu.Item as='li' onClick={() => setAdults(li.name)} className='border-b py-2 last-of-type:border-b-0 h-12 hover:bg-accent hover:text-white w-full px-3' key={index}>{li.name}</Menu.Item>
                        })
                    }
                </Menu.Items>
            </Menu>
        </>
    )
}

export default AdultsDropDown