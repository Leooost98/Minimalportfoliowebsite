import { Outlet } from "react-router";
import { CustomCursor } from "./CustomCursor";
import { ThemeProvider, useTheme } from "../context/ThemeContext";

function ThemedApp() {
  const { theme } = useTheme();

  return (
    <>
      <div
        style={{
          cursor: "none",
          overscrollBehaviorX: "none",
          backgroundColor: theme.bg,
          color: theme.text,
          transition: "background-color 0.7s ease, color 0.7s ease",
          minHeight: "100vh",
        }}
      >
        <Outlet />
      </div>
      <CustomCursor />
    </>
  );
}

export function AppWrapper() {
  return (
    <ThemeProvider>
      <ThemedApp />
    </ThemeProvider>
  );
}
