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
        <div className={`text-white/80 flex max-lg:flex-col ${isEven ? 'flex-row' : 'flex-row-reverse'} items-center justify-center w-full gap-10`}>
            <div className='w-full h-60 md:w-150 md:h-95 overflow-hidden'>
                <img src={item.src} alt={item.name} className='w-full h-full object-cover' />
            </div>
            <div className='flex flex-col items-start max-lg:items-center gap-2'>
                <h3 className='font-semibold text-xl text-primary-light'>{item.name}</h3>
                <h4 className='text-primary-dark text-center'>{item.ingredients}</h4>
                <h4 className='max-lg:text-center lg:w-10/12'>{item.desc}</h4>
                <span className='font-semibold text-lg text-primary-light'>${item.price}</span>
            </div>
        </div>
    )
}

export { MenuSectionCard }


export const DiningEventCard = ({ type, index }) => {
    const isEven = index % 2 === 0

    return (
        <div className='relative max-md:h-55 max-lg:w-10/12 max-lg:h-70 w-250 h-85 2xl:w-300 mx-auto 2xl:h-100 overflow-hidden group'>

            <img
                src={type.src}
                alt={`${type.type} Dining`}
                className='absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out'
            />
            <div className={`absolute inset-0 ${isEven ? 'bg-linear-to-l' : 'bg-linear-to-r'} via-mist-900/90 to-mist-900`}></div>
            <div className={`relative z-10 h-full flex flex-col justify-center gap-2 px-10 ${isEven ? 'items-start' : 'items-end text-right'}`}>

                <div className={`flex items-baseline gap-3 ${isEven ? 'flex-row' : 'flex-row-reverse'}`}>
                    <span className='text-xl md:text-3xl font-bold text-primary'>${type.price}</span>
                    <h2 className='font-heading font-semibold md:text-xl uppercase text-white tracking-widest'>
                        {type.type} Dining
                    </h2>
                </div>

                <div className='text-white/80 text-[10px] md:text-sm flex flex-col gap-1'>
                    {type.includes.map((item) => (
                        <span key={item}>{item}</span>
                    ))}
                </div>

            </div>
        </div>
    )
}

import { Minus, Plus, Trash2 } from 'lucide-react'
import { useCart } from '@/app/context/CartContext'

const CartItemCard = ({ item }) => {
    const { removeFromCart, increaseQty, decreaseQty } = useCart()

    return (
        <div className='flex gap-3 py-4 border-b border-white/8 group'>

            {/* Image */}
            <div className='w-16 h-16 shrink-0 overflow-hidden bg-mist-800'>
                {item.src ? (
                    <img src={item.src} alt={item.name} className='w-full h-full object-cover' />
                ) : (
                    <div className='w-full h-full flex items-center justify-center text-xl'
                        style={{ background: '#1c2124', color: 'rgba(245,190,50,0.2)' }}>
                        ❋
                    </div>
                )}
            </div>

            {/* Info */}
            <div className='flex flex-col gap-1 flex-1 min-w-0'>
                <span className='font-heading text-sm text-primary-light truncate'>{item.name}</span>
                <span className='text-xs text-white/40 truncate'>{item.ingredients}</span>

                {/* Qty + Price row */}
                <div className='flex items-center justify-between mt-1'>

                    {/* Qty controls */}
                    <div className='flex items-center gap-2'>
                        <button
                            onClick={() => decreaseQty(item.itemId)}
                            className='w-6 h-6 border border-primary/30 flex items-center justify-center text-primary hover:bg-primary/10 transition-colors cursor-pointer'
                        >
                            <Minus size={10} />
                        </button>
                        <span className='text-sm text-white/80 w-4 text-center'>{item.qty}</span>
                        <button
                            onClick={() => increaseQty(item.itemId)}
                            className='w-6 h-6 border border-primary/30 flex items-center justify-center text-primary hover:bg-primary/10 transition-colors cursor-pointer'
                        >
                            <Plus size={10} />
                        </button>
                    </div>

                    {/* Item total */}
                    <span className='font-heading text-sm font-semibold text-primary'>
                        ${(item.price * item.qty).toFixed(2)}
                    </span>
                </div>
            </div>

            {/* Remove */}
            <button
                onClick={() => removeFromCart(item.id)}
                className='self-start opacity-0 group-hover:opacity-100 transition-opacity text-white/30 hover:text-red-400 cursor-pointer'
            >
                <Trash2 size={14} />
            </button>

        </div>
    )
}

export { CartItemCard }
