import React, { createContext } from 'react';
import { useLocalStore } from 'mobx-react';

export const StoreContext = createContext();

const StoreProvider = ({ children }) => {
  const store = useLocalStore(() => ({
    books: ['American Gods', 'The Beautiful and the Damned']
  }));

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  )
}

export default StoreProvider;
