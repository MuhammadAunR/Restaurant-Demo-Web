'use client'
import ReservationForm from '@/components/ReservationForm'
import { ArrowLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React from 'react'

const Reservation = () => {

    const router = useRouter()

    const GoToHomePage = () => {
        router.push('/')
    }

    return (
        <>
            <main className='max-w-384 w-full mx-auto'>

                <section className='absolute min-h-[50vh] top-0 h-fit py-10 w-full max-w-384'>
                    <img
                        src='../../assets/heroSectionBg.webp'
                        alt='hero'
                        className='absolute inset-0 w-full h-full object-cover'
                    />

                    <div className='absolute inset-0 bg-mist-800/80'></div>

                    <div className='relative z-10 flex flex-col items-center gap-7 justify-center h-full'>

                        <h1 className='text-2xl md:text-4xl lg:text-5xl font-bold uppercase text-center text-primary-light pt-30'>
                            Table Reservation
                        </h1>

                        <button onClick={GoToHomePage} className='fixed flex items-center gap-3 overflow-hidden bg-primary-light p-2 rounded-full top-5 left-5 cursor-pointer w-10 h-10 hover:w-40 transition-all duration-300 ease-in-out group'>
                            <span className='shrink-0'>
                                <ArrowLeft />
                            </span>
                            <span className='whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200'>
                                Go to Home
                            </span>
                        </button>

                    </div>
                </section>
                <section className='mt-95'>
                    <ReservationForm />
                </section>
            </main>
        </>
    )
}

export default Reservation
