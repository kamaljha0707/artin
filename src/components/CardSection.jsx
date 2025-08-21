import React from 'react'
import { FaMapMarkerAlt } from "react-icons/fa";
import hotel1 from '../assets/hotel-1.png'
import hotel2 from '../assets/hotel-2.png'
import hotel3 from '../assets/hotel-3.png'
import hotel4 from '../assets/hotel-4.png'
import hotel5 from '../assets/hotel-5.png'

function CardSection() {
    const hotels = [
    {
      id: 1,
      title: "Luxury Beach Resort",
      tag: "Short Term",
      price: "$120 / night",
      location: "Goa, India",
      img: hotel1,
    },
    {
      id: 2,
      title: "City View Apartment",
      tag: "Month to Month",
      price: "$900 / month",
      location: "Mumbai, India",
     img: hotel2,
    },
    {
      id: 3,
      title: "Cozy Mountain Stay",
      tag: "Long Term",
      price: "$600 / month",
      location: "Manali, India",
      img: hotel3,
    },
    {
      id: 4,
      title: "Business Suite",
      tag: "Month to Month",
      price: "$1100 / month",
      location: "Bangalore, India",
      img: hotel4,
    },
    {
      id: 5,
      title: "Romantic Villa",
      tag: "Short Term",
      price: "$150 / night",
      location: "Jaipur, India",
     img: hotel5,
    },
  ];

  return (
    <section className="w-full  px-4 lg:px-12 2xl:px-96 py-12 bg-[#F9FAFB]">
    

      {/* Grid of 5 columns */}
      <div className="grid cursor-pointer w-full  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {hotels.map((hotel) => (
          <div
            key={hotel.id}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition"
          >
            {/* Image */}
            <div className="h-40 w-full overflow-hidden">
              <img
                src={hotel.img}
                alt={hotel.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Card Content */}
            <div className="p-4">
              {/* Tag */}
              <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800 mb-3">
                {hotel.tag}
              </span>

              {/* Title */}
              <h3 className="text-lg font-semibold text-gray-800">
                {hotel.title}
              </h3>

              {/* Price */}
              <p className="text-[#021E0E] font-bold mt-2">{hotel.price}</p>

              {/* Location */}
              <div className="flex items-center text-gray-500 text-sm mt-2">
                <FaMapMarkerAlt className="mr-1" />
                {hotel.location}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default CardSection