import { ChevronRight } from "lucide-react";
import { categories } from "../../constants/movie-constants";

export function CategorySection() {
  return (
    <section className="mb-12">
      <div className="mb-5">
        <h2 className="text-2xl font-bold tracking-tight text-white">
          Explora por género
        </h2>
        <p className="mt-1 text-sm text-gray-400">
          Encuentra películas según tus gustos.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {categories.map((category) => {
          const IconComponent = category.icon;
          return (
            <button
              key={category.name}
              className={`group relative overflow-hidden rounded-2xl border border-neutral-800 bg-linear-to-br ${category.bgGradient} p-5 text-left transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-xl ${category.borderHover} cursor-pointer`}
            >
              <div
                className={`absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r ${category.barColor} opacity-0 transition-all duration-300 group-hover:opacity-100`}
              />

              <div className="flex flex-col justify-between h-full">
                <div
                  className={`w-12 h-12 rounded-xl bg-black/40 backdrop-blur-md flex items-center justify-center ${category.color} transition-transform duration-300 group-hover:scale-110 shadow-inner`}
                >
                  <IconComponent className="w-6 h-6 transition-transform duration-300 group-hover:rotate-6" />
                </div>
                ``
                <div className="mt-6 flex items-center justify-between">
                  <h3 className="font-medium tracking-wide text-gray-200 group-hover:text-white transition-colors">
                    {category.name}
                  </h3>
                  <ChevronRight
                    className={`w-4 h-4 ${category.color} opacity-0 -translate-x-3 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:translate-x-0`}
                  />
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
}
