import React from 'react'
import Image from 'next/image'
import { MapPin, CalendarDays, Wallet, Users, ArrowRight } from 'lucide-react'

const BannerPage = () => {
  return (
    <section className="relative overflow-hidden">
      
      {/* HERO SECTION */}
      <div className="relative h-[100vh] w-full">

        {/* Background Image */}
        <Image
          src="/assets/Banner.png"
          alt="Travel Banner"
          fill
          priority
          className="object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60 z-10" />

        {/* Gradient Glow */}
        <div className="absolute top-0 left-0 w-full h-full bg-linear-to-r from-black/70 via-black/40 to-transparent z-10" />

        {/* Content */}
        <div className="relative z-20 h-full flex items-center">
          <div className="w-11/12 max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center">

            {/* LEFT CONTENT */}
            <div className="text-white space-y-8">

              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-5 py-2 rounded-full">
                <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse"></span>
                <p className="text-sm tracking-wide">
                  Explore The World With Confidence
                </p>
              </div>

              <div className="space-y-6">
                <h1 className="text-5xl md:text-7xl font-black leading-tight">
                  Discover Your
                  <span className="block text-orange-400">
                    Next Adventure
                  </span>
                </h1>

                <p className="text-lg md:text-xl text-gray-200 max-w-2xl leading-relaxed">
                  Explore breathtaking destinations, luxury experiences,
                  and unforgettable journeys crafted specially for modern
                  travelers around the world.
                </p>
              </div>

              {/* BUTTONS */}
              <div className="flex flex-wrap gap-5">

                <button className="group px-8 py-4 bg-orange-500 hover:bg-orange-600 rounded-2xl text-white font-semibold transition-all duration-300 shadow-[0_10px_30px_rgba(249,115,22,0.4)] hover:scale-105 cursor-pointer">
                  <span className="flex items-center gap-2">
                    Explore Tours
                    <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" size={18} />
                  </span>
                </button>

                <button className="px-8 py-4 border border-white/30 bg-white/10 backdrop-blur-md hover:bg-white hover:text-black rounded-2xl font-semibold transition-all duration-300 cursor-pointer">
                  View Destinations
                </button>
              </div>

              {/* STATS */}
              <div className="flex flex-wrap gap-8 pt-6">

                <div>
                  <h2 className="text-3xl font-bold text-orange-400">15K+</h2>
                  <p className="text-gray-300">Happy Travelers</p>
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-orange-400">120+</h2>
                  <p className="text-gray-300">Destinations</p>
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-orange-400">4.9★</h2>
                  <p className="text-gray-300">Client Rating</p>
                </div>

              </div>
            </div>

          </div>
        </div>

        {/* SEARCH BOX */}
        <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 z-30 w-11/12 max-w-6xl">

          <div className="bg-white/90 backdrop-blur-xl border border-white/20 rounded-[30px] shadow-2xl p-6 md:p-8">

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 items-center">

              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="bg-orange-100 p-3 rounded-2xl">
                  <MapPin className="text-orange-500" size={22} />
                </div>

                <div>
                  <h3 className="font-bold text-gray-900">Location</h3>
                  <p className="text-gray-500 text-sm">
                    Address, City or ZIP
                  </p>
                </div>
              </div>

              {/* Date */}
              <div className="flex items-start gap-4">
                <div className="bg-orange-100 p-3 rounded-2xl">
                  <CalendarDays className="text-orange-500" size={22} />
                </div>

                <div>
                  <h3 className="font-bold text-gray-900">Date</h3>
                  <p className="text-gray-500 text-sm">
                    Anytime / 3 Days
                  </p>
                </div>
              </div>

              {/* Budget */}
              <div className="flex items-start gap-4">
                <div className="bg-orange-100 p-3 rounded-2xl">
                  <Wallet className="text-orange-500" size={22} />
                </div>

                <div>
                  <h3 className="font-bold text-gray-900">Budget</h3>
                  <p className="text-gray-500 text-sm">
                    $500 - $2000
                  </p>
                </div>
              </div>

              {/* People */}
              <div className="flex items-start gap-4">
                <div className="bg-orange-100 p-3 rounded-2xl">
                  <Users className="text-orange-500" size={22} />
                </div>

                <div>
                  <h3 className="font-bold text-gray-900">People</h3>
                  <p className="text-gray-500 text-sm">
                    1 - 10 People
                  </p>
                </div>
              </div>

              {/* BUTTON */}
              <button className="h-full min-h-[70px] bg-orange-500 hover:bg-orange-600 text-white rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-[1.02] shadow-lg cursor-pointer">
                Search Now
              </button>

            </div>
          </div>
        </div>
      </div>

      {/* EXTRA SPACE FOR FLOATING CARD */}
      <div className="h-32 bg-slate-50"></div>
    </section>
  )
}

export default BannerPage