import React, { createContext, useState, useContext, useEffect } from 'react';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  // Load initial language from localStorage or default to 'id'
  const [language, setLanguage] = useState(() => {
    const savedLang = localStorage.getItem('appLang');
    return savedLang ? savedLang : 'id';
  });

  // Save language to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('appLang', language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(prevLang => (prevLang === 'id' ? 'en' : 'id'));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  return useContext(LanguageContext);
};
