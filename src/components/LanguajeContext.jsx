import React, { createContext, useState, useContext } from "react";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const languages = [
    { name: "Español", code: "es", flag: "https://flagcdn.com/w40/es.png" },
    { name: "Inglés", code: "en", flag: "https://flagcdn.com/w40/gb.png" },
  ];
  
const translations = {
    es: {
      changeLanguage: "Cambiar Idioma",
      changeColor: "Cambiar Color",
      profile: "Perfil",
      settings: "Ajustes",
      chats: "Chats",
    },
    en: {
      changeLanguage: "Change Language",
      changeColor: "Change Color",
      profile: "Profile",
      settings: "Settings",
      chats: "Chats",
    },
  };

  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language.value);
  };

  const translate = (key) => translations[selectedLanguage.code][key] || key;

  return (
    <LanguageContext.Provider value={{ selectedLanguage, handleLanguageChange, languages, translate}}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLan = () => useContext(LanguageContext);