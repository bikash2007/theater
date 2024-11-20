import { createContext } from "react";

export const ApiContext = createContext();
export const ApiProvider = ({ children }) => {
  const baseUrl = "https://hansadhwani.sanskritigram.org/";
  return <ApiContext.Provider value={baseUrl}>{children}</ApiContext.Provider>;
};
