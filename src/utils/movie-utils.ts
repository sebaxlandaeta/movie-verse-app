import { GENRES_MAP } from '.././constants/movie-constants'

export const getGenreName = (genreId: number): string => {
  return GENRES_MAP[genreId] || "General";
};


export const getReleaseYear = (releaseDate: string): string => {
  if (!releaseDate) return "";
  return releaseDate.split("-")[0];
};