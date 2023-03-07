import React from "react";
import "./App.css";

import { useState } from "react";
import ChildComponent from "./Components/ChildComponent";
import CurrentUserContext, { CurrentUserContextType } from "./context";

function App() {
  const [user, setUser] = useState<CurrentUserContextType>({
    username: "filiptammergard",
  });
  return (
    <CurrentUserContext.Provider value={user}>
      <div className="App">
        <ChildComponent />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
