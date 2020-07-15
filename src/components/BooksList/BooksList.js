import React from 'react';
import { useObserver } from 'mobx-react';
import { useBooksStore } from '../../stores/BooksStore';

const BooksList = () => {
  const store = useBooksStore();

  // track changes
  return useObserver(() => (
    <ul>
      {store.books.map(book => <li key={book}>{book}</li>)}
    </ul>
  ));
}

export default BooksList;
