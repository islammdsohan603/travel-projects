import React from "react";
import DestinationCard from "./DestinationCard";
import { Button } from "@heroui/react";
import Link from "next/link";

const DestinationHomePage = async () => {

  const res = await fetch("http://localhost:5000/destinations", {
    cache: "no-store",
  });

  const data = await res.json();

  const fiveData = data.slice(0, 4);

  return (
    <div className="bg-linear-to-bl from-slate-950 via-zinc-900 to-slate-950 ">
        <section className="w-11/12 max-w-7xl mx-auto py-20">

      {/* HEADER */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">

        <div>
          <h1 className="text-4xl md:text-5xl font-black text-white ">
            Featured Destinations
          </h1>

          <p className="text-slate-400 mt-4 text-lg">
            Handpicked travel experiences for adventure seekers.
          </p>
        </div>

        <Link href="/adddestinations">
          <button className="bg-linear-to-r from-orange-500 to-red-500 hover:scale-105 transition-transform duration-300 text-white px-6 py-2 cursor-pointer rounded-full font-semibold shadow-2xl hover:shadow-red-500/30">
  View All Destinations
</button>
        </Link>

      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">

        {fiveData.map((dest) => (
          <DestinationCard
            key={dest._id}
            dest={dest}
          />
        ))}

      </div>

    </section>

  </div>
  );
};

export default DestinationHomePage;