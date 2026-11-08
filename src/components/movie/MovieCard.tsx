import { getReleaseYear, getGenreName } from "../../utils/movie-utils";
import type { Movie, TVShow } from "../../interfaces/tmdb";
import { Star } from "lucide-react";

interface MovieCardProps {
  movie: Movie | TVShow;
}

export function MovieCard({ movie }: MovieCardProps) {
  const dateField =
    ("release_date" in movie ? movie.release_date : movie.first_air_date) || "";
  const releaseYear = getReleaseYear(dateField);
  const primaryGenreId = movie.genre_ids?.[0];
  const genreName = primaryGenreId ? getGenreName(primaryGenreId) : "";
  const title = ("title" in movie ? movie.title : movie.name) || "";

  return (
    <article className="group cursor-pointer animate-range-[entry_0%_cover_30%] → [entry_10%_cover_40%] →">
      <div className="relative mb-3 aspect-2/3 overflow-hidden rounded-2xl bg-gray-800">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
        />
        <div className="flex items-center gap-1 absolute left-3 top-3 rounded-lg bg-black/75 px-2.5 py-1 text-xs font-bold text-yellow-400 backdrop-blur-md">
          <Star size={12} />{" "}
          {movie.vote_average ? movie.vote_average.toFixed(1) : "6.0"}
        </div>
      </div>

      <h3 className="truncate font-bold transition group-hover:text-blue-dark">
        {title}
      </h3>

      <div className="mt-1 flex items-center justify-between text-sm text-gray-500">
        <span>{releaseYear}</span>
        {genreName && (
          <span className="text-xs text-blue-light">{genreName}</span>
        )}
      </div>
    </article>
  );
}
