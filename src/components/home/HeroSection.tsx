import type { Movie } from "../../interfaces/tmdb";
import { Star } from "lucide-react";
import { getGenreName, getReleaseYear } from "../../utils/movie-utils";
import { getBackdropUrl } from "../../utils/image-utils";

interface HeroSectionProps {
  movie: Movie;
}

export default function HeroSection({ movie }: HeroSectionProps) {
  if (!movie) return null;
  const {
    title,
    release_date,
    overview,
    vote_average,
    genre_ids,
    backdrop_path,
  } = movie;

  const releaseYear = getReleaseYear(release_date);
  const primaryGenre =
    genre_ids && genre_ids.length > 0 ? getGenreName(genre_ids[0]) : "";

  return (
    <section className="relative mb-12 overflow-hidden rounded-3xl bg-[#171522]">
      <img
        src={getBackdropUrl(backdrop_path, "original")}
        alt="Película destacada"
        className="absolute inset-0 h-full w-full object-cover opacity-40"
      />

      <div className="absolute inset-0 bg-linear-to-r from-[#0d0b17] via-[#0d0b17]/80 to-transparent"></div>
      <div className="relative z-10 flex min-h-107 items-end px-7 py-10 md:items-center md:px-12">
        <div className="max-w-xl">
          <span className="mb-5 inline-block rounded-md bg-blue-dark px-3 py-1 text-xs font-bold uppercase tracking-wider">
            Película destacada
          </span>
          <h2 className="mb-4 text-4xl font-black md:text-6xl">{title}</h2>
          <div className="mb-4 flex items-center gap-3 text-sm text-gray-300">
            <span>{releaseYear}</span>
            <span className="flex justify-center items-center gap-1 text-yellow-400">
              <Star size={11} />
              {vote_average?.toFixed(1)}
            </span>
            <span>{primaryGenre}</span>
          </div>
          <p className="mb-7 max-w-lg text-sm leading-7 text-gray-300 md:text-base">
            {overview ? overview : "Sin descripcion..."}
          </p>
          <button className="flex items-center gap-2 rounded-xl bg-blue-dark px-6 py-3 font-bold transition hover:bg-blue-light cursor-pointer">
            <span>Ver detalles</span>
          </button>
        </div>
      </div>
    </section>
  );
}
