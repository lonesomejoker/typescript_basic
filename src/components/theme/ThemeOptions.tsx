import type { ReactNode } from "react";
import { FiSun, FiMoon, FiMonitor } from "react-icons/fi";

export type Theme = "light" | "dark" | "system";

export const themeIcons: Record<Theme, ReactNode> = {
  light: <FiSun />,
  dark: <FiMoon />,
  system: <FiMonitor />,
};

export interface ThemeOptionsProps<T> {
  themeOptions: T[];
  theme: T;
  onThemeClick: (theme: T) => void;
  isDark?: boolean;
}

export function ThemeOptions<T extends ReactNode>({
  themeOptions,
  theme,
  onThemeClick,
  isDark = false,
}: ThemeOptionsProps<T>) {
  return (
    <div className="grid grid-cols-3 gap-3">
      {themeOptions.map((option) => {
        const isActive = theme === option;
        const key = option as Theme;

        const activeClasses = isDark
          ? "border-white bg-white text-stone-950 shadow-md"
          : "border-stone-900 bg-stone-900 text-white shadow-md";

        const inactiveClasses = isDark
          ? "border-stone-800 bg-stone-950/60 text-stone-400 hover:border-stone-700 hover:bg-stone-800/50 hover:text-stone-200"
          : "border-stone-200 bg-white text-stone-600 hover:border-stone-300 hover:bg-stone-50";

        return (
          <button
            key={String(option)}
            onClick={() => onThemeClick(option)}
            className={`flex flex-col items-center gap-2 rounded-xl border-2 px-4 py-5 transition-all ${
              isActive ? activeClasses : inactiveClasses
            }`}
          >
            <span className="text-xl">{themeIcons[key]}</span>
            <span className="text-sm font-medium capitalize">
              {String(option)}
            </span>
          </button>
        );
      })}
    </div>
  );
}

export default ThemeOptions;
