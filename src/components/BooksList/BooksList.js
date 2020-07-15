import React, { useContext } from 'react';
import { StoreContext } from '../../store/StoreProvider';

const BooksList = () => {
  const store = useContext(StoreContext);

  return (
    <ul>
      {store.books.map(book => <li key={book}>{book}</li>)}
    </ul>
  );
}

export default BooksList;
