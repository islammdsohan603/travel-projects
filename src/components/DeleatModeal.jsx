"use client";

import { AlertDialog, Button } from "@heroui/react";
import { useRouter } from "next/navigation";

const DeleatModeal = ({ id }) => {
  const router = useRouter();

  const handleDelete = async () => {
    const res = await fetch(
      `http://localhost:5000/destinations/${id}`,
      {
        method: "DELETE"
      }
    );

    const data = await res.json();

 
    
    if (data.deletedCount > 0) {
      alert("Deleted successfully");

      router.push("/");  
      router.refresh();   
    } else {
      alert("Something went wrong");
    }
  };

  return (
    <AlertDialog>
      <Button className="bg-red-500 text-white px-5 py-2 rounded-xl">
        Delete
      </Button>

      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog>
            <AlertDialog.CloseTrigger />

            <AlertDialog.Header>
              <AlertDialog.Heading>Delete Travel</AlertDialog.Heading>
            </AlertDialog.Header>

            <AlertDialog.Body>
              Are you sure?
            </AlertDialog.Body>

            <AlertDialog.Footer>
              <Button slot="close">Cancel</Button>

              <Button
                 
                variant="danger"
                onClick={handleDelete}
              >
                Delete
              </Button>
            </AlertDialog.Footer>

          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
};

export default DeleatModeal;