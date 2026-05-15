"use client";

import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { authClient } from "@/app/lib/auth-client";

const CancelBookingButton = ({ id }) => {

  const router = useRouter();

  const handleDelete = async () => {

    const {data:tokenData} = await authClient.token();

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/bookings/${id}`,
      {
        method: "DELETE",
        headers: {
          authorization: `Bearer ${tokenData?.token}`
        }
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
