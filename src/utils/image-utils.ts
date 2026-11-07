const TMDB_IMAGE_BASE_URL = import.meta.env.VITE_TMDB_IMAGE_BASE_URL

export type PosterSize = "w92" | "w154" | "w185" | "w342" | "w500" | "w780" | "original";
export type BackdropSize = "w300" | "w780" | "w1280" | "original";

export const getPosterUrl = (path: string | null, size: PosterSize = "w500"): string | null => {
  if (!path) return null
  return `${TMDB_IMAGE_BASE_URL}/${size}${path}`;
};

export const getBackdropUrl = (path: string | null | undefined, size: BackdropSize = "original"): string => {
  if (!path) return "/placeholder-backdrop.jpg";
  return `${TMDB_IMAGE_BASE_URL}/${size}${path}`;
};