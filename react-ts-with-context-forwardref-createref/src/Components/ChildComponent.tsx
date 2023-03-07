import React, { useContext } from "react";
import ThemeContext from "../context";

export default function ChildComponent() {
  const theme = useContext(ThemeContext);
  return <div>The current user is {theme}</div>;
}
