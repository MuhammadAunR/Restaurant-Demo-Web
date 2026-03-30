import React from 'react'
import { DiningEventCard } from './ui/CardUi'
import { diningTypes } from './Assets'

const DiningEvent = () => {
    return (
        <>
            <section className='bg-mist-900 min-h-screen h-fit relative'>
                <div className='relative z-10 flex flex-col items-center gap-3 justify-center h-full text-white'>
                    <h4 className='font-stylish text-xl tracking-wide'>Choose Your Event</h4>
                    <h1 className='text-4xl font-bold uppercase text-center text-primary-light'>
                        Dining Events
                    </h1>
                    <p className='text-center'>
                        We provide dining event for your special day <br /> with your important people
                    </p>
                    <div className='flex items-center justify-center gap-5'>
                        <button className='bg-primary text-black px-7 py-1 font-semibold'>
                            Private Events
                        </button>
                        <button className='bg-primary text-black px-7 py-1 font-semibold'>
                            Corporate Events
                        </button>
                    </div>
                </div>
                <div className='flex flex-col py-10'>
                    {diningTypes.map((type, index) => {
                        return <DiningEventCard key={type.type} type={type} index={index} />
                    })}
                </div>

                <section className='py-30'>
                <img src="../assets/diningsalmon-bg.webp" alt="Dining Salmon" className='w-full'/>
            </section>
            </section>
        </>
    )
}

export default DiningEvent
