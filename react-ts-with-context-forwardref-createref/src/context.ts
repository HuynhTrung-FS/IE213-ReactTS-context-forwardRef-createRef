import { createContext } from "react";

// trường hợp context không có giá trị mặc định
export interface CurrentUserContextType {
  username: string;
}

const CurrentUserContext = createContext<CurrentUserContextType | null>(null);

export default CurrentUserContext;
