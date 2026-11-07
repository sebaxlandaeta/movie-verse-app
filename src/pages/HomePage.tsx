import Sidebar from "../components/layout/Sidebar";
import Header from "../components/layout/Header";
import MainLayout from "../components/layout/MainLayout";
import HeroSection from "../components/home/HeroSection";
import { useFetch } from "../hooks/useFetch";
import { getTrendingMovies } from "../services/movie-services";
import type { Movie } from "../interfaces/tmdb";

export default function HomePage() {
  const { data, loading, error } = useFetch(getTrendingMovies);

  if (loading)
    return (
      <div className="min-h-screen bg-[#171522] text-white p-10">
        Cargando...
      </div>
    );
  if (error || !data)
    return (
      <div className="min-h-screen bg-[#171522] text-white p-10">
        Error al cargar
      </div>
    );

  const featuredMovie: Movie = data[0];
  return (
    <div className="min-h-screen bg-dark text-white">
      <div className="min-h-screen">
        <Sidebar />
        <MainLayout>
          <Header />
          <div className="px-5 py-8 md:px-10">
            <HeroSection movie={featuredMovie} />
          </div>
        </MainLayout>
      </div>
    </div>
  );
}
