import React from 'react';
import { useObserver } from 'mobx-react';
import { useBooksStore } from '../../stores/BooksStore';

const Header = () => {
  const store = useBooksStore();
  
  return useObserver(() => (
    <h3>Number of Books: {store.booksCount}</h3>
  ))
}

export default Header;
