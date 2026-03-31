'use client'
import React from 'react'
import ButtonUi from './ui/ButtonUi'
import { Map, Phone } from 'lucide-react'
import { useRouter } from 'next/navigation'

const FooterSection = () => {

    const router = useRouter()

    const GoToReservationPage = () => {
        router.push('/reservation')
    }
    return (
        <>
            <section className='absolute min-h-[60vh] top-0 h-fit py-10 w-full'>
                <img
                    src='../assets/footerSectionBg.webp'
                    alt='hero'
                    className='absolute inset-0 w-full h-full object-cover'
                />

                <div className='absolute inset-0 bg-mist-800/80'></div>

                <div className='relative z-10 flex flex-col items-center gap-7 justify-center h-full text-white/80'>

                    <h1 className='text-3xl md:text-5xl lg:text-6xl font-bold uppercase text-center text-primary-light'>
                        We ready to have you <br />
                        the best dining experiences
                    </h1>

                    <span onClick={GoToReservationPage} className='py-4'>
                        <ButtonUi text={'Reserve a table'} />
                    </span>

                    <div className="logo">
                        <img src="../assets/logo.png" alt="DMR SUSHI" className='w-12' />
                    </div>

                    <div className='flex items-center justify-center gap-4 px-5 flex-wrap'>
                        <button className='relative group py-1'>
                            <span className='group-hover:text-primary transition-colors duration-300 uppercase'>Instagram</span>
                            <span className='absolute bottom-0 left-0 h-[1.5px] w-0 bg-primary group-hover:w-full transition-all duration-300 ease-in-out origin-left'></span>
                        </button>
                        <button className='relative group py-1'>
                            <span className='group-hover:text-primary transition-colors duration-300 uppercase'>Facebook</span>
                            <span className='absolute bottom-0 left-0 h-[1.5px] w-0 bg-primary group-hover:w-full transition-all duration-300 ease-in-out origin-left'></span>
                        </button>
                        <button className='relative group py-1'>
                            <span className='group-hover:text-primary transition-colors duration-300 uppercase'>Twitter</span>
                            <span className='absolute bottom-0 left-0 h-[1.5px] w-0 bg-primary group-hover:w-full transition-all duration-300 ease-in-out origin-left'></span>
                        </button>
                    </div>

                    <div className='flex items-center justify-center gap-x-10 gap-y-3 px-5 flex-wrap'>
                        <div className='flex items-center justify-center gap-4 text-primary'>
                            <span><Map /></span>
                            <p className=''>123 Old Town Street, Vienna, Austria</p>
                        </div>
                        <div className='flex items-center justify-center gap-4 text-primary'>
                            <span><Phone /></span>
                            <p>+43 1 234 5678</p>
                        </div>
                    </div>

                </div>

            </section>
        </>
    )
}

export default FooterSection
