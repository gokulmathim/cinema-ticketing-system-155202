import MovieCard from "@/components/MovieCard";

// Placeholder movies (would be fetched from API)
const movies = [
  {
    id: 1,
    title: "Oppenheimer",
    poster: "https://image.tmdb.org/t/p/w500/8RMKMkpswniAAuvZvSY74NbyO23.jpg",
    genre: "Drama, Biography",
    releaseDate: "2023-07-21",
    rating: "8.9",
  },
  {
    id: 2,
    title: "Spider-Man: Across the Spider-Verse",
    poster: "https://image.tmdb.org/t/p/w500/jTNYlTEijZ6c8Mn4GVaTEM3JR2Q.jpg",
    genre: "Action, Animation",
    releaseDate: "2023-06-02",
    rating: "9.1",
  },
  {
    id: 3,
    title: "Past Lives",
    poster: "https://image.tmdb.org/t/p/w500/k7sEIRqE1w3jdRkxQvE8nRwRZgS.jpg",
    genre: "Drama, Romance",
    releaseDate: "2023-01-20",
    rating: "8.2",
  },
];

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto py-10 px-4">
      <h1 className="text-4xl font-bold mb-6 text-[var(--color-primary)]">Now Showing</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {movies.map(movie => (
          <MovieCard key={movie.id} {...movie} />
        ))}
      </div>
    </div>
  );
}
