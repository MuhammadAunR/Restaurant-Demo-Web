'use client'
import { menuData } from '@/components/Assets'
import { useState } from 'react'
import { useCart } from '../context/CartContext'

const tabs = [
    { id: 'all', label: 'All' },
    { id: 'specialities', label: 'Specialities' },
    { id: 'sushi', label: 'Sushi Rolls' },
    { id: 'nigiri', label: 'Nigiri' },
    { id: 'cocktails', label: 'Cocktails' },
    { id: 'desserts', label: 'Desserts' },
]

// ── Spice Dots ──────────────────────────────────────
const SpiceDots = ({ level }) => (
    <div className='flex gap-1'>
        {[1, 2, 3].map(i => (
            <div
                key={i}
                className={`w-1.5 h-1.5 rounded-full ${i <= level ? 'bg-primary opacity-100' : 'bg-primary opacity-20'}`}
            />
        ))}
    </div>
)

// ── Menu Item Card ──────────────────────────────────
const MenuCard = ({ item, featured = false }) => {
    const { getProduct } = useCart()
    return (
        <div className={`relative flex overflow-hidden cursor-pointer border border-primary/20 hover:border-primary/50 transition-all duration-300 group bg-mist-800 ${featured ? 'flex-col sm:flex-row col-span-full' : 'flex-col'}`}>

            <div className={`relative overflow-hidden bg-mist-900 shrink-0 ${featured ? 'h-52 sm:h-auto sm:w-80' : 'h-48'}`}>
                {item.src ? (
                    <img
                        src={item.src} alt={item.name}
                        className='w-full h-full object-cover brightness-85 saturate-90 group-hover:scale-105 transition-transform duration-700'
                    />
                ) : (
                    <div
                        className='w-full h-full flex items-center justify-center text-5xl'
                        style={{ background: 'linear-gradient(135deg, #1c2124 0%, #252b30 50%, #1a1e22 100%)', color: 'rgba(245,190,50,0.12)', fontFamily: 'serif' }}
                    >
                        {item.symbol}
                    </div>
                )}
                <div className='absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-300' />
                {item.badge && (
                    <span className='absolute top-3 left-3 bg-primary text-black text-xs font-semibold tracking-widest uppercase px-2 py-0.5'>
                        {item.badge}
                    </span>
                )}
                <button onClick={() => getProduct(item)} className='absolute bottom-3 right-3 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 bg-primary text-black text-xs font-semibold tracking-widest uppercase px-3 py-1.5 border-none cursor-pointer'>
                    Order Now
                </button>
            </div>

            <div className='flex flex-col gap-3 p-5 flex-1'>
                <div className='flex items-start justify-between gap-3'>
                    <span style={{ fontFamily: 'serif' }} className='text-lg font-semibold text-primary-light leading-tight tracking-wide'>
                        {item.name}
                    </span>
                    <div className='flex-1 self-center border-b border-dotted border-primary/20 mx-2' />
                    <span style={{ fontFamily: 'serif' }} className='text-lg font-semibold text-primary whitespace-nowrap shrink-0'>
                        {item.price}
                    </span>
                </div>

                <p className='text-xs tracking-widest uppercase text-white/40'>{item.ingredients}</p>
                <p className='text-sm text-white/55 leading-relaxed flex-1'>{item.desc}</p>

                <div className='flex items-center justify-between pt-3 border-t border-primary/10 mt-auto'>
                    <SpiceDots level={item.spice} />
                    <span className='text-xs tracking-widest uppercase text-primary border border-primary/20 px-2 py-0.5'>
                        {item.tag}
                    </span>
                </div>
            </div>
        </div>
    )
}

// ── Category Section ────────────────────────────────
const CategorySection = ({ cat }) => (
    <div className='mb-20'>
        <div className='flex items-center gap-5 mb-10'>
            <span style={{ fontFamily: 'serif', fontSize: 'clamp(2rem,5vw,4rem)', color: 'rgba(245,190,50,0.1)', fontWeight: 300, lineHeight: 1, flexShrink: 0 }}>
                {cat.number}
            </span>
            <div className='flex flex-col gap-1'>
                <span className='font-stylish text-base text-primary'>{cat.tag}</span>
                <h2 style={{ fontFamily: 'serif', fontSize: 'clamp(1.4rem,3vw,2.2rem)', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'varprimary-light' }}>
                    {cat.title}
                </h2>
            </div>
            <div className='flex-1 h-px' style={{ background: 'linear-gradient(to right, rgba(245,190,50,0.18), transparent)' }} />
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0.5'>
            {cat.items.map((item) => (
                <MenuCard key={item.name} item={item} featured={item.featured} />
            ))}
        </div>
    </div>
)

// ── Main Page ───────────────────────────────────────
export default function MenuPage() {

    const [activeTab, setActiveTab] = useState('all')

    const visibleCategories = activeTab === 'all'
        ? menuData
        : menuData.filter(c => c.id === activeTab)

    return (
        <div className='min-h-screen bg-mist-900 text-white overflow-x-hidden absolute top-0 w-full'>

            <div
                className='fixed inset-0 pointer-events-none z-0 opacity-40'
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E")` }}
            />

            <div className='relative min-h-[38vh] flex flex-col items-center justify-center text-center px-6 py-30 overflow-hidden'>
                <div className='absolute inset-0 pointer-events-none' style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(245,190,50,0.07) 0%, transparent 70%)' }} />

                <p className='font-stylish text-2xl sm:text-3xl text-primary mb-3'>
                    A Culinary Journey
                </p>
                <h1
                    className='font-bold uppercase text-primary-light leading-none tracking-wide'
                    style={{ fontFamily: 'serif', fontSize: 'clamp(3rem,8vw,6rem)', fontWeight: 300 }}
                >
                    Our Menu
                </h1>
                <div className='flex items-center gap-4 my-5'>
                    <div className='h-px w-14' style={{ background: 'linear-gradient(to left, transparent, #F5BE32)' }} />
                    <div className='w-2 h-2 rotate-45 bg-primary' />
                    <div className='h-px w-14' style={{ background: 'linear-gradient(to right, transparent, #F5BE32)' }} />
                </div>
                <p className='text-xs tracking-widest uppercase text-white/35'>
                    Handcrafted with the finest ingredients · Est. 2012
                </p>
            </div>

            <div className='sticky top-0 z-50 border-b border-primary/18 px-4 sm:px-6'
                style={{ background: 'rgba(15,17,19,0.93)', backdropFilter: 'blur(12px)' }}>
                <div className='max-w-5xl mx-auto flex overflow-x-auto scrollbar-hide'>
                    {tabs.map(tab => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`shrink-0 px-4 sm:px-6 py-4 text-xs tracking-widest uppercase border-b-2 transition-all duration-250 cursor-pointer bg-transparent ${activeTab === tab.id ? 'text-primary border-primary' : 'text-white/35 border-transparent hover:text-primary-light'}`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>
            </div>

            <div className='relative z-10 max-w-5xl mx-auto px-4 sm:px-6 py-14'>

                {visibleCategories.map((cat, i) => (
                    <div key={cat.id}>
                        <CategorySection cat={cat} />

                        {i === 0 && activeTab === 'all' && (
                            <div className='border-t border-b border-primary/18 py-10 my-4 mb-16 text-center'
                                style={{ background: 'linear-gradient(to right, transparent, rgba(245,190,50,0.06), transparent)' }}>
                                <p className='italic text-white/55 max-w-xl mx-auto leading-8 px-4'
                                    style={{ fontFamily: 'serif', fontSize: 'clamp(0.95rem,2vw,1.25rem)', fontWeight: 300, letterSpacing: '0.03em' }}>
                                    "Every roll tells a story of the sea, the hands that shaped it, and the moment it reaches you."
                                </p>
                                <p className='text-xs tracking-widest uppercase text-primary mt-4'>— Chef Damir, Head Chef & Founder</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}