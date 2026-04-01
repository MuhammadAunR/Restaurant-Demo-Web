'use client'
import React, { createContext, useContext, useState } from 'react'
import toast from 'react-hot-toast'

export const ContextProvider = createContext()

export const useCart = () => useContext(ContextProvider)

const CartContext = ({ children }) => {

    const [isCartOpen, setIsCartOpen] = useState(false)
    const [cartItems, setCartItems] = useState([])

    const toggleCart = () => {
        setIsCartOpen(!isCartOpen)
    }

    const addToCart = (item) => {
        toast.success('Added to cart')
        setCartItems(prev => {
            const exists = prev.find(i => i.itemId === item.itemId)
            if (exists) return prev.map(i => i.itemId === item.itemId ? { ...i, qty: i.qty + 1 } : i)
            return [...prev, { ...item, qty: 1 }]
        })
    }

    const removeFromCart = (itemId) => {
        const confirmed = window.confirm('Are you sure to remove from cart ?')
        if (confirmed) {
            setCartItems(prev => prev.filter(i => i.itemId !== itemId))
            toast('Removed from cart')
        } else {
            toast('Item not removed')
        }
    }

    const increaseQty = (itemId) => setCartItems(prev => prev.map(i => i.itemId === itemId ? { ...i, qty: i.qty + 1 } : i))

    const decreaseQty = (itemId) => setCartItems(prev => {
        const item = prev.find(i => i.itemId === itemId)
        if (item.qty === 1) return prev.filter(i => i.itemId !== itemId)
        return prev.map(i => i.itemId === itemId ? { ...i, qty: i.qty - 1 } : i)
    })

    const cartTotal = cartItems.reduce((sum, i) => sum + i.price * i.qty, 0)
    const cartCount = cartItems.reduce((sum, i) => sum + i.qty, 0)

    const handleCheckOut = () => {
        const confirmed = window.confirm('Are you sure to Checkout ?')
        if(confirmed){
            setCartItems([])
            toast.success('Successfully Checked Out')
        }else{
            toast('Checkout Cancelled')
        }
    }

    return (
        <>
            <ContextProvider.Provider value={
                { toggleCart, isCartOpen, addToCart, cartItems, removeFromCart, increaseQty, decreaseQty, cartTotal, cartCount, handleCheckOut }
            }>
                {children}
            </ContextProvider.Provider>
        </>
    )
}

export default CartContext
