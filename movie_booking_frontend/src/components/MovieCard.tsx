import Link from "next/link";

type MovieCardProps = {
  id: number;
  title: string;
  poster: string;
  genre: string;
  releaseDate: string;
  rating: string;
};

export default function MovieCard({ id, title, poster, genre, releaseDate, rating }: MovieCardProps) {
  return (
    <Link href={`/movies/${id}`} className="bg-white rounded-2xl shadow-md hover:shadow-xl transition mb-4 border border-gray-100 flex flex-col overflow-hidden">
      <img src={poster} alt={title} className="w-full aspect-[2/3] object-cover" />
      <div className="p-4 flex-1 flex flex-col">
        <h3 className="font-semibold text-lg mb-1">{title}</h3>
        <span className="text-xs text-gray-600 mb-1">{genre}</span>
        <span className="text-xs text-gray-500 mb-1">{releaseDate}</span>
        <span className="mt-auto text-xs text-[var(--color-primary)] font-bold">
          ⭐ {rating}
        </span>
      </div>
    </Link>
  );
}
