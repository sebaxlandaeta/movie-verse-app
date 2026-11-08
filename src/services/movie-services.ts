import type { TMDBResponse, Movie } from '../interfaces/tmdb';
import { fetchAPI } from './api';

export async function getTrendingMovies(page: number = 1): Promise<Movie[]> {
  const data = await fetchAPI<TMDBResponse<Movie>>(`/trending/movie/day?language=es-ES&page=${page}`);
  return data.results;
}

export async function getPopularMovies(page: number = 1): Promise<Movie[]> {
  const data = await fetchAPI<TMDBResponse<Movie>>(`/movie/popular?language=es-ES&page=${page}`);
  return data.results;
}

export async function getTopRatedMovies(page: number = 1): Promise<Movie[]> {
  const data = await fetchAPI<TMDBResponse<Movie>>(`/movie/top_rated?language=es-ES&page=${page}`);
  return data.results;
}

export async function getUpcomingMovies(page: number = 1): Promise<Movie[]> {
  const data = await fetchAPI<TMDBResponse<Movie>>(`/movie/upcoming?language=es-ES&page=${page}`);
  return data.results;
}