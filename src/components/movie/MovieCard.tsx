import { getReleaseYear, getGenreName } from "../../utils/movie-utils";
import type { Movie } from "../../interfaces/tmdb";

interface MovieCardProps {
  movie: Movie;
}

export function MovieCard({ movie }: MovieCardProps) {
  const releaseYear = getReleaseYear(movie.release_date);
  const primaryGenreId = movie.genre_ids?.[0];
  const genreName = primaryGenreId ? getGenreName(primaryGenreId) : "";

  return (
    <article className="group cursor-pointer">
      <div className="relative mb-3 aspect-2/3 overflow-hidden rounded-2xl bg-gray-800">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
        />
        <div className="absolute left-3 top-3 rounded-lg bg-black/75 px-2.5 py-1 text-xs font-bold text-yellow-400 backdrop-blur-md">
          ★ {movie.vote_average ? movie.vote_average.toFixed(1) : "N/D"}
        </div>
      </div>

      <h3 className="truncate font-bold transition group-hover:text-blue-dark">
        {movie.title}
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
