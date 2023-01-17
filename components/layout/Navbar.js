import React, { useState } from 'react'
import Link from 'next/link'
import ThemeSwitch from '../ui/ThemeSwitch'
import { IoMenu, IoClose } from 'react-icons/io5'

const Navbar = () => {

    const [showNav, setShowNav] = useState(false)

    const handleClose = () => {
        setShowNav(false)
    }

    return (
        <header className='dark:bg-dark dark:text-white bg-white py-[10px] px-[15px] w-full sticky top-0 z-20 transition-all duration-300 ease-in-out'>
            <div className="container flex_between">
                <h1 className='font-bold text-[23px] sm:text-[25px]'>HennNews</h1>
                <ul className={`dark:bg-dark md:bg-transparent fixed justify-center flex-col left-0 right-0 bottom-0 ${showNav ? 'top-0 opacity-100' : 'top-[-100%] opacity-0 md:opacity-100'} transition-all duration-300 ease-in-out md:transition-none bg-white w-full h-screen md:w-fit md:h-0 md:static md:justify-start md:flex-row flexx`}>
                    <li className='mb-[20px] font-semibold text-[20px] md:mb-0 md:mr-[15px] md:text-[15px]'>
                        <Link href="/" onClick={handleClose}>World News</Link>
                    </li>
                    <li className='mb-[20px] font-semibold text-[20px] md:mb-0 md:mr-[15px] md:text-[15px]'>
                        <Link href="/top-headlines" onClick={handleClose}>Top Headlines</Link>
                    </li>
                </ul>
                <div className='flexx'>
                    <button className="btn py-[5px] px-[20px] text-[13px] mr-[15px]">Subscribe</button>
                    <ThemeSwitch/>
                    {showNav ? (
                        <IoClose className="text-[20px] cursor-pointer block md:hidden z-10" onClick={() => setShowNav(false)}/>
                    ) : (
                        <IoMenu className="text-[20px] cursor-pointer block md:hidden" onClick={() => setShowNav(true)}/>
                    )}
                </div>
            </div>
        </header>
    )
}
export default Navbar