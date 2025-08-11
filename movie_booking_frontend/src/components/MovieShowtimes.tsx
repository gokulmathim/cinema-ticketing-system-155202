"use client";
import { useState } from "react";
import Link from "next/link";

/**
 * PUBLIC_INTERFACE
 * MovieShowtimes allows interactive showtime selection and booking for a given showtimes array.
 */
type ShowtimesType = {
  id: number;
  time: string;
  availableSeats: number;
};

export default function MovieShowtimes({ showtimes }: { showtimes: ShowtimesType[] }) {
  const [selectedShowtime, setSelectedShowtime] = useState<number | null>(null);

  return (
    <div>
      <h3 className="font-semibold mb-2">Showtimes</h3>
      <div className="flex flex-wrap gap-2 mb-6">
        {showtimes.map(st => (
          <button
            key={st.id}
            onClick={() => setSelectedShowtime(st.id)}
            className={`px-3 py-2 rounded-lg text-xs border transition-all ${
              selectedShowtime === st.id
                ? "bg-[var(--color-accent)] text-white border-[var(--color-accent)]"
                : "bg-gray-50 text-gray-800 border-gray-300 hover:bg-[var(--color-secondary)] hover:border-[var(--color-secondary)]"
            }`}
          >
            {new Date(st.time).toLocaleString([], { dateStyle: "short", timeStyle: "short" })}{" "}
            <span className="ml-1 text-gray-600">({st.availableSeats} seats)</span>
          </button>
        ))}
      </div>
      {selectedShowtime && (
        <Link
          href={`/booking/${selectedShowtime}`}
          className="inline-block px-6 py-2 bg-[var(--color-primary)] text-white rounded-lg mt-2 hover:bg-[var(--color-accent)] transition"
        >
          Select Seats & Book
        </Link>
      )}
    </div>
  );
}
