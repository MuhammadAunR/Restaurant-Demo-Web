'use client'
import Link from 'next/link'
import React from 'react'
import ButtonUi from './ui/ButtonUi'
import { Menu, ShoppingBag } from 'lucide-react'
import { useDrawer } from '@/app/context/DrawerContext'
import { usePathname, useRouter } from 'next/navigation'
import { useCart } from '@/app/context/CartContext'


const Navbar = () => {

    const { toggleDrawer } = useDrawer()
    const { toggleCart, cartCount } = useCart()

    const router = useRouter()
    const pathname = usePathname()
    const hiddenRoutes = ['/reservation']

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Menu", href: "/menu" },
        { name: "About", href: "/about" },
        { name: "Contact", href: "/contact" },
    ]

    const GoToReservationPage = () => {
        router.push('/reservation')
    }



    if (pathname.includes(hiddenRoutes)) return null

    return (
        <nav className="flex items-center justify-between py-4 px-7 lg:px-20 bg-transparent backdrop-blur-md fixed w-full max-w-384 z-100">

            <Link href={'/'} className="logo">
                <img src="../assets/logo.png" alt="DMR SUSHI" className='w-12' />
            </Link>

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

            <div className='max-lg:hidden flex items-center gap-5'>

                <span onClick={GoToReservationPage}>
                    <ButtonUi text={'Reservation'} />
                </span>

                <span onClick={toggleCart} className='text-primary bg-black/40 hover:bg-black/70 transition-colors ease-linear p-3 rounded-full relative'>
                    <ShoppingBag size={22} />
                    <span className={` ${cartCount ? 'opacity-100' : 'opacity-0'} transition-opacity ease-linear duration-300 absolute -top-1.5 -left-1.5 bg-white/30 text-white flex items-center justify-center w-5 h-5 text-xs rounded-full`}>{cartCount}</span>
                </span>

            </div>

            <div className='flex items-center gap-2 lg:hidden'>
                <button onClick={toggleDrawer} className='text-primary '>
                    <Menu size={30} />
                </button>
                <span onClick={toggleCart} className='text-primary bg-black/40 hover:bg-black/70 transition-colors ease-linear p-3 rounded-full relative'>
                    <ShoppingBag size={22} />
                    <span className={` ${cartCount ? 'opacity-100' : 'opacity-0'} transition-opacity ease-linear duration-300 absolute -top-1.5 -left-1.5 bg-white/30 text-white flex items-center justify-center w-5 h-5 text-xs rounded-full`}>{cartCount}</span>
                </span>
            </div>
        </nav>
    )
}

export default Navbar
