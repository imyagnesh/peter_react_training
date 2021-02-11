import React, { createContext, useState } from 'react';

// context
// 1. Provider -> Provide data
// 2. Consumer -> consume data

export const LocaleContext = createContext();

// eslint-disable-next-line react/prop-types
export const LocaleProvider = ({ children }) => {
  const [locale, setLocale] = useState('en');

  return (
    <LocaleContext.Provider
      value={{
        locale,
        setLocale,
      }}>
      {children}
    </LocaleContext.Provider>
  );
};
