import { createContext } from "react";

// trường hợp context là  giá trị mặc định
export type ThemeContextType = "light" | "dark";

const ThemeContext = createContext<ThemeContextType>("dark");

export default ThemeContext;
