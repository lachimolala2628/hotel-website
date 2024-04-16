import React from 'react';
import { useContext } from 'react';
import { RoomContext } from '../context/RoomContext';
import { Menu } from '@headlessui/react';
import { BsChevronDown } from 'react-icons/bs'

const list = [
    { name: '0 kid' },
    { name: '1 kid' },
    { name: '2 kids' },
    { name: '3 kids' },
    { name: '4 kids' }
]

const KidsDropdown = () => {

    const { kids, setKids } = useContext(RoomContext);

    return (
        <>
            <Menu as='div' className='w-full h-full bg-white relative'>
                <Menu.Button className='w-full h-full flex items-center justify-between px-8'>
                    {kids === '0 kids' ? 'No kids' : kids}
                    <BsChevronDown className='text-accent-hover text-base' />
                </Menu.Button>
                <Menu.Items as='ul' className='bg-white absolute w-full flex flex-col z-40'>
                    {
                        list.map((li, index) => {
                            return <Menu.Item as='li' onClick={() => setKids(li.name)} className='border-b py-2 last-of-type:border-b-0 h-12 hover:bg-accent hover:text-white w-full px-3' key={index}>{li.name}</Menu.Item>
                        })
                    }
                </Menu.Items>
            </Menu>
        </>
    )
}

export default KidsDropdown