import CancelBookingButton from '@/components/ConcelBookingButton';
import { CalendarDays, Clock3, MapPin, Star } from 'lucide-react';
import Link from 'next/link';
import React from 'react'

const BookingPage = async () => {

  const res = await fetch(
    "http://localhost:5000/bookings",
    {
      cache: "no-store",
    }
  );

  const bookings = await res.json();

  if (!bookings || bookings.length === 0) {
    return (
      <div className='min-h-screen bg-slate-950 flex items-center justify-center px-4'>
        
        <div className='text-center max-w-lg'>
          
          <h1 className='text-5xl font-black text-white mb-4'>
            No Bookings Yet
          </h1>

          <p className='text-slate-400 text-lg'>
            Your booked destinations will appear here once you reserve your next adventure.
          </p>

          <Link href={'/adddestinations'} >
            <button className='bg-gray-700 px-6 py-2 rounded-3xl  mt-4 inline-block cursor-pointer text-white font-semibold hover:bg-gray-800 transition-colors duration-300'>Continue</button>
          </Link>
          
        </div>

      </div>
    );
  }

  return (

    <div className="min-h-screen bg-slate-950 text-white overflow-hidden">

      {/* Background Effects */}
      <div className="fixed inset-0 -z-10 overflow-hidden">

        <div className="absolute top-[-10%] left-[-10%] w-[35%] h-[35%] rounded-full bg-orange-500/20 blur-[140px]" />

        <div className="absolute bottom-[-10%] right-[-10%] w-[35%] h-[35%] rounded-full bg-cyan-500/20 blur-[140px]" />

      </div>

      <div className='max-w-7xl mx-auto px-4 md:px-8 py-14'>

        {/* Heading */}
        <div className='mb-14'>

          <span className='bg-orange-500/10 border border-orange-500/20 text-orange-400 px-5 py-2 rounded-full text-sm font-semibold'>
            Travel Dashboard
          </span>

          <h1 className="text-5xl md:text-7xl font-black mt-6 leading-tight">
            My Bookings
          </h1>

          <p className='text-slate-400 text-lg mt-4 max-w-2xl'>
            Manage and view all your upcoming luxury travel experiences in one beautiful dashboard.
          </p>

        </div>

        {/* Cards */}
        <div className="space-y-8">

          {
            bookings.map((booking) => (

              <div
                key={booking._id}
                className="group bg-white/5 border border-white/10 hover:border-orange-500/30 backdrop-blur-2xl rounded-[36px] overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-orange-500/10"
              >

                <div className='flex flex-col lg:flex-row'>

                  {/* Image */}
                  <div className='relative lg:w-[380px] overflow-hidden'>

                    <img
                      src={booking.image}
                      alt={booking.name}
                      className="w-full h-[280px] lg:h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Status */}
                    <div className='absolute top-5 left-5'>

                      <span className='bg-emerald-500/90 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg'>
                        {booking.status}
                      </span>

                    </div>

                    {/* Price */}
                    <div className='absolute bottom-5 right-5'>

                      <div className='bg-slate-950/80 backdrop-blur-xl px-5 py-3 rounded-2xl border border-white/10'>

                        <h3 className="text-cyan-400 text-3xl font-black">
                          ${booking.price}
                        </h3>

                      </div>

                    </div>

                  </div>

                  {/* Content */}
                  <div className='flex-1 p-8 md:p-10 flex flex-col justify-between'>

                    <div>

                      {/* Country */}
                      <div className='flex items-center gap-2 text-orange-400 mb-4'>

                        <MapPin size={18} />

                        <span className='font-medium'>
                          {booking.country}
                        </span>

                      </div>

                      {/* Title */}
                      <h2 className="text-3xl md:text-4xl font-black mb-6 leading-tight">
                        {booking.name}
                      </h2>

                      {/* Info Grid */}
                      <div className='grid sm:grid-cols-2 gap-5'>

                        <div className='bg-white/5 border border-white/5 rounded-2xl p-5'>

                          <div className='flex items-center gap-3 mb-2 text-orange-400'>
                            <CalendarDays size={20} />
                            <span className='font-semibold'>
                              Departure
                            </span>
                          </div>

                          <p className='text-slate-300'>
                            {booking.departureDate}
                          </p>

                        </div>

                        <div className='bg-white/5 border border-white/5 rounded-2xl p-5'>

                          <div className='flex items-center gap-3 mb-2 text-orange-400'>
                            <Clock3 size={20} />
                            <span className='font-semibold'>
                              Duration
                            </span>
                          </div>

                          <p className='text-slate-300'>
                            {booking.duration}
                          </p>

                        </div>

                      </div>

                      {/* Rating */}
                      <div className='flex items-center gap-2 mt-6 text-yellow-400'>

                        <Star size={18} fill='currentColor' />

                        <span className='font-semibold'>
                          Premium Destination
                        </span>

                      </div>

                    </div>

                    {/* Buttons */}
                    <div className='flex flex-col sm:flex-row gap-4 mt-10'>

                      <CancelBookingButton id={booking._id} />

                      <Link href={`/adddestinations`}>
                        <button className='bg-linear-to-r from-cyan-500 to-blue-500 hover:scale-[1.02] active:scale-[0.98]  cursor-pointer transition-all duration-300 px-8 py-4 rounded-2xl font-bold shadow-lg shadow-cyan-500/20'>
                         Countinue Traveling
                      </button>
                        
                      </Link>

                    </div>

                  </div>

                </div>

              </div>
            ))
          }

        </div>

      </div>

    </div>
  )
}

export default BookingPage