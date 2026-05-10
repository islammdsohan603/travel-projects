import React from "react";
import Image from "next/image";
import {
  MapPin,
  CalendarDays,
  Wallet,
  Users,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const BannerPage = () => {
  return (
    <section className="relative overflow-hidden bg-slate-950">

      {/* HERO SECTION */}
      <div className="relative min-h-[850px] w-full pb-32">

        {/* BACKGROUND IMAGE */}
        <Image
          src="/assets/Banner.png"
          alt="Travel Banner"
          fill
          priority
          className="object-cover"
        />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/65 z-10" />

        {/* GRADIENT OVERLAY */}
        <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/50 to-transparent z-10" />

        {/* HERO CONTENT */}
        <div className="relative z-20 flex items-center min-h-[850px]">

          <div className="w-11/12 max-w-7xl mx-auto">

            <div className="max-w-3xl text-white">

              {/* TOP BADGE */}
              <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 px-5 py-3 rounded-full mb-8">

                <span className="w-2.5 h-2.5 rounded-full bg-orange-400 animate-pulse"></span>

                <p className="text-sm tracking-wider uppercase text-gray-200">
                  Explore The World With Confidence
                </p>

              </div>

              {/* HEADING */}
              <div className="space-y-6">

                <h1 className="text-5xl md:text-7xl font-black leading-tight">

                  Discover Your

                  <span className="block text-orange-400">
                    Next Adventure
                  </span>

                </h1>

                <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl">
                  Explore breathtaking destinations, luxury experiences,
                  and unforgettable journeys crafted specially for modern
                  travelers around the world.
                </p>

              </div>

              {/* BUTTONS */}
              <div className="flex flex-wrap gap-5 mt-10">

                <Link href={'/adddestinations'}>
                  
                  <button className="group px-8 py-4 bg-orange-500 hover:bg-orange-600 rounded-2xl text-white font-semibold transition-all duration-300 shadow-[0_10px_30px_rgba(249,115,22,0.45)] hover:scale-105">

                  <span className="flex items-center gap-2">

                    Explore Tours

                    <ArrowRight
                      size={18}
                      className="group-hover:translate-x-1 transition-transform duration-300"
                    />

                  </span>

                </button>

                  </Link>

                <Link href={'/adddestinations'}>
                 <button className="px-8 py-4 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md text-white font-semibold hover:bg-white hover:text-black transition-all duration-300">

                  View Destinations

                </button>
                  
                </Link>

              </div>

              {/* STATS */}
              <div className="flex flex-wrap gap-10 mt-14">

                <div>
                  <h2 className="text-3xl font-black text-orange-400">
                    15K+
                  </h2>

                  <p className="text-gray-300 mt-1">
                    Happy Travelers
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl font-black text-orange-400">
                    120+
                  </h2>

                  <p className="text-gray-300 mt-1">
                    Destinations
                  </p>
                </div>

                <div>
                  <h2 className="text-3xl font-black text-orange-400">
                    4.9★
                  </h2>

                  <p className="text-gray-300 mt-1">
                    Client Rating
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

        {/* SEARCH BOX */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-30 w-11/12 max-w-6xl">

         <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-30 w-[95%] max-w-6xl">

  <div className="bg-white/95 backdrop-blur-2xl border border-white/20 rounded-[24px] md:rounded-[35px] shadow-[0_20px_80px_rgba(0,0,0,0.25)] p-4 sm:p-5 md:p-8">

    <div className="grid grid-cols-1  sm:grid-cols-2 pb-12 lg:grid-cols-5 gap-5 md:gap-6 items-center">

      {/* LOCATION */}
      <div className="flex items-center gap-3 md:gap-4">

        <div className="bg-orange-100 p-3 md:p-4 rounded-2xl shrink-0">
          <MapPin className="text-orange-500" size={22} />
        </div>

        <div>
          <h3 className="font-bold text-gray-900 text-base md:text-lg">
            Location
          </h3>

          <p className="text-gray-500 text-xs sm:text-sm mt-1">
            Address, City or ZIP
          </p>
        </div>

      </div>

      {/* DATE */}
      <div className="flex items-center gap-3 md:gap-4">

        <div className="bg-orange-100 p-3 md:p-4 rounded-2xl shrink-0">
          <CalendarDays className="text-orange-500" size={22} />
        </div>

        <div>
          <h3 className="font-bold text-gray-900 text-base md:text-lg">
            Date
          </h3>

          <p className="text-gray-500 text-xs sm:text-sm mt-1">
            Anytime / 3 Days
          </p>
        </div>

      </div>

      {/* BUDGET */}
      <div className="flex items-center gap-3 md:gap-4">

        <div className="bg-orange-100 p-3 md:p-4 rounded-2xl shrink-0">
          <Wallet className="text-orange-500" size={22} />
        </div>

        <div>
          <h3 className="font-bold text-gray-900 text-base md:text-lg">
            Budget
          </h3>

          <p className="text-gray-500 text-xs sm:text-sm mt-1">
            $500 - $2000
          </p>
        </div>

      </div>

      {/* PEOPLE */}
      <div className="flex items-center gap-3 md:gap-4">

        <div className="bg-orange-100 p-3 md:p-4 rounded-2xl shrink-0">
          <Users className="text-orange-500" size={22} />
        </div>

        <div>
          <h3 className="font-bold text-gray-900 text-base md:text-lg">
            People
          </h3>

          <p className="text-gray-500 text-xs sm:text-sm mt-1">
            1 - 10 People
          </p>
        </div>

      </div>

      {/* BUTTON */}
      <button className="w-full h-[58px] md:h-[72px] bg-orange-500 hover:bg-orange-600 text-white rounded-2xl font-semibold text-base md:text-lg transition-all duration-300 hover:scale-[1.02] shadow-[0_10px_30px_rgba(249,115,22,0.35)]">

        Search Now

      </button>

    </div>

  </div>

</div>

        </div>

      </div>

      {/* SPACING FOR FLOATING SEARCH BOX */}
      <div className="h-40 bg-linear-to-br from-slate-950 via-slate-900 to-slate-950"></div>

    </section>
  );
};

export default BannerPage;