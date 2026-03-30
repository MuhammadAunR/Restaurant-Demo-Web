import React from 'react'
import SpecialCard from './ui/CardUi'
import { sushiFood } from './Assets'

const SpecialSection = () => {
    return (

        <section className='bg-mist-900 min-h-screen h-fit text-white'>

            <div className='relative z-10 flex flex-col items-center gap-3 justify-center h-full text-white'>
                <h4 className='font-stylish text-xl tracking-wide'>Special Menu</h4>
                <h1 className='text-4xl font-bold uppercase text-center text-primary-light'>
                    Today's Special
                </h1>
                <p className='text-center'>
                    Special menu oftenly comes different everyday, <br /> this is our special food for today
                </p>

                <div className='flex items-center justify-center gap-5'>
                    {sushiFood.slice(0,3).map(item => {
                        return <SpecialCard key={item.name} item={item} />
                    })}
                </div>
            </div>

            <section className='py-30'>
                <img src="../assets/luxurybg.webp" alt="Luxury Bg" className='w-full'/>
            </section>

        </section>

    )
}

export default SpecialSection
