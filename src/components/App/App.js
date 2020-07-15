import React from 'react';
import StoreProvider from '../../store/StoreProvider';
import BooksList from '../BooksList/BooksList';
import BooksForm from '../BooksForm/BooksForm';

function App() {
  return (
    <StoreProvider>
      <h1>My Bookshelf</h1>
      <BooksList />
      <BooksForm />
    </StoreProvider>
  );
}

export default App;
