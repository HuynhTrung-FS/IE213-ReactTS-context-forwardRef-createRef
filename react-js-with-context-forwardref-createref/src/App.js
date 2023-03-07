import "./App.css";
import { useState } from "react";
import ChildComponent from "./components/ChildComponent";
import CurrentUser from "./context";


function App() {
  const [theme, setTheme] = useState("light");
  return (
    <CurrentUser.Provider value={theme}>
      <div className="App">
        <ChildComponent />
      </div>
    </CurrentUser.Provider>
  );
}

export default App;
