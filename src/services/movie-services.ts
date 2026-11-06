import type { TMDBResponse, Movie } from '../interfaces/tmdb';
import { fetchAPI } from './api';

export async function getTrendingMovies(): Promise<Movie[]> {
  const data = await fetchAPI<TMDBResponse<Movie>>('/trending/movie/day?language=es-ES');
  return data.results;
}

export async function getPopularMovies(): Promise<Movie[]> {
  const data = await fetchAPI<TMDBResponse<Movie>>('/movie/popular?language=es-ES');
  return data.results;
}

export async function getTopRatedMovies(): Promise<Movie[]> {
  const data = await fetchAPI<TMDBResponse<Movie>>('/movie/top_rated?language=es-ES');
  return data.results;
}

export async function getUpcomingMovies(): Promise<Movie[]> {
  const data = await fetchAPI<TMDBResponse<Movie>>('/movie/upcoming?language=es-ES');
  return data.results;
}