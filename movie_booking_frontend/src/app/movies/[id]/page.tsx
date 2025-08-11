import dynamic from "next/dynamic";
import Link from "next/link";

// Provide at least one static param for static export (required by Next.js 'export' mode)
export function generateStaticParams() {
  return [{ id: "1" }];
}

const movieExample = {
  id: 1,
  title: "Oppenheimer",
  poster: "https://image.tmdb.org/t/p/w500/8RMKMkpswniAAuvZvSY74NbyO23.jpg",
  description: "A look at the life of J. Robert Oppenheimer, the physicist who led the Manhattan Project.",
  genre: "Drama, Biography",
  releaseDate: "2023-07-21",
  rating: "8.9",
  showtimes: [
    { id: 101, time: "2024-07-13T16:00:00", availableSeats: 60 },
    { id: 102, time: "2024-07-13T19:00:00", availableSeats: 42 },
    { id: 103, time: "2024-07-14T15:00:00", availableSeats: 33 },
  ],
};

// Dynamic import to ensure MovieShowtimes is only loaded client-side
const MovieShowtimes = dynamic(() => import("@/components/MovieShowtimes"), { ssr: false });

export default function MovieDetailsPage() {
  // Normally you would fetch movie & showtimes by id from params
  const movie = movieExample; // Placeholder

  return (
    <div className="max-w-3xl mx-auto py-8 px-4 flex flex-col md:flex-row gap-8">
      <div className="w-full md:w-1/3 flex-shrink-0">
        <img src={movie.poster} alt={movie.title} className="rounded-2xl shadow-md w-full" />
      </div>
      <div className="flex-1 flex flex-col">
        <h2 className="text-3xl font-bold text-[var(--color-primary)]">{movie.title}</h2>
        <div className="text-gray-600 text-sm mb-1">{movie.genre}</div>
        <div className="text-gray-500 text-xs mb-2">{movie.releaseDate}</div>
        <div className="mb-3">{movie.description}</div>
        <div className="mb-4">Rating: <span className="font-bold text-[var(--color-primary)]">{movie.rating}</span></div>
        <MovieShowtimes showtimes={movie.showtimes} />
      </div>
    </div>
  );
}
