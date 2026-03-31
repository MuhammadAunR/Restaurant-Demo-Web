'use client'
import React, { useEffect, useState } from 'react'
import ButtonUi from './ui/ButtonUi'
import { ArrowUpFromDot } from 'lucide-react'

const HeroSection = () => {

    const [scrollToTopBtn, setScrollToTopBtn] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrollToTopBtn(window.scrollY > 300)
        }
        window.addEventListener('scroll', handleScroll)

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])


    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
    return (

        <section className='absolute top-0 h-screen w-full'>
            <img
                src='../assets/heroSectionBg.webp'
                alt='hero'
                className='absolute inset-0 w-full h-full object-cover'
            />

            <div className='absolute inset-0 bg-linear-to-b from-black/50 via-black/70 to-mist-900'></div>

            <div className='relative z-10 flex flex-col items-center gap-3 justify-center h-full text-white'>


                <h4 className='font-stylish text-lg md:text-2xl tracking-wide'>Best Sushi in Town</h4>
                <h1 className='text-3xl md:text-5xl lg:text-6xl font-bold uppercase text-center text-primary-light'>
                    Taste the rich flavor of <br /> high quality sushi
                </h1>
                <p className='md:text-lg text-center'>
                    We only use the five star quality for our menu, <br /> come and get the richness in every food we serve.
                </p>

                <span className='py-4'>
                    <ButtonUi text={'Go To Menu'} />
                </span>

            </div>

            {scrollToTopBtn && <div>
                <button onClick={handleScrollToTop} className='fixed bottom-7 right-7 z-200 flex flex-col gap-5 overflow-hidden bg-primary-light hover:bg-primary p-2 rounded-full cursor-pointer w-10 h-10 hover:h-35 transition-all duration-300 ease-in-out group'>
                    <span className='shrink-0'>
                        <ArrowUpFromDot />
                    </span>
                    <span className='text-black font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col items-center'>
                        <span>Go</span>
                        <span>To</span>
                        <span>Top</span>
                    </span>
                </button>
            </div>
            }
        </section>

    )
}

export default HeroSection
