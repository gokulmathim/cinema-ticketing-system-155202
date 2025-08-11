"use client";
import { useState } from "react";

const demoMovies = [
  {
    id: 1,
    title: "Oppenheimer",
    genre: "Drama, Biography",
    releaseDate: "2023-07-21",
    rating: "8.9",
  },
  {
    id: 2,
    title: "Past Lives",
    genre: "Drama, Romance",
    releaseDate: "2023-01-20",
    rating: "8.2",
  },
];

export default function AdminMoviesPage() {
  const [movies] = useState(demoMovies);

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-5 text-[var(--color-primary)]">Manage Movies</h2>
      <button className="mb-4 px-4 py-2 rounded bg-[var(--color-accent)] text-white">+ Add Movie</button>
      <div className="overflow-x-auto bg-white rounded-lg border border-gray-100">
        <table className="min-w-full">
          <thead>
            <tr className="text-left bg-gray-50">
              <th className="px-3 py-2">Title</th>
              <th className="px-3 py-2">Genre</th>
              <th className="px-3 py-2">Release Date</th>
              <th className="px-3 py-2">Rating</th>
              <th className="px-3 py-2"></th>
            </tr>
          </thead>
          <tbody>
            {movies.map(m => (
              <tr key={m.id} className="border-t">
                <td className="px-3 py-2">{m.title}</td>
                <td className="px-3 py-2">{m.genre}</td>
                <td className="px-3 py-2">{m.releaseDate}</td>
                <td className="px-3 py-2">{m.rating}</td>
                <td className="px-3 py-2">
                  <button className="mr-2 text-[var(--color-accent)]">Edit</button>
                  <button className="text-red-600">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
