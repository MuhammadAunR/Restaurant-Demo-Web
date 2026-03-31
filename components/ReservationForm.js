'use client'
import React, { useState } from 'react'
import { MapPin, Phone, Clock, ChevronDown, Minus, Plus, CheckCircle } from 'lucide-react'

const diningTypes = [
  { type: 'Fine', price: 500, desc: 'Elegant plating & curated sushi experience' },
  { type: 'Gold', price: 1000, desc: 'Premium ingredients & personalized service' },
  { type: 'Luxury', price: 1500, desc: 'Private dining with a dedicated chef' },
]

const timeSlots = [
  '10:00 - 10:30 AM', '10:30 - 11:00 AM',
  '11:00 - 11:30 AM', '12:00 - 12:30 PM',
  '06:00 - 06:30 PM', '07:00 - 07:30 PM',
  '08:00 - 08:30 PM', '09:00 - 09:30 PM',
]

const inputClass = 'w-full bg-transparent border-b border-primary/30 focus:border-primary outline-none px-0 py-2.5 text-white/80 text-sm transition-colors duration-200 placeholder:text-white/30'
const labelClass = 'text-white/50 text-xs uppercase tracking-widest font-heading'

export default function ReservationForm() {
  const [form, setForm] = useState(
    {
      fullName: '',
      phone: '',
      email: '',
      date: '',
      time: '',
      people: 2,
      note: '',
      diningType: '',
    })
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setForm(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }))
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }))
  }

  const adjustPeople = (delta) => {
    setForm(prev => ({ ...prev, people: Math.min(20, Math.max(1, prev.people + delta)) }))
  }

  const validate = () => {
    const e = {}
    if (!form.fullName.trim()) e.fullName = 'Required'
    if (!form.phone.trim()) e.phone = 'Required'
    if (!form.date) e.date = 'Required'
    if (!form.time) e.time = 'Required'
    if (!form.diningType) e.diningType = 'Please select a dining type'
    return e
  }

  const handleSubmit = () => {
    const e = validate()
    if (Object.keys(e).length > 0) { setErrors(e); return }
    setSubmitted(true)
  }

  // ── Success Screen ──
  if (submitted) {
    return (
      <div className='min-h-screen bg-mist-900 flex items-center justify-center px-6'>
        <div className='flex flex-col items-center gap-6 text-center max-w-md'>
          <div className='w-20 h-20 rounded-full border-2 border-primary flex items-center justify-center'>
            <CheckCircle size={40} className='text-primary' />
          </div>
          <div className='flex flex-col gap-2'>
            <span className='font-stylish text-2xl text-primary'>Thank You</span>
            <h2 className='font-heading text-3xl font-bold uppercase tracking-widest text-primarylight)'>
              Reservation Confirmed
            </h2>
          </div>
          <div className='flex items-center gap-3'>
            <span className='h-px w-12 bg-primary/40'></span>
            <span className='w-1.5 h-1.5 rotate-45 bg-primary'></span>
            <span className='h-px w-12 bg-primary/40'></span>
          </div>
          <p className='text-white/60 leading-7'>
            We have received your reservation for <span className='text-primary'>{form.people} guest{form.people > 1 ? 's' : ''}</span> on <span className='text-primary'>{form.date}</span> at <span className='text-primary'>{form.time}</span>. We look forward to welcoming you.
          </p>
          <div className='border border-primary/20 p-5 w-full text-left flex flex-col gap-2'>
            <p className='text-white/40 text-xs uppercase tracking-widest font-heading mb-1'>Booking Summary</p>
            {[
              ['Name', form.fullName],
              ['Phone', form.phone],
              ['Dining', `${form.diningType} — $${diningTypes.find(d => d.type === form.diningType)?.price}`],
              ['People', form.people],
              ['Note', form.note || '—'],
            ].map(([k, v]) => (
              <div key={k} className='flex justify-between text-sm'>
                <span className='text-white/40'>{k}</span>
                <span className='text-white/80'>{v}</span>
              </div>
            ))}
          </div>
          <button
            onClick={() => { setSubmitted(false); setForm({ fullName: '', phone: '', email: '', date: '', time: '', people: 2, note: '', vaccinePass: false, diningType: '' }) }}
            className='text-primary text-sm uppercase tracking-widest border-b border-primary/40 hover:border-primary transition-colors duration-200'
          >
            Make Another Reservation
          </button>
        </div>
      </div>
    )
  }

  // ── Main Form ──
  return (
    <section className='min-h-screen bg-mist-900 text-white py-16 px-6 lg:px-20'>
      <div className='max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start'>

        {/* ── Left — Restaurant Info ── */}
        <div className='flex flex-col gap-10 lg:sticky lg:top-24'>

          <div className='flex flex-col gap-3'>
            <span className='font-stylish text-2xl text-primary'>Welcome to</span>
            <h1 className='font-heading text-4xl xl:text-5xl font-bold uppercase tracking-widest text-primarylight)'>
              DMR Sushi
            </h1>
            <div className='flex items-center gap-3 mt-1'>
              <span className='h-px w-12 bg-primary/40'></span>
              <span className='w-1.5 h-1.5 rotate-45 bg-primary'></span>
              <span className='h-px w-12 bg-primary/40'></span>
            </div>
            <p className='text-white/50 leading-7 mt-2 text-sm'>
              Reserve your table at DMR Sushi and experience the finest Japanese cuisine in the heart of Europe. Every seat is a front row to culinary artistry.
            </p>
          </div>

          {/* Info Cards */}
          <div className='flex flex-col gap-4'>
            {[
              { icon: <MapPin size={18} />, label: 'Location', value: '123 Old Town Street, Vienna, Austria' },
              { icon: <Phone size={18} />, label: 'Phone', value: '+43 1 234 5678' },
              { icon: <Clock size={18} />, label: 'Hours', value: 'Mon – Sun: 12:00 PM – 11:00 PM' },
            ].map(({ icon, label, value }) => (
              <div key={label} className='flex items-start gap-4 border border-primary/15 p-4 hover:border-primary/40 transition-colors duration-300'>
                <span className='text-primary mt-0.5 shrink-0'>{icon}</span>
                <div>
                  <p className='text-white/40 text-xs uppercase tracking-widest font-heading'>{label}</p>
                  <p className='text-white/75 text-sm mt-0.5'>{value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Dining Type Selector */}
          <div className='flex flex-col gap-3'>
            <p className={labelClass}>
              Select Dining Type <span className='text-primary'>*</span>
            </p>
            {errors.diningType && <p className='text-red-400 text-xs'>{errors.diningType}</p>}
            <div className='flex flex-col gap-3'>
              {diningTypes.map(({ type, price, desc }) => (
                <button
                  key={type}
                  onClick={() => { setForm(prev => ({ ...prev, diningType: type })); setErrors(prev => ({ ...prev, diningType: '' })) }}
                  className={`text-left p-4 border transition-all duration-200 ${form.diningType === type ? 'border-primary bg-primary/10' : 'border-primary/20 hover:border-primary/50'}`}
                >
                  <div className='flex justify-between items-center'>
                    <span className={`font-heading font-semibold uppercase tracking-wider text-sm ${form.diningType === type ? 'text-primary' : 'text-white/70'}`}>
                      {type} Dining
                    </span>
                    <span className='text-primary font-heading font-bold'>${price}</span>
                  </div>
                  <p className='text-white/40 text-xs mt-1'>{desc}</p>
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* ── Right — Form ── */}
        <div className='bg-mist-800 border border-primary/15 p-8 flex flex-col gap-7 h-fit min-h-screen'>

          <div className='flex flex-col gap-1'>
            <span className='font-stylish text-xl text-primary'>Book a Table</span>
            <h2 className='font-heading text-2xl font-bold uppercase tracking-widest text-primarylight)'>
              Reservation
            </h2>
          </div>

          {/* Full Name */}
          <div className='flex flex-col gap-1.5'>
            <label className={labelClass}>Full Name <span className='text-primary'>*</span></label>
            <input type='text' name='fullName' value={form.fullName} onChange={handleChange} placeholder='John Doe' className={inputClass} />
            {errors.fullName && <p className='text-red-400 text-xs'>{errors.fullName}</p>}
          </div>

          {/* Phone */}
          <div className='flex flex-col gap-1.5'>
            <label className={labelClass}>Phone Number <span className='text-primary'>*</span></label>
            <input type='tel' name='phone' value={form.phone} onChange={handleChange} placeholder='+1 234 567 890' className={inputClass} />
            {errors.phone && <p className='text-red-400 text-xs'>{errors.phone}</p>}
          </div>

          {/* Email */}
          <div className='flex flex-col gap-1.5'>
            <label className={labelClass}>Email</label>
            <input type='email' name='email' value={form.email} onChange={handleChange} placeholder='john@example.com' className={inputClass} />
          </div>

          {/* Date & Time — side by side */}
          <div className='grid grid-cols-2 gap-6'>
            <div className='flex flex-col gap-1.5'>
              <label className={labelClass}>Date <span className='text-primary'>*</span></label>
              <input type='date' name='date' value={form.date} onChange={handleChange} className={`${inputClass} [color-scheme:dark]`} />
              {errors.date && <p className='text-red-400 text-xs'>{errors.date}</p>}
            </div>
            <div className='flex flex-col gap-1.5'>
              <label className={labelClass}>Time <span className='text-primary'>*</span></label>
              <div className='relative'>
                <select name='time' value={form.time} onChange={handleChange} className={`${inputClass} appearance-none cursor-pointer pr-6`}>
                  <option value='' disabled className='bg-mist-800'>Select slot</option>
                  {timeSlots.map(slot => (
                    <option key={slot} value={slot} className='bg-mist-800'>{slot}</option>
                  ))}
                </select>
                <ChevronDown size={14} className='absolute right-0 top-3 text-white/40 pointer-events-none' />
              </div>
              {errors.time && <p className='text-red-400 text-xs'>{errors.time}</p>}
            </div>
          </div>

          {/* People Counter */}
          <div className='flex flex-col gap-2'>
            <label className={labelClass}>Number of Guests <span className='text-primary'>*</span></label>
            <div className='flex items-center gap-5 pt-1'>
              <button onClick={() => adjustPeople(-1)} className='w-8 h-8 border border-primary/40 flex items-center justify-center text-primary hover:bg-primary/10 transition-colors duration-200'>
                <Minus size={14} />
              </button>
              <span className='font-heading text-xl font-semibold text-primary w-6 text-center'>{form.people}</span>
              <button onClick={() => adjustPeople(1)} className='w-8 h-8 border border-primary/40 flex items-center justify-center text-primary hover:bg-primary/10 transition-colors duration-200'>
                <Plus size={14} />
              </button>
              <span className='text-white/40 text-xs uppercase tracking-widest'>
                {form.people === 1 ? 'Guest' : 'Guests'} · Max 20
              </span>
            </div>
          </div>

         

          {/* Branch */}
          <div className='flex items-center gap-3 border-t border-primary/10 pt-15'>
            <MapPin size={14} className='text-primary shrink-0' />
            <span className='text-white/40 text-xs uppercase tracking-widest'>Branch — DMR Sushi Main, Vienna</span>
          </div>

          {/* Submit */}
          <button
            onClick={handleSubmit}
            className='relative uppercase font-heading font-semibold tracking-widest text-lg px-5 py-3 cursor-pointer overflow-hidden transition-all duration-300 ease-linear text-primary bg-primary/10 hover:bg-transparent group w-full'
          >
            <span className='absolute top-0 left-0 h-full w-0.5 bg-current'></span>
            <span className='absolute top-0 right-0 h-full w-0.5 bg-current'></span>
            <span className='absolute top-0 left-0 h-0.5 w-1/2 bg-current'></span>
            <span className='absolute top-0 right-0 h-0.5 w-0 bg-current group-hover:w-1/2 transition-all duration-300 ease-out'></span>
            <span className='absolute bottom-0 right-0 h-0.5 w-1/2 bg-current'></span>
            <span className='absolute bottom-0 left-0 h-0.5 w-0 bg-current group-hover:w-1/2 transition-all duration-300 ease-out'></span>
            <span className='relative z-10'>Confirm Reservation</span>
          </button>

        </div>
      </div>
    </section>
  )
}