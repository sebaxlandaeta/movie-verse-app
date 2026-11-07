const GENRES_MAP: { [key: number]: string } = {
  28: "Acción",
  12: "Aventura",
  16: "Animación",
  35: "Comedia",
  80: "Crimen",
  99: "Documental",
  18: "Drama",
  10751: "Familiar",
  14: "Fantasía",
  36: "Historia",
  27: "Terror",
  10402: "Música",
  9648: "Misterio",
  10749: "Romance",
  878: "Ciencia ficción",
  10770: "Película de TV",
  53: "Suspenso",
  10752: "Bélica",
  37: "Western",
};

export const getGenreName = (genreId: number): string => {
  return GENRES_MAP[genreId] || "General";
};


export const getReleaseYear = (releaseDate: string): string => {
  if (!releaseDate) return "";
  return releaseDate.split("-")[0];
};