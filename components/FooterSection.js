import React from 'react'
import ButtonUi from './ui/ButtonUi'
import { Map, Phone } from 'lucide-react'

const FooterSection = () => {
    return (
        <>
            <section className='absolute bottom-0 h-screen w-full'>
                <img
                    src='../assets/footerSectionBg.webp'
                    alt='hero'
                    className='absolute inset-0 w-full h-full object-cover'
                />

                <div className='absolute inset-0 bg-linear-to-b from-black/50 via-black/70 to-mist-900'></div>

                <div className='relative z-10 flex flex-col items-center gap-7 justify-center h-full text-white'>

                    <h1 className='text-6xl font-bold uppercase text-center text-primary-light'>
                        We ready to have you <br />
                        the best dining experiences
                    </h1>

                    <span className='py-4'>
                        <ButtonUi text={'Reserve a table'} />
                    </span>

                    <div className="logo">
                        <img src="../assets/logo.png" alt="DMR SUSHI" className='w-12' />
                    </div>

                    <div className='flex items-center justify-center gap-4'>
                        <button className='relative group py-1'>
                            <span className='group-hover:text-primary transition-colors duration-300 uppercase'>Instagram</span>
                            <span className='absolute bottom-0 left-0 h-[1.5px] w-0 bg-primary group-hover:w-full transition-all duration-300 ease-in-out origin-left'></span>
                        </button>
                        <button className='relative group py-1'>
                            <span className='group-hover:text-primary transition-colors duration-300 uppercase'>Facebook</span>
                            <span className='absolute bottom-0 left-0 h-[1.5px] w-0 bg-primary group-hover:w-full transition-all duration-300 ease-in-out origin-left'></span>
                        </button>
                        <button className='relative group py-1'>
                            <span className='group-hover:text-primary transition-colors duration-300 uppercase'>Twitter</span>
                            <span className='absolute bottom-0 left-0 h-[1.5px] w-0 bg-primary group-hover:w-full transition-all duration-300 ease-in-out origin-left'></span>
                        </button>
                    </div>

                    <div className='flex items-center justify-center gap-10'>
                        <div className='flex items-center justify-center gap-4 text-primary'>
                            <span><Map /></span>
                            <p>Jendral Sudirman Street Pahoman <br />
                                Bandar Lampung, Lampung, 35222</p>
                        </div>
                        <div className='flex items-center justify-center gap-4 text-primary'>
                            <span><Phone /></span>
                            <p>+0721 471 285</p>
                        </div>
                    </div>

                </div>

            </section>
        </>
    )
}

export default FooterSection
