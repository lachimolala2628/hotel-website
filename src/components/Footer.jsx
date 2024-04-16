import React from 'react'
import Logo from '../assets/img/logo-white.svg'

const Footer = () => {
    return (
        <>
            <footer className='bg-primary py-12 flex justify-between items-center'>
                <div className='container mx-auto'>
                    <a href="/">
                        <img src={Logo} />
                    </a>
                </div>
                <p className='text-white pr-6'>Copyright &copy; 2024. All rights reserved .</p>
            </footer>
        </>
    )
}

export default Footer