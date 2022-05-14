import React, { useContext } from "react";
import { ThemeContext } from "../App";

export default function Content() {
  const { theme } = useContext(ThemeContext);
  return (
    <main className={theme === "dark" ? "dark" : "light"}>
      <div>
        <h1> React Workshop</h1>
        <p>Dark Mode Workshop</p>
      </div>

      <img
        src={
          theme === "dark"
            ? "statics/images/dark.svg"
            : "statics/images/light.svg"
        }
        alt="Logo"
      />
    </main>
  );
}
