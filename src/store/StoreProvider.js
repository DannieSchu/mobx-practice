import React, { createContext } from 'react';
import { useLocalStore } from 'mobx-react';

export const StoreContext = createContext();

const StoreProvider = ({ children }) => {
  const store = useLocalStore(() => ({
    books: [],
    // able to mutate state; mobx tracks changes for us
    addBook: book => store.books.push(book)
  }));

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  )
}

export default StoreProvider;
