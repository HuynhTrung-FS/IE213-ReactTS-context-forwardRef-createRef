import { useContext } from "react";
import ThemeContext from "../context";

const ChildComponent = () => {
  const theme = useContext(ThemeContext);
  return <p>The current User is {theme}.</p>;
};

export default ChildComponent;
