import React from 'react';
import { StoreProvider } from '../../stores/BooksStore';
import BooksList from '../BooksList/BooksList';
import BooksForm from '../BooksForm/BooksForm';
import Header from '../Header/Header';

function App() {
  return (
    <StoreProvider>
      <Header />
      <h1>My Bookshelf</h1>
      <BooksList />
      <BooksForm />
    </StoreProvider>
  );
}

export default App;
