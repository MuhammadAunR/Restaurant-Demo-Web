import React from 'react'
import ButtonUi from './ButtonUi'

const SpecialCard = ({ item }) => {
    return (
        <div className='w-70 h-110 flex flex-col bg-mist-800'>

            <div className='h-55 w-full shrink-0 overflow-hidden'>
                <img src={item.src} alt={item.name} className='w-full h-full object-cover' />
            </div>

            <div className='flex flex-col justify-between flex-1 gap-5 p-5'>
                <div className='flex flex-col gap-2'>
                    <h2 className='font-semibold text-lg text-primary-light'>{item.name}</h2>
                    <p className='text-sm line-clamp-3'>{item.desc}</p>
                </div>
                <ButtonUi text={'Order Now'} />
            </div>

        </div>
    )
}

export default SpecialCard


const MenuSectionCard = ({ item, index }) => {
    const isEven = index % 2 === 0;
    return (
        <div className={`text-white flex ${isEven ? 'flex-row' : 'flex-row-reverse'} items-center justify-center w-full gap-10`}>
            <div className='w-150 h-95 overflow-hidden'>
                <img src={item.src} alt={item.name} className='w-150 h-95 object-cover' />
            </div>
            <div className='flex flex-col items-start gap-2'>
                <h3 className='font-semibold text-xl text-primary-light'>{item.name}</h3>
                <h4>{item.ingredients}</h4>
                <h4 className='w-10/12'>{item.desc}</h4>
                <span className='font-semibold text-lg text-primary-light'>${item.price}</span>
            </div>
        </div>
    )
}

export { MenuSectionCard }


export const DiningEventCard = ({ type, index }) => {
    const isEven = index % 2 === 0

    return (
        <div className='relative w-300 mx-auto h-100 overflow-hidden group'>

            <img
                src={type.src}
                alt={type.type}
                className='absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out'
            />

            <div className={`absolute inset-0 ${isEven ? 'bg-linear-to-l' : 'bg-linear-to-r'} via-mist-900/90 to-mist-900`}></div>


            <div className={`relative z-10 h-full flex flex-col justify-center gap-2 px-10 ${isEven ? 'items-start' : 'items-end text-right'}`}>


                <div className={`flex items-baseline gap-3 ${isEven ? 'flex-row' : 'flex-row-reverse'}`}>
                    <span className='text-3xl font-bold text-primary'>${type.price}</span>
                    <h2 className='font-heading font-semibold text-xl uppercase text-white tracking-widest'>
                        {type.type} Dining
                    </h2>
                </div>

                {/* Includes */}
                <div className='text-white/80 text-sm flex flex-col gap-1'>
                    {type.includes.map((item) => (
                        <span key={item}>{item}</span>
                    ))}
                </div>

            </div>
        </div>
    )
}

