import React, { useContext } from 'react';
import { useObserver } from 'mobx-react';
import { StoreContext } from '../../store/StoreProvider';

const BooksList = () => {
  const store = useContext(StoreContext);

  // track changes
  return useObserver(() => (
    <ul>
      {store.books.map(book => <li key={book}>{book}</li>)}
    </ul>
  ));
}

export default BooksList;
