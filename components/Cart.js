'use client'
import { useCart } from '@/app/context/CartContext'
import { ShoppingBasket, X } from 'lucide-react'
import { Minus, Plus, Trash2 } from 'lucide-react'
import React from 'react'
import ButtonUi from './ui/ButtonUi'


const CartItem = ({ item }) => {
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
                            onClick={() => decreaseQty(item.id)}
                            className='w-6 h-6 border border-primary/30 flex items-center justify-center text-primary hover:bg-primary/10 transition-colors cursor-pointer'
                        >
                            <Minus size={10} />
                        </button>
                        <span className='text-sm text-white/80 w-4 text-center'>{item.qty}</span>
                        <button
                            onClick={() => increaseQty(item.id)}
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

const Cart = () => {

    const { toggleCart, isCartOpen, cartItems, cartTotal, handleCheckOut } = useCart()


    return (

        <main className='w-full flex'>
            {isCartOpen && <section
                onClick={toggleCart}
                className={`bg-black/40 backdrop-blur-md h-screen w-full fixed top-0 z-200`}>
            </section>
            }
            <section className={`fixed right-0 top-0 z-200 h-screen w-100 bg-black/40 backdrop-blur-md flex flex-col overflow-hidden transition-all ease-linear ${isCartOpen ? 'translate-x-0' : 'translate-x-full'}`}>

                <div className='flex items-center justify-between p-5 border-b border-white/10 shrink-0'>
                    <h2 className='font-heading text-white text-lg uppercase tracking-widest'>Your Orders</h2>
                    <button onClick={toggleCart} className='text-white/60 hover:text-white transition-all ease-linear cursor-pointer hover:rotate-90'>
                        <X />
                    </button>
                </div>


                <div className='flex-1 overflow-y-auto p-5'>

                    {cartItems.length === 0 &&
                        <div className='flex flex-col items-center justify-center h-full gap-4 text-center py-20'>
                            <span className='text-primary-light opacity-30'><ShoppingBasket size={70} /></span>
                            <p className='font-heading uppercase text-sm tracking-widest text-white/30'>Your cart is empty</p>
                            <button onClick={toggleCart} className='text-white/80 hover:text-primary-light cursor-pointer text-lg'>Add items from the menu</button>
                        </div>
                    }
                    <div>
                        {cartItems.map(item => (
                            <CartItem key={item.name} item={item} />
                        ))}
                    </div>

                </div>


                <div className='p-5 border-t border-white/10 shrink-0 flex flex-col items-end gap-5'>
                    <div className='flex items-center justify-between w-full'>
                        <h4 className='text-xl font-semibold text-primary-light'>SubTotal</h4>
                        <span className='text-red-500 text-lg'>${cartTotal}</span>
                    </div>
                    <span onClick={handleCheckOut}>
                    <ButtonUi   text={'Checkout'} />
                    </span>
                </div>

            </section>
        </main>
    )
}

export default Cart
