"use client";

import React from "react";
import { FloppyDisk } from "@gravity-ui/icons";
import {
  Button,
  Label,
  Modal,
  Surface,
  TextArea,
  TextField,
  Input,
  Description,
} from "@heroui/react";
import { authClient } from "@/app/lib/auth-client";

const EditModalPage =  ({id}) => {

const onSubmit = async (e) => {
     e.preventDefault();

    const formData = new FormData(e.currentTarget);
 const update_destination= Object.fromEntries(formData);
  console.log(update_destination)

   const {data:tokenData} = await authClient.token();

   const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/destinations/${id}`, {
  method: "PATCH",
  headers: {
    "Content-Type": "application/json",
    authorization:`Bearer ${tokenData?.token}`
  },
  body: JSON.stringify(update_destination),
});

const data = await res.json();

 if (data.modifiedCount > 0) {
  alert("Updated successfully");
  location.reload();
} else {
  alert("Something went wrong");
}


   }

 
  return (
    <Modal>
      {/* Trigger Button */}
      <Button
        slot="trigger"
        className="bg-slate-800 hover:bg-slate-700 text-white px-5 py-2 rounded-xl font-medium transition-all border border-slate-700 active:scale-95"
      >
        Edit
      </Button>

      <Modal.Backdrop>
        <Modal.Container placement="center">
          <Modal.Dialog className="sm:max-w-3xl">

            <Modal.CloseTrigger />

            {/* HEADER */}
            <Modal.Header>
              <Modal.Heading className="text-xl font-bold">
                Update Travel Destination
              </Modal.Heading>

              <Description className="text-slate-400">
                Modify destination details, pricing, and description.
              </Description>
            </Modal.Header>

            {/* BODY */}
            <Modal.Body className="p-6">
              <Surface className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xl">

                <form onSubmit={onSubmit} className="flex flex-col gap-6">

                  {/* GRID FIELDS */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                    {/* Name */}
                    <TextField name="name">
                      <Label>Name</Label>
                      <Input placeholder="Bali Paradise" />
                    </TextField>

                    {/* Country */}
                    <TextField name="country">
                      <Label>Country</Label>
                      <Input placeholder="Indonesia" />
                    </TextField>

                    {/* Category */}
                    <TextField name="category">
                      <Label>Category</Label>
                      <Input placeholder="Beach / Mountain / City" />
                    </TextField>

                    {/* Price */}
                    <TextField name="price">
                      <Label>Price</Label>
                      <Input type="number" placeholder="$1200" />
                    </TextField>

                    {/* Duration */}
                    <TextField name="duration">
                      <Label>Duration</Label>
                      <Input placeholder="7 Days / 6 Nights" />
                    </TextField>

                    {/* Date */}
                    <TextField name="departureDate">
                      <Label>Departure Date</Label>
                      <Input type="date" />
                    </TextField>
                  </div>

                  {/* IMAGE */}
                  <TextField name="image">
                    <Label>Image URL</Label>
                    <Input placeholder="https://image-url.com" />
                  </TextField>

                  {/* DESCRIPTION */}
                  <TextField name="description">
                    <Label>Description</Label>
                    <TextArea
                      placeholder="Write travel description..."
                      className="min-h-[120px]"
                    />
                  </TextField>

                  {/* ACTIONS */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-2">

                    <Button
                      type="submit"
                      className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-xl transition-all flex items-center gap-2"
                    >
                      <FloppyDisk />
                      Update Destination
                    </Button>

                    <Button
                      slot="close"
                      variant="secondary"
                      className="border border-white/20 text-black  hover:bg-white/10 px-6 py-3 rounded-xl"
                    >
                      Cancel
                    </Button>

                  </div>

                </form>

              </Surface>
            </Modal.Body>

          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}

export default EditModalPage;
