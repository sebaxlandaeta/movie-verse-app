import { useEffect, useState } from "react";
import { Loader2, Sparkles } from "lucide-react";

export default function StartLoader({
  isLoading = true,
  progress = null,
  text = "Iniciando aplicación...",
}) {
  const [shouldRender, setShouldRender] = useState(isLoading);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    if (isLoading) {
      setShouldRender(true);
      setFade(false);
    } else {
      setFade(true);
      const timer = setTimeout(() => setShouldRender(false), 500);
      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  if (!shouldRender) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-slate-950 text-white transition-opacity duration-500 backdrop-blur-xl ${
        fade ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="flex flex-col items-center max-w-xs w-full mx-4 text-center">
        <div className="relative flex items-center justify-center w-20 h-20 rounded-2xl bg-slate-900 border border-slate-800 shadow-xl mb-6">
          <div className="absolute inset-0 rounded-2xl border-2 border-transparent border-t-blue-dark border-r-blue-dark animate-spin" />
          <Sparkles className="w-8 h-8 text-blue-dark animate-pulse" />
        </div>

        <p className="text-xs text-slate-400 font-medium">{text}</p>

        <div className="space-y-1"></div>

        {progress !== null && (
          <div className="w-full mt-6 space-y-1.5">
            <div className="w-full h-1.5 bg-slate-900 rounded-full overflow-hidden border border-slate-800">
              <div
                className="h-full bg-indigo-500 transition-all duration-300 ease-out rounded-full"
                style={{ width: `${Math.min(Math.max(progress, 0), 100)}%` }}
              />
            </div>
            <div className="text-[10px] font-mono text-slate-500 text-right">
              {Math.round(progress)}%
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
