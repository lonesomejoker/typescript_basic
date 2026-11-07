import { useState, useEffect } from "react";
import { FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";
import ThemeOptions, {
  type Theme,
  themeIcons,
} from "../components/theme/ThemeOptions.tsx";

const themeOptions: Theme[] = ["light", "dark", "system"];

const themeDescriptions: Record<Theme, string> = {
  light: "Bright and clean for daytime use",
  dark: "Easy on the eyes in low light",
  system: "Follows your device preference",
};

const Themes = () => {
  const [theme, setTheme] = useState<Theme>("system");
  const [systemIsDark, setSystemIsDark] = useState<boolean>(() => {
    if (typeof window !== "undefined") {
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    return false;
  });

  // Listen to system preference changes when in "system" mode
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = (e: MediaQueryListEvent) => setSystemIsDark(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  const isDark = theme === "dark" || (theme === "system" && systemIsDark);

  return (
    <div
      className={`min-h-screen transition-colors duration-200 ${
        isDark ? "bg-stone-950 text-stone-100" : "bg-stone-50 text-stone-900"
      }`}
    >
      {/* ── Header ── */}
      <header
        className={`sticky top-0 z-10 border-b backdrop-blur transition-colors duration-200 ${
          isDark
            ? "border-stone-800 bg-stone-900/80"
            : "border-stone-200 bg-white/80"
        }`}
      >
        <div className="mx-auto flex max-w-xl items-center justify-between px-6 py-4">
          <h1
            className={`text-lg font-semibold tracking-tight ${
              isDark ? "text-stone-100" : "text-stone-900"
            }`}
          >
            Appearance
          </h1>
          <Link
            to="/"
            className={`inline-flex items-center gap-1.5 rounded-lg border px-3.5 py-1.5 text-sm font-medium shadow-sm transition-colors ${
              isDark
                ? "border-stone-700 bg-stone-800 text-stone-300 hover:bg-stone-700 hover:text-white"
                : "border-stone-200 bg-white text-stone-600 hover:bg-stone-50 hover:text-stone-900"
            }`}
          >
            <FiArrowLeft className="text-sm" />
            Home
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-xl px-6 py-10">
        {/* ── Theme Picker Card ── */}
        <div
          className={`rounded-2xl border p-6 shadow-sm transition-colors duration-200 ${
            isDark
              ? "border-stone-800 bg-stone-900"
              : "border-stone-200 bg-white"
          }`}
        >
          <div className="mb-6">
            <h2
              className={`text-base font-semibold ${
                isDark ? "text-stone-100" : "text-stone-800"
              }`}
            >
              Theme
            </h2>
            <p
              className={`mt-1 text-sm ${
                isDark ? "text-stone-400" : "text-stone-500"
              }`}
            >
              Choose how the app looks to you
            </p>
          </div>

          <ThemeOptions
            themeOptions={themeOptions}
            theme={theme}
            onThemeClick={(newTheme) => setTheme(newTheme)}
            isDark={isDark}
          />

          {/* ── Active indicator ── */}
          <div
            className={`mt-6 flex items-center gap-2.5 rounded-lg border px-4 py-3 transition-colors duration-200 ${
              isDark
                ? "border-stone-800 bg-stone-950/60 text-stone-300"
                : "border-stone-100 bg-stone-50 text-stone-600"
            }`}
          >
            <span
              className={`text-lg ${
                isDark ? "text-stone-300" : "text-stone-600"
              }`}
            >
              {themeIcons[theme]}
            </span>
            <div>
              <p
                className={`text-sm font-medium capitalize ${
                  isDark ? "text-stone-100" : "text-stone-800"
                }`}
              >
                {theme} mode
                {theme === "system" && (
                  <span className="ml-1 text-xs opacity-75">
                    ({systemIsDark ? "dark active" : "light active"})
                  </span>
                )}
              </p>
              <p
                className={`text-xs ${
                  isDark ? "text-stone-400" : "text-stone-500"
                }`}
              >
                {themeDescriptions[theme]}
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Themes;
