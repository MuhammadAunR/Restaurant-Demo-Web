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
    const { toggleCart } = useCart()

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

            <div className='max-lg:hidden flex items-center gap-5'>

                <span onClick={GoToReservationPage}>
                    <ButtonUi text={'Reservation'} />
                </span>

                <span onClick={toggleCart} className='text-primary bg-black/40 hover:bg-black/70 transition-colors ease-linear p-3 rounded-full'>
                    <ShoppingBag size={22} />
                </span>

            </div>

            <div className='flex items-center gap-2 lg:hidden'>
                <button onClick={toggleDrawer} className='text-primary '>
                    <Menu size={30} />
                </button>
                <span onClick={toggleCart} className='text-primary hover:text-primary-light transition-colors ease-linear p-3 rounded-full'>
                    <ShoppingBag size={22} />
                </span>
            </div>
        </nav>
    )
}

export default Navbar
