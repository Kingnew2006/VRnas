import { useState } from "react";

import { useEffect } from "react";

export default function ThemeToggleButton() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
  
  return (
    <button
      className="theme-toggle-button"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      {theme === "light" ? (
        <span role="img" aria-label="Dark Mode">
          🌙
        </span>
      ) : (
        <span role="img" aria-label="Light Mode">
          ☀️
        </span>
      )}
    </button>
  );
}