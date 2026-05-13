

import BookingButton from '@/components/BookingButton';
import DeleatModeal from '@/components/DeleatModeal';
import EditModalPage from '@/components/EditModalPage';
import { 
  ArrowLeftFromLine, 
  CalendarDays, 
  Clock3, 
  MapPin, 
  Star, 
  CheckCircle2, 
  ShieldCheck 
} from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const DestinationDetailsPage = async ({ params }) => {
  const { id } = await params;

  const res = await fetch(`http://localhost:5000/destinations/${id}`, {
    cache: "no-store",
  });

  const data = await res.json();

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-orange-500/30"> 
      {/* Background Decorative Elements */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-orange-600/20 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-600/10 blur-[120px]" />
      </div>

      <section className="py-12 md:py-20 px-4">
        <div className="max-w-5xl mx-auto">
          
          {/* Top Navigation & Actions */}
          <div className='flex items-center justify-between mb-8'>
            <Link 
              href="/" 
              className='group flex items-center gap-2 text-slate-400 hover:text-white transition-all duration-300'
            >
              <ArrowLeftFromLine className="group-hover:-translate-x-1 transition-transform" />
              <span className="font-medium">Back to Home</span>
            </Link>

            <div className='flex items-center gap-3'>
              <div>
                <EditModalPage id={id}/>
              </div>
               
              <div>
                 <DeleatModeal id={id} />
                </div>
              
            </div>
          </div>

          {/* Hero Image Section */}
          <div className="relative h-[300px] md:h-[500px] w-full group">
            <img
              src={data.image}
              alt={data.name}
              className="w-full h-full object-cover rounded-[40px] shadow-2xl transition-transform duration-700 group-hover:scale-[1.01]"
            />
            <div className="absolute top-6 right-6">
              <span className="bg-red text-white px-6 py-3 rounded-2xl font-bold text-xl shadow-lg backdrop-blur-md bg-orange-500/90">
                ${data.price}
              </span>
            </div>
          </div>

          {/* Content Card */}
          <div className="relative mt-[-40px] md:mt-[-60px] bg-slate-900/60 backdrop-blur-2xl border border-white/10 rounded-[40px] p-6 md:p-12 shadow-2xl">
            
            {/* Header Info */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
              <div>
                <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-2">
                  {data.name}
                </h1>
                <div className="flex items-center gap-4 text-slate-400">
                  <div className="flex items-center gap-1 text-orange-400">
                    <Star size={18} fill="currentColor" />
                    <span className="font-bold text-white">{data.rating}</span>
                    <span className="text-sm font-normal">({data.reviews} Reviews)</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin size={18} className="text-orange-400" />
                    <span>{data.country}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Info Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5">
                <div className="p-3 rounded-xl bg-orange-500/20 text-orange-400">
                  <CalendarDays size={24} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase font-bold">Departure</p>
                  <p className="text-white font-semibold">{data.departureDate}</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5">
                <div className="p-3 rounded-xl bg-orange-500/20 text-orange-400">
                  <Clock3 size={24} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase font-bold">Duration</p>
                  <p className="text-white font-semibold">{data.duration}</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5">
                <div className="p-3 rounded-xl bg-orange-500/20 text-orange-400">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase font-bold">Guarantee</p>
                  <p className="text-white font-semibold">Secure Booking</p>
                </div>
              </div>
            </div>

            {/* Overview */}
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-white mb-4">Overview</h2>
              <p className="text-slate-400 leading-relaxed text-lg">
                {data.overview}
              </p>
            </div>

            {/* Highlights & Features Grid */}
            <div className="grid md:grid-cols-2 gap-10">
              <div>
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <Star size={20} className="text-orange-400" /> Highlights
                </h3>
                <ul className="space-y-3">
                  {data.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-slate-400">
                      <CheckCircle2 size={18} className="text-orange-500 mt-1 shrink-0" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <ShieldCheck size={20} className="text-orange-400" /> Key Features
                </h3>
                <ul className="space-y-3">
                  {data.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-slate-400">
                      <CheckCircle2 size={18} className="text-orange-500 mt-1 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Booking Button */}
            <BookingButton destination={data}/>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DestinationDetailsPage;
