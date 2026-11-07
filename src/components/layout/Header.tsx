import { Menu, Search, Sun } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 flex items-center justify-between gap-4 border-b border-white/5 bg-dark px-5 py-5 backdrop-blur-xl md:px-10">
      <div className="flex items-center gap-4">
        <button className="size-10 rounded-xl border border-white/10 p-2 text-gray-400 lg:hidden">
          <Menu
            size={19}
            className="text-white"
          />
        </button>

        <div>
          <h1 className="hidden lg:block text-xl font-bold md:text-2xl mb-1">
            Descubre películas
          </h1>
          <p className="hidden text-sm text-gray-500 lg:block">
            Explora tu próximo mundo cinematográfico.
          </p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="flex w-50 items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-3 sm:w-56 md:w-80">
          <Search
            size={19}
            className="text-gray-400"
          />
          <input
            type="text"
            placeholder="Buscar películas..."
            className="w-full min-w-0 bg-transparent text-sm outline-none placeholder:text-gray-500 cursor-pointer"
          />
        </div>

        <button className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slatr-800 transition hover:bg-white/10 cursor-pointer">
          <Sun size={20} />
        </button>
      </div>
    </header>
  );
}
