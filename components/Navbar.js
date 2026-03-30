'use client'
import Link from 'next/link'
import React from 'react'
import ButtonUi from './ui/ButtonUi'
import { Menu } from 'lucide-react'
import { useDrawer } from '@/app/context/DrawerContext'

const Navbar = () => {

    const { toggleDrawer } = useDrawer()

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Menu", href: "/menu" },
        { name: "About", href: "/about" },
        { name: "Contact", href: "/contact" },
    ]
    return (
        <nav className="flex items-center justify-between py-4 px-10 lg:px-20 bg-transparent relative z-50">

            <div className="logo">
                <img src="../assets/logo.png" alt="DMR SUSHI" className='w-12' />
            </div>

            <ul className='flex gap-7 items-center justify-center font-heading text-lg text-white max-lg:hidden'>
                {navLinks.map((item) => (
                    <li key={item.name}>
                        <Link href={item.href} className='relative group py-1'>
                            <span className='group-hover:text-primary transition-colors duration-300 uppercase'>{item.name}</span>
                            <span className='absolute bottom-0 left-0 h-[1.5px] w-0 bg-primary group-hover:w-full transition-all duration-300 ease-in-out origin-left'></span>
                        </Link>
                    </li>
                ))}
            </ul>

            <span className='max-lg:hidden'>
                <ButtonUi text={'Reservation'} />
            </span>

            <button onClick={toggleDrawer} className='lg:hidden text-primary '>
                <Menu size={30} />
            </button>
        </nav>
    )
}

export default Navbar
