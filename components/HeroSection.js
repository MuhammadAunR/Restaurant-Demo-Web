import React from 'react'
import ButtonUi from './ui/ButtonUi'

const HeroSection = () => {
    return (

        <section className='absolute top-0 h-screen w-full'>
            <img
                src='../assets/heroSectionBg.webp'
                alt='hero'
                className='absolute inset-0 w-full h-full object-cover'
            />

            <div className='absolute inset-0 bg-linear-to-b from-black/50 via-black/70 to-mist-900'></div>

            <div className='relative z-10 flex flex-col items-center gap-3 justify-center h-full text-white'>

                <h4 className='font-stylish text-2xl tracking-wide'>Best Sushi in Town</h4>
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

        </section>

    )
}

export default HeroSection
