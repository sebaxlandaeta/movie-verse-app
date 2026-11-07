import { House, Clapperboard, Tv, Clock, Film } from "lucide-react";

export function Sidebar() {
  const items = [
    { text: "Inicio", icon: <House size={18} /> },
    { text: "Películas", icon: <Clapperboard size={18} /> },
    { text: "Series TV", icon: <Tv size={18} /> },
    { text: "Próximos Estrenos", icon: <Clock size={18} /> },
  ];

  return (
    <aside className="fixed left-0 top-0 z-50 hidden h-screen w-64 shrink-0 flex-col border-r border-white/5 bg-sidebar px-6 py-8 lg:flex">
      <div className="mb-12 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-dark text-xl font-black text-white">
          M
        </div>
        <span className="text-2xl font-black tracking-tight">
          Movie<span className="text-blue-light">Verse</span>
        </span>
      </div>

      <div className="mb-8">
        <p className="mb-4 text-xs font-bold uppercase tracking-widest text-gray-500">
          MENÚ PRINCIPAL
        </p>

        <nav className="space-y-2">
          {items.map((item) => (
            <a
              key={item.text}
              href="#"
              className="flex items-center gap-3 rounded-xl px-2 py-3 transition text-gray-400 hover:bg-white/5 hover:text-white focus:text-blue-extralight focus:bg-blue-dark/15 focus:font-semibold"
            >
              <span className="text-xl">{item.icon}</span>
              {item.text}
            </a>
          ))}
        </nav>
      </div>

      <div className="mt-auto rounded-2xl border border-white/5 bg-linear-to-br from-blue-dark/20 to-transparent p-5">
        <div className="mb-3 text-2xl">
          <Film
            size={30}
            className="text-blue-extralight"
          />
        </div>
        <h3 className="mb-2 font-bold">Explora el universo del cine</h3>
        <p className="text-sm leading-relaxed text-gray-400">
          Miles de películas, historias y mundos por descubrir.
        </p>
      </div>
    </aside>
  );
}
