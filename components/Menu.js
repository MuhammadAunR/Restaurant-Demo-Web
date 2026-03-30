import React from 'react'
import { MenuSectionCard } from './ui/CardUi'
import { sushiFood } from './Assets'

const Menu = () => {
    const menuCategories = [
        "Specialities",
        "Homestyle Sushi",
        "Steak",
        "With Rice",
        "Cocktails",
        "Wine",
        "Appetizer",
    ]
    return (
        <>
            <section className='bg-mist-900 min-h-screen h-fit'>
                <div className='relative z-10 flex flex-col items-center gap-3 justify-center h-full text-white'>
                    <h4 className='font-stylish text-xl tracking-wide'>Quality food for you</h4>
                    <h1 className='text-4xl font-bold uppercase text-center text-primary-light'>
                        Our Specialities
                    </h1>
                    <p className='text-center'>
                        Authentic food from our restaurant served <br />with high quality ingredients
                    </p>


                    <div className='flex items-center justify-center gap-5 pt-7'>
                        {menuCategories.map((category) => (
                            <button key={category} className='bg-primary text-black px-7 py-1 font-semibold'>
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                <div className='py-10 flex flex-col items-center justify-center gap-5'>
                    {sushiFood.slice(3).map((item, index) => {
                        return <MenuSectionCard key={item.name} item={item} index={index} />
                    })}
                </div>
            </section>
        </>
    )
}

export default Menu
