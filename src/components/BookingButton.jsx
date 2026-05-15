"use client";

 
import { authClient } from "@/app/lib/auth-client";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const BookingButton = ({ destination }) => {

  const {data:session}=   authClient.useSession();

    


  const router = useRouter();

  const handleBooking = async () => {

    const bookingInfo = {
      name: destination.name,
      email: session?.user.email,
      image: destination.image,
      country: destination.country,
      departureDate: destination.departureDate,
      duration: destination.duration,
      price: destination.price,
      status: "Confirmed",
      bookingDate: new Date(),
    };

   
    const { data: tokenData } = await authClient.token();



    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/bookings`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization:`Bearer ${tokenData?.token}`
      },
      body: JSON.stringify(bookingInfo),
    });

    const data = await res.json();

    if (data.insertedId) {

      toast.success('Booking Successful!')

      setTimeout(() => {
        router.push(`/booking`);
      }, 1500);
    }
  };

  return (
    <button
      onClick={handleBooking}
      className="mt-12 w-full bg-orange-500 cursor-pointer hover:bg-orange-600 text-white py-4 rounded-2xl font-bold text-lg transition-all duration-300"
    >
      Book Your Experience Now
    </button>
  );
};

export default BookingButton;
