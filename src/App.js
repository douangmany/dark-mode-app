import React, { useState } from "react";
import Content from "./Components/Content";
import Title from "./Components/Title";
import "./App.css";
import { createContext } from "react";

export const ThemeContext = createContext();

export default function App() {
  const [theme, setTheme] = useState("light");
  return (
    <ThemeContext.Provider value={{theme,setTheme}}>
      <div className="app">
        <Title />
        <Content />
      </div>
    </ThemeContext.Provider>
  );
}
