import React, { useContext, useState } from 'react';
import { StoreContext } from '../../store/StoreProvider';

const BooksForm = () => {
  const store = useContext(StoreContext);
  const [book, setBook] = useState('');

  return (
    <form onSubmit={e => {
      e.preventDefault();
      store.addBook(book);
      setBook("");
    }}>
      <input type="text" value={book} onChange={({ target }) => setBook(target.value)} />
      <button>Add</button>
    </form>
  )
}

export default BooksForm;
