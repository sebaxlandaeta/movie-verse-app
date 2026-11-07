import {
  Flame,
  Rocket,
  Skull,
  Heart,
  Laugh,
  Eye,
  House, 
  Clapperboard, 
  Tv, 
  Clock
} from "lucide-react";


export const GENRES_MAP: { [key: number]: string } = {
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
 
export const categories = [
    {
      name: "Acción",
      icon: Flame,
      color: "text-rose-400",
      bgGradient: "from-rose-600/25 via-rose-950/40 to-neutral-900",
      borderHover: "hover:border-rose-500/80 hover:shadow-rose-500/30",
      barColor: "from-rose-500 to-orange-500",
    },
    {
      name: "Ciencia ficción",
      icon: Rocket,
      color: "text-indigo-400",
      bgGradient: "from-indigo-600/25 via-indigo-950/40 to-neutral-900",
      borderHover: "hover:border-indigo-500/80 hover:shadow-indigo-500/30",
      barColor: "from-indigo-500 to-cyan-400",
    },
    {
      name: "Terror",
      icon: Skull,
      color: "text-violet-400",
      bgGradient: "from-violet-600/25 via-purple-950/40 to-neutral-900",
      borderHover: "hover:border-violet-500/80 hover:shadow-violet-500/30",
      barColor: "from-violet-500 to-fuchsia-500",
    },
    {
      name: "Romance",
      icon: Heart,
      color: "text-fuchsia-400",
      bgGradient: "from-fuchsia-600/25 via-pink-950/40 to-neutral-900",
      borderHover: "hover:border-fuchsia-500/80 hover:shadow-fuchsia-500/30",
      barColor: "from-fuchsia-500 to-rose-400",
    },
    {
      name: "Comedia",
      icon: Laugh,
      color: "text-amber-400",
      bgGradient: "from-amber-600/25 via-amber-950/40 to-neutral-900",
      borderHover: "hover:border-amber-500/80 hover:shadow-amber-500/30",
      barColor: "from-amber-400 to-yellow-400",
    },
    {
      name: "Suspenso",
      icon: Eye,
      color: "text-cyan-400",
      bgGradient: "from-cyan-600/25 via-teal-950/40 to-neutral-900",
      borderHover: "hover:border-cyan-500/80 hover:shadow-cyan-500/30",
      barColor: "from-cyan-400 to-emerald-400",
    },
];

export const sidebarItems = [
    { 
        text: "Inicio", 
        icon: House 
    },
    { 
        text: "Películas", 
        icon: Clapperboard
    },
    { 
        text: "Series TV",
        icon: Tv
    },
    { 
        text: "Próximos Estrenos",
        icon: Clock 
    }
];