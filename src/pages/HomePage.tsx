import Sidebar from "../components/layout/Sidebar";
import Header from "../components/layout/Header";
import MainLayout from "../components/layout/MainLayout";
import HeroSection from "../components/home/HeroSection";
import { CategorySection } from "../components/home/CategorySection";
import { MovieCarousel } from "../components/movie/MovieCarousel";
import { useFetch } from "../hooks/useFetch";
import StartLoader from "../components/iu/StartLoader";

import {
  getTrendingMovies,
  getPopularMovies,
  getTopRatedMovies,
  getUpcomingMovies,
} from "../services/movie-services";
import {
  getPopularTVShows,
  getTopRatedTVShows,
  getTrendingTVShows,
  getUpcomingTVShows,
} from "../services/tv-services";
import type { Movie } from "../interfaces/tmdb";

export default function HomePage() {
  const {
    data: trendingData,
    loading,
    error,
  } = useFetch(() => getTrendingMovies(1));

  if (loading) return <StartLoader />;

  if (error || !trendingData)
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
            <HeroSection movie={featuredMovie} />
            <CategorySection />

            <MovieCarousel
              subtag="Lo más visto"
              title="Peliculas en tendencia"
              fetchService={getTrendingMovies}
            />

            <MovieCarousel
              subtag="Descubre lo más popular"
              title="Películas populares"
              fetchService={getPopularMovies}
            />

            <MovieCarousel
              subtag="Selección especial"
              title="Peliculas mejor valoradas"
              fetchService={getTopRatedMovies}
            />

            <MovieCarousel
              subtag="Próximamente"
              title="Próximos estrenos"
              fetchService={getUpcomingMovies}
            />

            <MovieCarousel
              subtag="Lo más visto"
              title="Series en tendencia"
              fetchService={getTrendingTVShows}
            />

            <MovieCarousel
              subtag="Descubre lo mas popular"
              title="Series Populares"
              fetchService={getPopularTVShows}
            />
            <MovieCarousel
              subtag="Sección especial"
              title="Series mejor valoradas"
              fetchService={getTopRatedTVShows}
            />
            <MovieCarousel
              subtag="Proximamente"
              title="Series proximas a estrenar"
              fetchService={getUpcomingTVShows}
            />
          </div>
        </MainLayout>
      </div>
    </div>
  );
}
