import React, { createContext, useState, useContext } from 'react';

interface ThemeContextData {
  isDarkTheme: boolean;
  setIsDarkTheme(newValue: boolean): void;
}

const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData);

const ThemeProvider: React.FC = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(false);

  return (
    <ThemeContext.Provider value={{ isDarkTheme, setIsDarkTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

function useTheme(): ThemeContextData {
  const context = useContext(ThemeContext);

  // if (!context) {
  //   throw new Error('useTheme must be used within an ThemeProvider');
  // }

  return context;
}

export { ThemeProvider, useTheme };
