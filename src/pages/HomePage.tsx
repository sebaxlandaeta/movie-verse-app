import Sidebar from "../components/layout/Sidebar";
import Header from "../components/layout/Header";
import MainLayout from "../components/layout/MainLayout";
import HeroSection from "../components/home/HeroSection";
import { CategorySection } from "../components/home/CategorySection";
import { MovieCarousel } from "../components/movie/MovieCarousel";

import { useFetch } from "../hooks/useFetch";
import {
  getTrendingMovies,
  getPopularMovies,
  getTopRatedMovies,
  getUpcomingMovies,
} from "../services/movie-services";
import type { Movie } from "../interfaces/tmdb";

export default function HomePage() {
  const {
    data: trendingData,
    loading: loadingTrending,
    error: errorTrending,
  } = useFetch(getTrendingMovies);
  const { data: popularMovies } = useFetch(getPopularMovies);
  const { data: topRatedMovies } = useFetch(getTopRatedMovies);
  const { data: upcomingMovies } = useFetch(getUpcomingMovies);

  if (loadingTrending)
    return (
      <div className="min-h-screen bg-[#171522] text-white flex items-center justify-center">
        <p className="text-violet-500 font-semibold animate-pulse text-lg">
          Cargando MovieVerse...
        </p>
      </div>
    );

  if (errorTrending || !trendingData)
    return (
      <div className="min-h-screen bg-[#171522] text-white flex items-center justify-center">
        <p className="text-red-400 font-semibold">
          Error al cargar el contenido. Intenta de nuevo más tarde.
        </p>
      </div>
    );

  const featuredMovie: Movie = trendingData[0];

  return (
    <div className="min-h-screen bg-dark text-white">
      <div className="min-h-screen">
        <Sidebar />
        <MainLayout>
          <Header />
          <div className="px-5 py-8 md:px-10">
            {/* Hero dinámico con la película destacada */}
            <HeroSection movie={featuredMovie} />

            {/* Categorías (Géneros) */}
            <CategorySection />

            {/* Carrusel: En Tendencia */}
            <MovieCarousel
              subtag="Lo más visto"
              title="En tendencia"
              movies={trendingData || []}
            />

            {/* Carrusel: Películas Populares */}
            <MovieCarousel
              subtag="Descubre lo más popular"
              title="Películas populares"
              movies={popularMovies || []}
            />

            {/* Carrusel: Las mejor valoradas */}
            <MovieCarousel
              subtag="Selección especial"
              title="Las mejor valoradas"
              movies={topRatedMovies || []}
            />

            {/* Carrusel: Próximos estrenos */}
            <MovieCarousel
              subtag="Próximamente"
              title="Próximos estrenos"
              movies={upcomingMovies || []}
            />
          </div>
        </MainLayout>
      </div>
    </div>
  );
}
