import { createContext } from "react";

export const ApiContext = createContext();
export const ApiProvider = ({ children }) => {
  const baseUrl = "hello";
  return <ApiContext.Provider value={baseUrl}>{children}</ApiContext.Provider>;
};
