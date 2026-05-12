"use client";

import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const CancelBookingButton = ({ id }) => {

  const router = useRouter();

  const handleDelete = async () => {

    const res = await fetch(
      `http://localhost:5000/bookings/${id}`,
      {
        method: "DELETE",
      }
    );

    const data = await res.json();

    if (data.deletedCount > 0) {

      toast.success("Booking Cancelled Successfully");

      router.refresh();
    }
  };

  return (
    <button
      onClick={handleDelete}
      className='bg-red-500 cursor-pointer px-5 py-3 rounded-2xl font-bold hover:bg-red-600'
    >
      Cancel
    </button>
  )
}

export default CancelBookingButton