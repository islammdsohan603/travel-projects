import { CalendarDays, Clock3, MapPin } from 'lucide-react';
import React from 'react'

const DestinationDetailsPage = async ({ params }) => {

  const { id } = await params;

 

 const res = await fetch(`http://localhost:5000/destinations/${id}`, {
  cache: "no-store",
 });

 const data = await res.json();

 

  return (
    <div> 

<section className="min-h-screen bg-linear-to-br from-slate-950 via-slate-900 to-slate-950 py-20">
      <div className="w-11/12 max-w-7xl mx-auto">
        <div className="max-w-4xl mx-auto">
          <img
            src={data.image}
            alt={data.name}
            className="w-full h-[350px] md:h-[450px] object-cover rounded-[32px]"
          />
          <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-[32px] mt-8 p-8 shadow-2xl">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-3xl md:text-4xl font-black text-white">
                {data.name}
              </h1>
              <span className="bg-orange-500 text-white px-6 py-2 rounded-xl font-semibold">
                ${data.price}
              </span>
            </div>
            <div className="text-slate-300 space-y-4 text-lg">
              <p>{data.description}</p>
              <div className="flex items-center gap-2">
                <CalendarDays size={20} className="text-orange-400" />
                <span>{data.departureDate}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock3 size={20} className="text-orange-400" />
                <span>{data.duration}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={20} className="text-orange-400" />
                <span>{data.country}</span>
              </div>
              </div>


               <button className="mt-8 w-full bg-orange-500 cursor-pointer text-white py-3 rounded-xl font-bold hover:bg-orange-600 transition-colors duration-300">
        Bookings Now
      </button>

          </div>
        </div>
      </div>
    </section>

    </div>
  )
}

export default DestinationDetailsPage