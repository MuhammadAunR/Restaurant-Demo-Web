'use client'
import React, { useEffect } from 'react'
import Lenis from 'lenis';

const LenisAnimation = ({children}) => {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            smoothWheel: true,
            smoothTouch: false,
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        // make globally accessible
        window.lenis = lenis;

        return () => {
            lenis.destroy();
        };
    }, []);
    return (
        <>
            {children}
        </>
    )
}

export default LenisAnimation
