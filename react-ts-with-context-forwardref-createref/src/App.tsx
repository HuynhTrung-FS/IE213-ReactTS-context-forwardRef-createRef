import React from "react";
import "./App.css";

import { useState } from "react";
import ChildComponent from "./Components/ChildComponent";
import ThemeContext, { ThemeContextType } from "./context";

function App() {
  const [theme, setTheme] = useState<ThemeContextType>("dark");
  return (
    <ThemeContext.Provider value={theme}>
      <div className="App">
        <ChildComponent />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
