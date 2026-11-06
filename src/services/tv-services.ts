import type { TMDBResponse, TVShow } from '../interfaces/tmdb';
import { fetchAPI } from './api';

export async function getTrendingTVShows(): Promise<TVShow[]> {
  const data = await fetchAPI<TMDBResponse<TVShow>>('/trending/tv/day?language=es-ES');
  return data.results;
}

export async function getPopularTVShows(): Promise<TVShow[]> {
  const data = await fetchAPI<TMDBResponse<TVShow>>('/tv/popular?language=es-ES');
  return data.results;
}

export async function getUpcomingTVShows(): Promise<TVShow[]> {
  const data = await fetchAPI<TMDBResponse<TVShow>>('/tv/on_the_air?language=es-ES');
  return data.results;
}

export async function getTopRatedTVShows(): Promise<TVShow[]> {
  const data = await fetchAPI<TMDBResponse<TVShow>>('/tv/top_rated?language=es-ES');
  return data.results
}