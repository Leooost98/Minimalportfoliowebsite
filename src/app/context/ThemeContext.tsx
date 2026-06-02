import { createContext, useContext, useState, ReactNode } from "react";

export type ThemeId = "cream" | "olive" | "navy" | "red";

export interface Theme {
  id: ThemeId;
  bg: string;
  text: string;
}

export const themes: Theme[] = [
  { id: "cream", bg: "#F0EDE6", text: "#1D10C8" },
  { id: "olive", bg: "#272310", text: "#9BC8E8" },
  { id: "navy",  bg: "#15158C", text: "#9BC8E8" },
  { id: "red",   bg: "#5C0A1E", text: "#E8A0B4" },
];

export const ABOUT_TEXT_COLOR = "#F0EDE6";

interface ThemeContextType {
  theme: Theme;
  setThemeId: (id: ThemeId) => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: themes[0],
  setThemeId: () => {},
});

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [themeId, setThemeIdState] = useState<ThemeId>(() => {
    try {
      return (localStorage.getItem("siteThemeId") as ThemeId) || "cream";
    } catch {
      return "cream";
    }
  });

  const theme = themes.find((t) => t.id === themeId) || themes[0];

  const setThemeId = (id: ThemeId) => {
    setThemeIdState(id);
    try {
      localStorage.setItem("siteThemeId", id);
    } catch {}
  };

  return (
    <ThemeContext.Provider value={{ theme, setThemeId }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
