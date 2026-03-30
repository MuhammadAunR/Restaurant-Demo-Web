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
