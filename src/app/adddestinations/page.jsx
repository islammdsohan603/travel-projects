import DestinationCard from "@/components/homepage/DestinationCard";

const DestinationsPage = async () => {

  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/destinations`, {
    cache: "no-store",
  });

  const data = await res.json();

  return (
    <div className="bg-black">
        <section className="min-h-screen bg-linear-to-br from-slate-950 via-slate-900 to-slate-950 py-20">

      <div className="w-11/12 max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto">

          <h1 className="text-5xl font-black text-white">
            Explore All Destinations
          </h1>

          <p className="text-slate-400 mt-5 text-lg">
            Find your next adventure with our curated selection of
            premium travel destinations around the world.
          </p>

        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

          {data.map((dest) => (
            <DestinationCard
              key={dest._id}
              dest={dest}
            />
          ))}

        </div>

      </div>

    </section>
  </div>
  );
};

export default DestinationsPage;
