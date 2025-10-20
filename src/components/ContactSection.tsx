'use client'
import { useState } from 'react'
import { MapPin, Phone, Clock } from "lucide-react";

type LocationData = {
  phone: string;
  schedule: string;
  mapsLink: string;
};

const locations: Record<"Buenos Aires" | "Puan" | "Darregueira", LocationData> = {
  "Buenos Aires": {
    phone: "+54 11 1234-5678",
    schedule: "Lunes a Viernes, 9 a 18hs",
    mapsLink: "https://maps.google.com/buenosaires",
  },
  Puan: {
    phone: "+54 2923 456789",
    schedule: "Lunes a Sábados, 8 a 20hs",
    mapsLink: "https://maps.google.com/puan",
  },
  Darregueira: {
    phone: "+54 2924 987654",
    schedule: "Lunes a Viernes, 10 a 17hs",
    mapsLink: "https://maps.google.com/darregueira",
  },
};

type LocationKey = keyof typeof locations;

export default function ContactSection() {
  const [selectedLocation, setSelectedLocation] = useState<LocationKey>("Buenos Aires");

  const current = locations[selectedLocation];

  return (
    <section id="contact" className="max-w-md mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6 transition">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 text-center">
        📍 Sucursales
      </h2>

      <select
        value={selectedLocation}
        onChange={(e) => setSelectedLocation(e.target.value as LocationKey)}
        className="w-full border rounded-lg p-2 mb-6 bg-gray-50 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-500"
      >
        {Object.keys(locations).map((location) => (
          <option key={location} value={location}>
            {location}
          </option>
        ))}
      </select>

      <div className="space-y-4 text-gray-800 dark:text-gray-100">
        <div className="flex items-center space-x-2">
          <Phone className="text-green-500" />
          <span>{current.phone}</span>
        </div>
        
        <div className="flex items-center space-x-2">
          <MapPin className="text-green-500" />
          <a
            href={current.mapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-600 hover:underline dark:text-green-400"
          >
            Ver en Google Maps
          </a>
        </div>
      </div>
    </section>
  );
}
