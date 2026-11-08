import type { TMDBResponse, TVShow } from '../interfaces/tmdb';
import { fetchAPI } from './api';

export async function getTrendingTVShows(page: number = 1): Promise<TVShow[]> {
  const data = await fetchAPI<TMDBResponse<TVShow>>(`/trending/tv/day?language=es-ES&page=${page}`);
  return data.results;
}

export async function getPopularTVShows(page: number = 1): Promise<TVShow[]> {
  const data = await fetchAPI<TMDBResponse<TVShow>>(`/tv/popular?language=es-ES&page=${page}`);
  return data.results;
}

export async function getUpcomingTVShows(page: number = 1): Promise<TVShow[]> {
  const data = await fetchAPI<TMDBResponse<TVShow>>(`/tv/on_the_air?language=es-ES&page=${page}`);
  return data.results;
}

export async function getTopRatedTVShows(page: number = 1): Promise<TVShow[]> {
  const data = await fetchAPI<TMDBResponse<TVShow>>(`/tv/top_rated?language=es-ES&page=${page}`);
  return data.results;
}