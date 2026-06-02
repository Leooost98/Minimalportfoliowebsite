import { Link, useLocation } from "react-router";
import { useTheme, themes, ThemeId, ABOUT_TEXT_COLOR } from "../context/ThemeContext";

export function Navigation() {
  const location = useLocation();
  const isWorkPage = location.pathname === "/work";
  const isAboutPage = location.pathname === "/about";
  const { theme, setThemeId } = useTheme();

  const navColor = isAboutPage ? ABOUT_TEXT_COLOR : theme.text;

  return (
    <nav
      className="fixed top-8 left-8 z-50 flex items-center gap-4"
      style={{
        fontFamily: "serif",
        transform: "scaleY(1.15)",
        transformOrigin: "top",
        color: navColor,
        transition: "color 0.7s ease",
      }}
    >
      <div
        className="flex items-center gap-2 px-2.5 py-2 rounded-full"
        style={{
          border: `1.5px solid ${navColor}`,
          transition: "border-color 0.7s ease",
        }}
      >
        {themes.map((t) => {
          const isActive = theme.id === t.id;
          return (
            <button
              key={t.id}
              onClick={() => setThemeId(t.id as ThemeId)}
              className="flex-shrink-0 cursor-pointer"
              style={{
                width: "11px",
                height: "11px",
                borderRadius: "50%",
                backgroundColor: t.bg,
                boxShadow: isActive
                  ? `0 0 0 2px ${t.bg}, 0 0 0 3.5px ${navColor}`
                  : "none",
                border: "none",
                padding: 0,
                transition: "box-shadow 0.3s ease",
              }}
              aria-label={`Switch to ${t.id} theme`}
            />
          );
        })}
      </div>
    </nav>
  );
}