import { Button } from "@heroui/react";
import Link from "next/link";
import React from "react";
import { CalendarDays, Clock3, MapPin } from "lucide-react";

const DestinationCard = ({ dest }) => {
  const {
    _id,
    name,
    price,
    country,
    category,
    duration,
    departureDate,
    image,
     overview,
  } = dest;

  return (
    <div className="group overflow-hidden rounded-[28px] bg-white/5 border border-white/10 backdrop-blur-xl shadow-xl hover:shadow-orange-500/20 transition-all duration-500 hover:-translate-y-2">

      {/* IMAGE */}
      <div className="relative overflow-hidden h-[260px]">

        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />

        {/* CATEGORY */}
        <div className="absolute top-4 left-4 bg-orange-500 text-white text-sm px-4 py-1 rounded-full shadow-lg">
          {category}
        </div>

        {/* PRICE */}
        <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-md text-white px-4 py-2 rounded-xl">
          <span className="text-orange-400 font-bold text-lg">
            ${price}
          </span>
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-6 space-y-5">

        <div>
          <h2 className="text-2xl font-bold text-white line-clamp-1">
            {name}
          </h2>

          <div className="flex items-center gap-2 text-slate-400 mt-2">
            <MapPin size={16} />
            <p>{country}</p>
          </div>
        </div>

        {/* INFO */}
        <div className="flex items-center justify-between text-slate-300 text-sm">

          <div className="flex items-center gap-2">
            <Clock3 size={16} className="text-orange-400" />
            <span>{duration}</span>
          </div>

          <div className="flex items-center gap-2">
            <CalendarDays size={16} className="text-orange-400" />
            <span>{departureDate}</span>
          </div>

        </div>

        

        {/* BUTTON */}
        <Link href={`/adddestinations/${_id}`}>
          <button
           
            className="w-full cursor-pointer py-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-2xl"
          >
           Details
          </button>
        </Link>

      </div>
    </div>
  );
};

export default DestinationCard;