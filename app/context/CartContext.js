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

    const getProduct = (item) => {
        setCartItems(prev => [...prev, item])
    }

    return (
        <>
            <ContextProvider.Provider value={{ toggleCart, isCartOpen, getProduct, cartItems }}>
                {children}
            </ContextProvider.Provider>
        </>
    )
}

export default CartContext
