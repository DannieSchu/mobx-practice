import React from 'react';
import StoreProvider from '../../store/StoreProvider';
import BooksList from '../BooksList/BooksList';

function App() {
  return (
    <StoreProvider>
      <h1>My Bookshelf</h1>
      <BooksList />
    </StoreProvider>
  );
}

export default App;
