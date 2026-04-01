'use client'
import React from 'react'
import DrawerContext from './DrawerContext'
import CartContext from './CartContext'

const AppWrapper = ({ children }) => {
    return (
        <>
            <DrawerContext>
                <CartContext>
                    {children}
                </CartContext>
            </DrawerContext>
        </>
    )
}

export default AppWrapper
