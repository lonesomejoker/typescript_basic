import React, { useState } from "react";

type TThemeProps<T>= {
  themesList: T[];
  theme: T;
  onThemeClick: (theme: T) => void;
  
};

type TTheme = "light" | "dark" | "system";

const ThemeSelector = () => {
  const [theme, setTheme] = useState("system");

  const themesList = ["light", "dark", "system"];

  return (
    <>
      <h1>Themes</h1>
      <ThemeOptions themesList={themesList} theme={theme} onThemeClick={(theme)=>setTheme(theme)} />
    </>
  );
};

export default ThemeSelector;

function ThemeOptions<T extends React.ReactNode>({ themesList, theme, onThemeClick }: TThemeProps<T>) {
  return (
    <div className="flex gap-4">
      {themesList?.map((item,index) => (
        <button
          key={index}
          onClick={()=>onThemeClick(theme)}
          className={`capitalize ${
            theme === item ? "font-bold" : "font-normal"
          }`}
        >
          {item}
        </button>
      ))}
    </div>
  );
};
