'use client'
import { useDrawer } from '@/app/context/DrawerContext'
import { PanelTopClose } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Drawer = () => {

    const { toggleDrawer, isDrawerOpen } = useDrawer()

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Menu", href: "/menu" },
        { name: "Reservation", href: "/reservation" },
        { name: "About", href: "/about" },
        { name: "Contact", href: "/contact" },
    ]

    return (

        <>
            <main className='w-full flex'>

                {isDrawerOpen && <section
                    onClick={toggleDrawer}
                    className={`bg-black/40 backdrop-blur-md h-screen w-full fixed top-0 z-100`}>
                </section>
                }

                <section className={`min-h-70 h-fit w-full fixed top-0 bg-black/40 backdrop-blur-md z-100 transition-all ease-linear ${isDrawerOpen ? 'translate-y-0' : '-translate-y-full'}`}>

                    <div className='flex items-center justify-between py-5 px-7'>

                        <div className="logo">
                            <img src="../assets/logo.png" alt="DMR SUSHI" className='w-12' />
                        </div>

                        <span onClick={toggleDrawer} className='text-primary'>
                            <PanelTopClose size={30} />
                        </span>

                    </div>

                    <ul className='flex flex-col gap-2 items-center justify-center font-heading text-white py-7'>
                        {navLinks.map((item) => (
                            <li key={item.name}>
                                <Link onClick={toggleDrawer} href={item.href} className='relative group py-1'>
                                    <span className='group-hover:text-primary transition-colors duration-300 uppercase tracking-wider'>{item.name}</span>
                                    <span className='absolute bottom-0 left-0 h-[1.5px] w-0 bg-primary group-hover:w-full transition-all duration-300 ease-in-out origin-left'></span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </section>
            </main>
        </>
    )
}

export default Drawer
