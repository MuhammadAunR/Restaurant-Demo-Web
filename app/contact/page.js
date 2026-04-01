'use client'
import { useState } from 'react'
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react'
import Footer from '@/components/Footer'

// ── Data ──────────────────────────────────────────────
const contactInfo = [
    {
        icon: <MapPin size={18} />,
        label: 'Address',
        value: '123 Old Town Street',
        sub: 'Vienna, Austria 1010',
    },
    {
        icon: <Phone size={18} />,
        label: 'Reservations',
        value: '+43 1 234 5678',
        sub: 'Mon – Sun, 10AM – 10PM',
    },
    {
        icon: <Mail size={18} />,
        label: 'Email',
        value: 'hello@dmrsushi.com',
        sub: 'We reply within 24 hours',
    },
    {
        icon: <Clock size={18} />,
        label: 'Hours',
        value: 'Mon – Sun',
        sub: '12:00 PM – 11:00 PM',
    },
]

// const socials = [
//   { icon: <Instagram size={18} />, label: 'Instagram', handle: '@dmrsushi' },
//   { icon: <Facebook size={18} />, label: 'Facebook', handle: 'DMR Sushi' },
//   { icon: <Twitter size={18} />, label: 'Twitter', handle: '@dmrsushi' },
// ]

const subjects = ['General Inquiry', 'Reservation', 'Private Event', 'Feedback', 'Partnership']

// ── Divider ───────────────────────────────────────────
const Divider = () => (
    <div className='flex items-center gap-3'>
        <span data-aos='fade-right' className='h-px flex-1' style={{ background: 'linear-gradient(to right, transparent, rgba(245,190,50,0.4))' }} />
        <span data-aos='zoom-in' className='w-1.5 h-1.5 rotate-45 bg-primary' />
        <span data-aos='fade-left' className='h-px flex-1' style={{ background: 'linear-gradient(to left, transparent, rgba(245,190,50,0.4))' }} />
    </div>
)

// ── Main Page ─────────────────────────────────────────
export default function ContactPage() {
    const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
    const [errors, setErrors] = useState({})
    const [submitted, setSubmitted] = useState(false)
    const [focused, setFocused] = useState('')

    const handleChange = (e) => {
        const { name, value } = e.target
        setForm(prev => ({ ...prev, [name]: value }))
        if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }))
    }

    const validate = () => {
        const e = {}
        if (!form.name.trim()) e.name = 'Required'
        if (!form.email.trim()) e.email = 'Required'
        else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Invalid email'
        if (!form.subject) e.subject = 'Please select a subject'
        if (!form.message.trim()) e.message = 'Required'
        return e
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const e2 = validate()
        if (Object.keys(e2).length > 0) { setErrors(e2); return }
        setSubmitted(true)
    }

    const inputBase = `w-full bg-transparent outline-none text-white/80 text-sm transition-all duration-300 pb-2 placeholder:text-white/20`
    const borderBase = (name) => `border-b ${focused === name ? 'border-primary' : 'border-white/15'} transition-colors duration-300`

    // ── Success ──────────────────────────────────────────
    if (submitted) {
        return (
            <div className='min-h-screen bg-mist-900 flex items-center justify-center px-6'>
                <div data-aos='fade-up' className='flex flex-col items-center gap-6 text-center max-w-md'>
                    <div className='w-16 h-16 border border-primary flex items-center justify-center'>
                        <CheckCircle size={28} className='text-primary' />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <span className='font-stylish text-2xl text-primary'>Thank You</span>
                        <h2 className='font-heading text-3xl font-bold uppercase tracking-widest text-primary-light'>
                            Message Sent
                        </h2>
                    </div>
                    <p className='text-white/50 leading-7 text-sm'>
                        Thank you for reaching out, <span className='text-primary'>{form.name}</span>. Our team will get back to you at <span className='text-primary'>{form.email}</span> within 24 hours.
                    </p>
                    <button
                        onClick={() => { setSubmitted(false); setForm({ name: '', email: '', subject: '', message: '' }) }}
                        className='text-xs uppercase tracking-widest text-primary border-b border-primary/30 hover:border-primary transition-colors duration-200 pb-0.5'
                    >
                        Send Another Message
                    </button>
                </div>
            </div>
        )
    }

    return (
        <div className='min-h-screen bg-mist-900 text-white relative overflow-x-hidden'>

            {/* ── Ambient glow ── */}
            <div className='fixed top-0 left-1/2 -translate-x-1/2 w-150 h-75 rounded-full pointer-events-none'
                style={{ background: 'radial-gradient(ellipse, rgba(245,190,50,0.04) 0%, transparent 70%)', filter: 'blur(40px)' }} />

            {/* ── Hero ── */}
            <div className='relative flex flex-col items-center justify-center text-center px-6 pt-34 pb-16 overflow-hidden'>
                <div className='absolute inset-0 pointer-events-none'
                    style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(245,190,50,0.05) 0%, transparent 70%)' }} />

                <span data-aos='fade-up' className='font-stylish text-2xl sm:text-3xl text-primary mb-3 '>
                    Get in Touch
                </span>
                <h1 data-aos='fade-up' className='font-heading font-bold uppercase text-primary-light) leading-none mb-4'
                    style={{ fontSize: 'clamp(2.2rem,7vw,5rem)', letterSpacing: '0.1em' }}>
                    Contact Us
                </h1>
                <div className='w-48'>
                    <Divider />
                </div>
                <p data-aos='fade-up' className='text-white/40 text-xs tracking-widest uppercase mt-4'>
                    We'd love to hear from you
                </p>
            </div>

            {/* ── Main Grid ── */}
            <div data-aos='fade-down' className='max-w-6xl mx-auto px-5 sm:px-8 pb-24 grid grid-cols-1 lg:grid-cols-5 gap-0'>

                {/* ── Left Panel ── */}
                <div className='lg:col-span-2 border border-primary/15 bg-mist-800/50 p-8 sm:p-10 flex flex-col gap-10 lg:border-r-0'>

                    {/* Intro */}
                    <div className='flex flex-col gap-3'>
                        <span className='font-stylish text-xl text-primary'>DMR Sushi</span>
                        <p className='text-white/50 text-sm leading-7'>
                            Whether you're planning a private dinner, celebrating a milestone, or simply want to enquire about our menu — we are always delighted to hear from our guests.
                        </p>
                    </div>

                    <Divider />

                    {/* Contact Info */}
                    <div className='flex flex-col gap-6'>
                        {contactInfo.map(({ icon, label, value, sub }) => (
                            <div key={label} className='flex items-start gap-4 group'>
                                <div className='w-9 h-9 border border-primary/25 flex items-center justify-center text-primary shrink-0 group-hover:border-primary/60 group-hover:bg-primary/8 transition-all duration-300'>
                                    {icon}
                                </div>
                                <div className='flex flex-col gap-0.5'>
                                    <span className='text-white/35 text-xs uppercase tracking-widest font-heading'>{label}</span>
                                    <span className='text-white/80 text-sm'>{value}</span>
                                    <span className='text-white/35 text-xs'>{sub}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    <Divider />

                    {/* Socials */}
                    {/* <div className='flex flex-col gap-3'>
            <p className='text-white/35 text-xs uppercase tracking-widest font-heading'>Follow Us</p>
            <div className='flex flex-col gap-3'>
              {socials.map(({ icon, label, handle }) => (
                <div key={label} className='flex items-center gap-3 group cursor-pointer'>
                  <span className='text-primary/60 group-hover:text-primary transition-colors duration-200'>{icon}</span>
                  <span className='text-white/50 text-sm group-hover:text-white/80 transition-colors duration-200'>{handle}</span>
                </div>
              ))}
            </div>
          </div> */}

                    {/* Map placeholder */}
                    <div className='relative h-36 border border-primary/15 overflow-hidden'>
                        <div className='absolute inset-0 flex flex-col items-center justify-center gap-2'
                            style={{ background: 'linear-gradient(135deg, #1c2124, #252b30)' }}>
                            <MapPin size={22} className='text-primary/40' />
                            <span className='text-white/25 text-xs uppercase tracking-widest'>123 Old Town St, Vienna</span>
                        </div>
                        {/* decorative corner accents */}
                        <span className='absolute top-0 left-0 w-3 h-3 border-t border-l border-primary/40' />
                        <span className='absolute top-0 right-0 w-3 h-3 border-t border-r border-primary/40' />
                        <span className='absolute bottom-0 left-0 w-3 h-3 border-b border-l border-primary/40' />
                        <span className='absolute bottom-0 right-0 w-3 h-3 border-b border-r border-primary/40' />
                    </div>

                </div>

                {/* ── Right — Form ── */}
                <div className='lg:col-span-3 border border-primary/15 bg-mist-800/30 p-8 sm:p-12 flex flex-col gap-8'>

                    <div className='flex flex-col gap-1'>
                        <span className='font-stylish text-xl text-primary'>Send a Message</span>
                        <p className='text-white/35 text-xs uppercase tracking-widest font-heading'>All fields marked * are required</p>
                    </div>

                    {/* Subject pills */}
                    <div className='flex flex-col gap-3'>
                        <label className='text-white/35 text-xs uppercase tracking-widest font-heading'>
                            Subject <span className='text-primary'>*</span>
                        </label>
                        <div className='flex flex-wrap gap-2'>
                            {subjects.map(s => (
                                <button
                                    key={s}
                                    type='button'
                                    onClick={() => { setForm(prev => ({ ...prev, subject: s })); setErrors(prev => ({ ...prev, subject: '' })) }}
                                    className={`text-xs uppercase tracking-widest px-4 py-2 border transition-all duration-200 cursor-pointer ${form.subject === s
                                        ? 'border-primary bg-primary/10 text-primary'
                                        : 'border-white/15 text-white/40 hover:border-primary/40 hover:text-white/70'}`}
                                >
                                    {s}
                                </button>
                            ))}
                        </div>
                        {errors.subject && <p className='text-red-400 text-xs'>{errors.subject}</p>}
                    </div>

                    {/* Name + Email */}
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-8'>
                        <div className='flex flex-col gap-2'>
                            <label className='text-white/35 text-xs uppercase tracking-widest font-heading'>
                                Full Name <span className='text-primary'>*</span>
                            </label>
                            <div className={borderBase('name')}>
                                <input
                                    type='text' name='name' value={form.name}
                                    onChange={handleChange}
                                    onFocus={() => setFocused('name')}
                                    onBlur={() => setFocused('')}
                                    placeholder='John Doe'
                                    className={inputBase}
                                />
                            </div>
                            {errors.name && <p className='text-red-400 text-xs'>{errors.name}</p>}
                        </div>

                        <div className='flex flex-col gap-2'>
                            <label className='text-white/35 text-xs uppercase tracking-widest font-heading'>
                                Email <span className='text-primary'>*</span>
                            </label>
                            <div className={borderBase('email')}>
                                <input
                                    type='email' name='email' value={form.email}
                                    onChange={handleChange}
                                    onFocus={() => setFocused('email')}
                                    onBlur={() => setFocused('')}
                                    placeholder='john@example.com'
                                    className={inputBase}
                                />
                            </div>
                            {errors.email && <p className='text-red-400 text-xs'>{errors.email}</p>}
                        </div>
                    </div>

                    {/* Message */}
                    <div className='flex flex-col gap-2'>
                        <label className='text-white/35 text-xs uppercase tracking-widest font-heading'>
                            Message <span className='text-primary'>*</span>
                        </label>
                        <div className={borderBase('message')}>
                            <textarea
                                name='message' value={form.message}
                                onChange={handleChange}
                                onFocus={() => setFocused('message')}
                                onBlur={() => setFocused('')}
                                placeholder='Tell us how we can help you...'
                                rows={5}
                                className={`${inputBase} resize-none`}
                            />
                        </div>
                        {errors.message && <p className='text-red-400 text-xs'>{errors.message}</p>}
                    </div>

                    {/* Submit */}
                    <div className='flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-2'>
                        <p className='text-white/25 text-xs leading-5'>
                            By sending this message you agree to our privacy policy. We will never share your details with third parties.
                        </p>
                        <button
                            onClick={handleSubmit}
                            className='relative flex items-center gap-3 uppercase font-heading font-semibold tracking-widest text-sm px-8 py-3 cursor-pointer overflow-hidden text-primary bg-primary/10 hover:bg-transparent transition-all duration-300 group shrink-0'
                        >
                            {/* border animation */}
                            <span className='absolute top-0 left-0 h-full w-0.5 bg-current' />
                            <span className='absolute top-0 right-0 h-full w-0.5 bg-current' />
                            <span className='absolute top-0 left-0 h-0.5 w-1/2 bg-current' />
                            <span className='absolute top-0 right-0 h-0.5 w-0 bg-current group-hover:w-1/2 transition-all duration-300 ease-out' />
                            <span className='absolute bottom-0 right-0 h-0.5 w-1/2 bg-current' />
                            <span className='absolute bottom-0 left-0 h-0.5 w-0 bg-current group-hover:w-1/2 transition-all duration-300 ease-out' />
                            <span className='relative z-10'>Send Message</span>
                            <Send size={14} className='relative z-10' />
                        </button>
                    </div>

                </div>
            </div>

        </div>
    )
}