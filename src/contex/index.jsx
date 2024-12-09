import React, { createContext, useState, useEffect } from "react";

export const ApiContext = createContext();

export const ApiProvider = ({ children }) => {
  const [selectedLanguage, setSelectedLanguage] = useState("english");
  const [translations, setTranslations] = useState({});

  // Load translations based on selected language
  useEffect(() => {
    const loadTranslations = async () => {
      const languageFile = await import(`../local/${selectedLanguage}.json`);
      setTranslations(languageFile);
    };

    loadTranslations();
  }, [selectedLanguage]);

  const contextValue = {
    baseUrl: "https://hansadhwani.sanskritigram.org/",
    selectedLanguage,
    setSelectedLanguage,
    translations, // Contains the current language's translations
  };

  return (
    <ApiContext.Provider value={contextValue}>
      {children}
    </ApiContext.Provider>
  );
};
