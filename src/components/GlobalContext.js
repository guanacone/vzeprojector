import React, { createContext, useState } from 'react';

// Create a global context
const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  return (
    <GlobalContext.Provider value={[isCartOpen, setIsCartOpen]}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContext;
