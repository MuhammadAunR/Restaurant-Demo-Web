import React from 'react'

const stats = [
  { value: "12+", label: "Years of Mastery" },
  { value: "340+", label: "Signature Dishes" },
  { value: "18K+", label: "Happy Guests" },
  { value: "6", label: "Award Wins" },
]

const AboutUs = () => {
  return (
    <section className='bg-mist-900 absolute w-full overflow-hidden text-white top-0'>

      <div className='absolute top-0 left-0 w-64 h-64 md:w-96 md:h-96 rounded-full bg-primary/5 blur-3xl pointer-events-none' />
      <div className='absolute bottom-0 right-0 w-56 h-56 md:w-80 md:h-80 rounded-full bg-primary/5 blur-3xl pointer-events-none' />

      <div className='relative z-10 flex flex-col items-center gap-3 pt-16 md:pt-24 pb-10 md:pb-16 px-6 text-center'>
        <span className='font-stylish text-xl md:text-2xl text-primary tracking-wide'>
          About Us
        </span>

        <div className='flex items-center gap-3'>
          <span className='h-px w-12 bg-primary/50'></span>
          <span className='w-1.5 h-1.5 rotate-45 bg-primary'></span>
          <span className='h-px w-12 bg-primary/50'></span>
        </div>

        <h1 className='font-heading text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-widest text-primarylight) mt-2'>
          Our Story
        </h1>
        <p className='text-white/50 text-xs sm:text-sm tracking-widest uppercase'>
          A journey of craft, passion & luxury
        </p>
      </div>

      <div className='relative z-10 max-w-7xl mx-auto px-6 sm:px-10 pb-16 md:pb-24'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center'>

          <div className='relative h-72 sm:h-96 lg:h-145'>

            <div className='absolute top-0 left-0 w-44 sm:w-60 lg:w-72 h-60 sm:h-80 lg:h-96 overflow-hidden'>
              <div className='absolute inset-0 ring-1 ring-primary/30 z-10 pointer-events-none' />
              <img
                src='/assets/chef-1.webp'
                alt='Head Chef'
                className='w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700'
              />
            </div>

            <div className='absolute top-6 lg:top-10 right-0 w-28 sm:w-40 lg:w-52 h-32 sm:h-44 lg:h-52 overflow-hidden'>
              <div className='absolute inset-0 ring-1 ring-primary/30 z-10 pointer-events-none' />
              <img
                src='/assets/chef-2.webp'
                alt='Kitchen'
                className='w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700'
              />
            </div>

            <div className='hidden sm:block absolute bottom-0 right-6 lg:right-8 w-28 sm:w-40 lg:w-52 h-32 sm:h-44 lg:h-52 overflow-hidden'>
              <div className='absolute inset-0 ring-1 ring-primary/30 z-10 pointer-events-none' />
              <img
                src='/assets/chef-3.webp'
                alt='Sushi craft'
                className='w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700'
              />
            </div>

            <div className='absolute bottom-0 left-0 bg-mist-800 border border-primary/30 px-4 sm:px-6 py-3 sm:py-4'>
              <p className='font-stylish text-primary text-base sm:text-lg'>Since 2012</p>
              <p className='text-white/60 text-xs uppercase tracking-widest mt-1'>Serving Excellence</p>
            </div>

          </div>

          <div className='flex flex-col gap-6 lg:gap-8'>

            <div className='flex flex-col gap-4 lg:gap-5'>
              <p className='text-white/75 leading-7 lg:leading-8 text-sm sm:text-base'>
                At <span className='text-primary font-semibold'>DMR Sushi</span>, our story began
                with a single passion — to bring the art of authentic Japanese sushi to the heart of Europe.
                Founded by Chef Damir, a culinary master trained in the streets of Tokyo and the fine dining
                rooms of Paris, our restaurant was built on the belief that food is not just nourishment —
                it is an experience, a memory, a moment shared.
              </p>
              <p className='text-white/75 leading-7 lg:leading-8 text-sm sm:text-base'>
                Every roll we craft carries decades of culinary wisdom and an obsession with quality. We
                source only the freshest ingredients — from wild-caught salmon flown in weekly to hand-picked
                seasonal vegetables — because our guests deserve nothing less than perfection on every plate.
              </p>
              <p className='text-white/75 leading-7 lg:leading-8 text-sm sm:text-base'>
                We are not just a restaurant. We are a destination for those who appreciate the finer things
                in life — where every visit feels personal, refined, and truly unforgettable.
              </p>
            </div>

            <div className='flex items-center gap-4'>
              <span className='h-px flex-1 bg-primary/20'></span>
              <span className='w-1.5 h-1.5 rotate-45 bg-primary/50'></span>
              <span className='h-px flex-1 bg-primary/20'></span>
            </div>

            <div className='grid grid-cols-2 sm:grid-cols-4 gap-3 lg:gap-4'>
              {stats.map((stat) => (
                <div key={stat.label} className='flex flex-col items-center gap-1 border border-primary/20 py-3 lg:py-4 px-2 hover:border-primary/60 transition-colors duration-300'>
                  <span className='font-heading text-xl lg:text-2xl font-bold text-primary'>{stat.value}</span>
                  <span className='text-white/50 text-xs uppercase tracking-wider text-center'>{stat.label}</span>
                </div>
              ))}
            </div>



          </div>
        </div>
      </div>

      <div className='relative z-10 border-t border-b border-primary/20 py-8 lg:py-10 px-6 lg:px-10 bg-primary/5'>
        <div className='max-w-3xl mx-auto text-center flex flex-col items-center gap-4'>
          <span className='text-primary text-4xl lg:text-5xl font-stylish leading-none'>"</span>
          <p className='font-heading text-base sm:text-lg lg:text-xl italic text-white/80 leading-8 lg:leading-9'>
            Sushi is not just food — it is the story of the sea, the rice fields, and the hands
            that bring them together with love and precision.
          </p>
          <div className='flex items-center gap-3 mt-2'>
            <span className='h-px w-8 bg-primary/50'></span>
            <span className='text-primary text-xs sm:text-sm uppercase tracking-widest'>Chef Damir</span>
            <span className='h-px w-8 bg-primary/50'></span>
          </div>
        </div>
      </div>

    </section>
  )
}

export default AboutUs