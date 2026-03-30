import Link from 'next/link'
import React from 'react'
import ButtonUi from './ui/ButtonUi'

const Navbar = () => {
    return (
        <nav className="flex items-center justify-between py-4 px-20 bg-transparent relative z-50">

            <div className="logo">
                <img src="../assets/logo.png" alt="DMR SUSHI" className='w-12' />
            </div>

            <ul className='flex gap-7 items-center justify-center font-heading text-lg text-white'>
                {['Menu', 'Fine Dining', 'About', 'Contact'].map((item) => (
                    <li key={item}>
                        <Link href='/' className='relative group py-1'>
                            <span className='group-hover:text-(--color-primary) transition-colors duration-300 uppercase'>{item}</span>
                            <span className='absolute bottom-0 left-0 h-[1.5px] w-0 bg-(--color-primary) group-hover:w-full transition-all duration-300 ease-in-out origin-left'></span>
                        </Link>
                    </li>
                ))}
            </ul>
            <ButtonUi text={'Reservation'} />
        </nav>
    )
}

export default Navbar
