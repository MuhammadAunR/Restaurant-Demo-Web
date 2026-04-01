'use client'
import { useCart } from '@/app/context/CartContext'
import { ShoppingBasket, X } from 'lucide-react'
import React from 'react'
import ButtonUi from './ui/ButtonUi'
import { CartItemCard } from './ui/CardUi'




const Cart = () => {

    const { toggleCart, isCartOpen, cartItems, cartTotal, handleCheckOut } = useCart()

    // console.log(cartItems)

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
                    <div className='flex flex-col'>
                        {cartItems.map(item => (
                            <CartItemCard key={item.name} item={item} />
                        ))}
                    </div>

                </div>


                <div className='p-5 border-t border-white/10 shrink-0 flex flex-col items-end gap-5'>
                    <div className='flex items-center justify-between w-full'>
                        <h4 className='text-xl font-semibold text-primary-light'>SubTotal</h4>
                        <span className='text-red-500 text-lg font-bold font-heading'>${cartTotal.toFixed(2)}</span>
                    </div>
                    <span onClick={handleCheckOut} className={``}>
                        <ButtonUi text={'Checkout'} />
                    </span>
                </div>

            </section>
        </main>
    )
}

export default Cart
