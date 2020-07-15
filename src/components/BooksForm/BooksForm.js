import React, { useState } from 'react';
import { useBooksStore } from '../../stores/BooksStore';

const BooksForm = () => {
  const store = useBooksStore();
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
