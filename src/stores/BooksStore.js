import React, { createContext, useContext } from 'react';
import { useLocalStore } from 'mobx-react';

// context allows you to provide values at any level of the component hierarchy (avoid prop drilling)
const StoreContext = createContext();

// build provider from context; wrap around children and define store within
export const StoreProvider = ({ children }) => {
  const store = useLocalStore(() => ({
    books: [],
    // able to mutate state; mobx tracks changes
    addBook: book => store.books.push(book),
    // value of 'get' function is accessed as if it were a property (doesn't need to be called)
    get booksCount() {
      return store.books.length
    }
  }));

  // make store the value of the provider to pass it to children
  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
}

export const useBooksStore = () => {
  const store = useContext(StoreContext);
  return store;
}
