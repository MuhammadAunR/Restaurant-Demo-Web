'use client'
import React, { createContext, useContext, useState } from 'react'

export const ContextProvider = createContext()

export const useCart = () => useContext(ContextProvider)

const CartContext = ({ children }) => {

    const [isCartOpen, setIsCartOpen] = useState(false)
    const [cartItems, setCartItems] = useState([])

    const toggleCart = () => {
        setIsCartOpen(!isCartOpen)
    }

    const addToCart = (item) => {
        setCartItems(prev => {
            const exists = prev.find(i => i.itemId === item.itemId)
            if (exists) return prev.map(i => i.itemId === item.itemId ? { ...i, qty: i.qty + 1 } : i)
            return [...prev, { ...item, qty: 1 }]
        })
    }

    const removeFromCart = (itemId) => setCartItems(prev => prev.filter(i => i.itemId !== itemId))

    const increaseQty = (itemId) => setCartItems(prev => prev.map(i => i.itemId === itemId ? { ...i, qty: i.qty + 1 } : i))

    const decreaseQty = (itemId) => setCartItems(prev => {
        const item = prev.find(i => i.itemId === itemId)
        if (item.qty === 1) return prev.filter(i => i.itemId !== itemId)
        return prev.map(i => i.itemId === itemId ? { ...i, qty: i.qty - 1 } : i)
    })

    const cartTotal = cartItems.reduce((sum, i) => sum + i.price * i.qty, 0)
    const cartCount = cartItems.reduce((sum, i) => sum + i.qty, 0)

    const handleCheckOut = () => {
        setCartItems([])
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
