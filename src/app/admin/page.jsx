"use client";

import React from "react";
import { FloppyDisk } from "@gravity-ui/icons";

import {
  Button,
  Description,
  FieldError,
  Fieldset,
  Form,
  Input,
  Label,
  Surface,
  TextArea,
  TextField,
} from "@heroui/react";

const AddDestinationsPage = () => {

  const onSubmit = async (e) => {
    e.preventDefault();
     const formData = new FormData(e.currentTarget);

     const name = formData.get('name');
     const country = formData.get('country');
     const category = formData.get('category');
     const price = formData.get('price');
     const duration = formData.get('duration');
     const departureDate = formData.get('departureDate');
     const image = formData.get('image');
     overview: formData.get("description")

    
    
   const res = await fetch('http://localhost:5000/destinations', {
      method: 'POST',
      headers: {
        'Content-Type':'application/json'
      },

      body: JSON.stringify({
      name,
      country,
      category,
      price,
      duration,
      departureDate,
      image,
       overview ,
      })
   })
    
    const data = await res.json();

    if (data) {
      alert('added to db')
      //clear form
      e.target.reset();
    }
    else {
      alert('Something went wrong')
    }
    
     
    
  }

  return (
    <section className="min-h-screen bg-linear-to-br from-slate-950 via-slate-900 to-slate-950 py-16 px-4">

      <div className="max-w-5xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-black text-white">
            Add New Destination
          </h1>

          <p className="text-slate-400 mt-4 text-lg max-w-2xl mx-auto">
            Create a beautiful travel package with destination details,
            pricing, duration, and images.
          </p>
        </div>

        {/* FORM CARD */}
        <Surface className="rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl p-6 md:p-10">

          <Form onSubmit={onSubmit}>

            <Fieldset className="space-y-8">

              <div>
                <Fieldset.Legend className="text-3xl font-bold text-white">
                  Travel Package Details
                </Fieldset.Legend>

                <Description className="text-slate-400 mt-2">
                  Fill all required information carefully.
                </Description>
              </div>

              {/* GRID */}
              <Fieldset.Group className="grid grid-cols-1 md:grid-cols-2 gap-6">

                {/* Destination Name */}
                <TextField isRequired name="name">
                  <Label className="text-white mb-2">
                    Destination Name
                  </Label>

                  <Input
                    placeholder="e.g. Bali, Switzerland"
                    variant="secondary"
                    className="rounded-xl"
                  />

                  <FieldError />
                </TextField>

                {/* Country */}
                <TextField isRequired name="country">
                  <Label className="text-white mb-2">
                    Country
                  </Label>

                  <Input
                    placeholder="e.g. Indonesia"
                    variant="secondary"
                    className="rounded-xl"
                  />

                  <FieldError />
                </TextField>

                {/* Category */}
                <TextField isRequired name="category">
                  <Label className="text-white mb-2">
                    Category
                  </Label>

                  <Input
                    placeholder="Beach, Mountain, City"
                    variant="secondary"
                    className="rounded-xl"
                  />

                  <FieldError />
                </TextField>

                {/* Price */}
                <TextField isRequired name="price">
                  <Label className="text-white mb-2">
                    Price
                  </Label>

                  <Input
                    type="number"
                    placeholder="$1200"
                    variant="secondary"
                    className="rounded-xl"
                  />

                  <FieldError />
                </TextField>

                {/* Duration */}
                <TextField isRequired name="duration">
                  <Label className="text-white mb-2">
                    Duration
                  </Label>

                  <Input
                    placeholder="7 Days"
                    variant="secondary"
                    className="rounded-xl"
                  />

                  <FieldError />
                </TextField>

                {/* Departure Date */}
                <TextField isRequired name="departureDate">
                  <Label className="text-white mb-2">
                    Departure Date
                  </Label>

                  <Input
                    type="date"
                    variant="secondary"
                    className="rounded-xl"
                  />

                  <FieldError />
                </TextField>

              </Fieldset.Group>

              {/* IMAGE URL */}
              <TextField isRequired name="image">
                <Label className="text-white mb-2">
                  Image URL
                </Label>

                <Input
                  placeholder="https://example.com/image.jpg"
                  variant="secondary"
                  className="rounded-xl"
                />

                <FieldError />
              </TextField>

              {/* DESCRIPTION */}
              <TextField isRequired name="description">
                <Label className="text-white mb-2">
                  Description
                </Label>

                <TextArea
                  placeholder="Write a beautiful travel description..."
                  variant="secondary"
                  
                  className="rounded-2xl"
                />

                <FieldError />
              </TextField>

              {/* BUTTONS */}
              <Fieldset.Actions className="flex flex-col sm:flex-row gap-4 pt-4">

                <Button
                  type="submit"
                  className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-6 rounded-2xl transition-all duration-300 hover:scale-[1.02]"
                >
                  <FloppyDisk />
                  Save Destination
                </Button>

                <Button
                  type="reset"
                  variant="tertiary"
                  className="border border-black bg-black text-white hover:bg-white/10 rounded-2xl px-8 py-6"
                >
                  Cancel
                </Button>

              </Fieldset.Actions>

            </Fieldset>

          </Form>

        </Surface>

      </div>

    </section>
  );
};

export default AddDestinationsPage;