import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { MovieCard } from "./MovieCard";
import type { Movie } from "../../interfaces/tmdb";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";

interface MovieCarouselProps {
  subtag?: string;
  title: string;
  movies: Movie[];
}

export function MovieCarousel({ subtag, title, movies }: MovieCarouselProps) {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className="mb-12">
      <div className="mb-6 flex items-end justify-between">
        <div>
          {subtag && (
            <p className="mb-1 text-xs font-bold uppercase tracking-widest text-blue-dark">
              {subtag}
            </p>
          )}
          <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition-all hover:bg-blue-dark hover:border-blue-darbg-blue-dark active:scale-95 cursor-pointer"
            aria-label="Anterior"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition-all hover:bg-blue-dark hover:border-blue-darbg-blue-dark active:scale-95 cursor-pointer"
            aria-label="Siguiente"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      <Swiper
        modules={[Navigation]}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        spaceBetween={20}
        slidesPerView={2}
        breakpoints={{
          640: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1280: { slidesPerView: 5 },
        }}
        className="w-full pb-4"
      >
        {movies?.map((movie, index) => (
          <SwiperSlide key={movie.id || index}>
            <MovieCard movie={movie} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
